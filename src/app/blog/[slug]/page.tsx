import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE = "https://dammamairporttaxi.com";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title.en.length > 60 ? post.title.en.slice(0, 60).replace(/s+S*$/, "") : post.title.en,
    description: post.excerpt.en,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: { title: post.title.en, description: post.excerpt.en, url: `${BASE}/blog/${slug}`, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category.en === post.category.en).slice(0, 3);
  const more = related.length ? related : blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    description: post.excerpt.en,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: ["en", "ar"],
    mainEntityOfPage: `${BASE}/blog/${slug}`,
    author: { "@type": "Organization", name: "Dammam Airport Taxi", url: BASE },
    publisher: { "@type": "Organization", name: "Dammam Airport Taxi", url: BASE, logo: { "@type": "ImageObject", url: `${BASE}/logo.png` } },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title.en, item: `${BASE}/blog/${slug}` },
    ],
  };

  const pStyle = { lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "1rem" } as const;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="section-padding" style={{ backgroundColor: "var(--bg-primary)", flex: 1 }}>
        <article className="container" style={{ maxWidth: 820 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
            <Link href="/">Home</Link> › <Link href="/blog">Blog</Link>
          </nav>
          <span className="badge-gold">{post.category.en}</span>
          <h1 style={{ margin: "0.75rem 0", lineHeight: 1.25 }}>{post.title.en}</h1>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
            Published <time dateTime={post.date}>{post.date}</time> · Dammam Airport Taxi
          </p>
          <p style={{ ...pStyle, fontSize: "1.1rem", fontWeight: 600 }}>{post.excerpt.en}</p>
          {post.content.en.map((t, i) => (
            <p key={i} style={pStyle}>{t}</p>
          ))}

          <div className="glass-card" style={{ padding: "1.25rem", margin: "2rem 0" }}>
            <strong>Book this transfer</strong>
            <p style={{ ...pStyle, marginBottom: "0.75rem" }}>Fixed fares, 24/7. WhatsApp +966 59 141 9157.</p>
            <a href="https://wa.me/966591419157" className="btn btn-whatsapp" style={{ textDecoration: "none", marginRight: "0.5rem" }}>WhatsApp</a>
            <Link href="/routes" className="btn btn-secondary" style={{ textDecoration: "none" }}>See all routes &amp; fares</Link>
          </div>

          <section lang="ar" dir="rtl" style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border, #e5e7eb)" }}>
            <h2>{post.title.ar}</h2>
            <p style={{ ...pStyle, fontWeight: 600 }}>{post.excerpt.ar}</p>
            {post.content.ar.map((t, i) => (
              <p key={i} style={pStyle}>{t}</p>
            ))}
          </section>

          <section style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.25rem" }}>More guides</h2>
            <ul>
              {more.map((p) => (
                <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title.en}</Link></li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
