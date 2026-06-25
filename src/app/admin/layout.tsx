"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const NAV = [
  { href: "/admin/dashboard",          label: "Dashboard" },
  { href: "/admin/bookings",           label: "Bookings" },
  { href: "/admin/calendar",           label: "Calendar" },
  { href: "/admin/customers",          label: "Customers" },
  { href: "/admin/fleet",              label: "Fleet" },
  { href: "/admin/pricing",            label: "Pricing" },
  { href: "/admin/promo-codes",        label: "Promo Codes" },
  { href: "/admin/blogs",              label: "Blogs" },
  { href: "/admin/reviews",            label: "Reviews" },
  { href: "/admin/reports",            label: "Reports" },
  { href: "/admin/invoice-generator",  label: "Invoice Gen." },
  { href: "/admin/audit-log",          label: "Audit Log" },
  { href: "/admin/support",            label: "Support" },
  { href: "/admin/whatsapp-templates", label: "WA Templates" },
  { href: "/admin/settings",           label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router   = useRouter();
  const [user,      setUser]      = useState<any>(null);
  const [checked,   setChecked]   = useState(false);
  const [sideOpen,  setSideOpen]  = useState(false);

  useEffect(() => {
    // Check current session on mount
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user);
      } else if (pathname !== "/admin/login") {
        router.replace("/admin/login");
      }
      setChecked(true);
    });

    // Listen for auth changes (login / logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
        if (pathname !== "/admin/login") router.replace("/admin/login");
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [pathname, router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  // Still checking auth
  if (!checked) {
    return (
      <div style={{ minHeight: "100vh", background:"#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#444", fontSize: "0.85rem" }}>Loading...</div>
      </div>
    );
  }

  // Login page — no sidebar
  if (pathname === "/admin/login") return <>{children}</>;

  // Not logged in — redirect handled above
  if (!user) return null;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background:"#ffffff", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background:"#ffffff",
        borderRight: "1px solid #1e1e1e",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0, left: 0, bottom: 0,
        zIndex: 50,
        transform: sideOpen ? "translateX(0)" : "translateX(-220px)",
        transition: "transform 0.25s ease",
      }}>
        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid #1e1e1e" }}>
          <div style={{ color:"#0C58D1", fontWeight: 800, fontSize: "0.95rem" }}>DAT Admin</div>
          <div style={{ color:"#64748B", fontSize: "0.72rem", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {user.email}
          </div>
        </div>

        <nav style={{ flex: 1, overflowY: "auto", padding: "0.75rem 0" }}>
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setSideOpen(false)}
              style={{
                display: "block",
                padding: "0.55rem 1.5rem",
                fontSize: "0.83rem",
                textDecoration: "none",
                color:      pathname.startsWith(n.href) ? "#f5c518" : "#888",
                background: pathname.startsWith(n.href) ? "rgba(245,197,24,0.08)" : "transparent",
                borderLeft: pathname.startsWith(n.href) ? "2px solid #f5c518" : "2px solid transparent",
                fontWeight: pathname.startsWith(n.href) ? 700 : 400,
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #1e1e1e" }}>
          <button
            onClick={logout}
            style={{ width: "100%", background:"#ffffff", color:"#64748B", border:"1px solid #e5e7eb", borderRadius: 6, padding: "0.6rem", cursor: "pointer", fontSize: "0.82rem" }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, marginLeft: sideOpen ? 220 : 0, transition: "margin 0.25s ease", display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <header style={{
          background:"#ffffff",
          borderBottom: "1px solid #1e1e1e",
          padding: "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}>
          <button
            onClick={() => setSideOpen(p => !p)}
            style={{ background: "none", border: "none", color:"#64748B", cursor: "pointer", fontSize: "1.3rem", padding: 4 }}
          >
            ☰
          </button>
          <div style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>
            {NAV.find(n => pathname.startsWith(n.href))?.label ?? "Admin"}
          </div>
          <div style={{ flex: 1 }} />
          <Link href="/" target="_blank" style={{ color: "#444", fontSize: "0.78rem", textDecoration: "none" }}>
            View Site ↗
          </Link>
        </header>

        {/* Overlay */}
        {sideOpen && (
          <div
            onClick={() => setSideOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 49 }}
          />
        )}

        <main style={{ flex: 1, padding: "1.5rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
