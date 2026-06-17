"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/admin/dashboard",           label: "Dashboard" },
  { href: "/admin/bookings",            label: "Bookings" },
  { href: "/admin/calendar",            label: "Calendar" },
  { href: "/admin/customers",           label: "Customers" },
  { href: "/admin/fleet",               label: "Fleet" },
  { href: "/admin/pricing",             label: "Pricing" },
  { href: "/admin/promo-codes",         label: "Promo Codes" },
  { href: "/admin/blogs",               label: "Blogs" },
  { href: "/admin/reviews",             label: "Reviews" },
  { href: "/admin/reports",             label: "Reports" },
  { href: "/admin/invoice-generator",   label: "Invoice Gen." },
  { href: "/admin/audit-log",           label: "Audit Log" },
  { href: "/admin/support",             label: "Support" },
  { href: "/admin/whatsapp-templates",  label: "WA Templates" },
  { href: "/admin/settings",            label: "Settings" },
];

const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS ?? "admin123";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    const ok = typeof window !== "undefined" && localStorage.getItem("admin_auth") === "1";
    setAuthed(ok);
    setChecked(true);
    if (!ok && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [pathname, router]);

  function logout() {
    localStorage.removeItem("admin_auth");
    setAuthed(false);
    router.replace("/admin/login");
  }

  // Show nothing until auth check completes
  if (!checked) return null;

  // On login page, just render children (no sidebar)
  if (pathname === "/admin/login") return <>{children}</>;

  // Not authed — redirect handled in useEffect
  if (!authed) return null;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0c0c0c", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: 220, background: "#141414", borderRight: "1px solid #1e1e1e",
        display: "flex", flexDirection: "column",
        position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 50,
        transform: sideOpen ? "translateX(0)" : "translateX(-220px)",
        transition: "transform 0.25s ease",
      }}>
        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid #1e1e1e" }}>
          <div style={{ color: "#f5c518", fontWeight: 800, fontSize: "0.95rem" }}>DAT Admin</div>
          <div style={{ color: "#555", fontSize: "0.72rem", marginTop: 2 }}>Dammam Airport Taxi</div>
        </div>
        <nav style={{ flex: 1, overflowY: "auto", padding: "0.75rem 0" }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setSideOpen(false)} style={{
              display: "block", padding: "0.55rem 1.5rem", fontSize: "0.83rem", textDecoration: "none",
              color: pathname.startsWith(n.href) ? "#f5c518" : "#888",
              background: pathname.startsWith(n.href) ? "rgba(245,197,24,0.08)" : "transparent",
              borderLeft: pathname.startsWith(n.href) ? "2px solid #f5c518" : "2px solid transparent",
              fontWeight: pathname.startsWith(n.href) ? 700 : 400,
            }}>{n.label}</Link>
          ))}
        </nav>
        <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #1e1e1e" }}>
          <button onClick={logout} style={{ width: "100%", background: "#222", color: "#888", border: "none", borderRadius: 6, padding: "0.6rem", cursor: "pointer", fontSize: "0.82rem" }}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, marginLeft: sideOpen ? 220 : 0, transition: "margin 0.25s ease", display: "flex", flexDirection: "column" }}>
        {/* Top bar */}
        <header style={{ background: "#141414", borderBottom: "1px solid #1e1e1e", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 40 }}>
          <button onClick={() => setSideOpen(p => !p)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "1.3rem", padding: 4 }}>☰</button>
          <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
            {NAV.find(n => pathname.startsWith(n.href))?.label ?? "Admin"}
          </div>
          <div style={{ flex: 1 }} />
          <Link href="/" style={{ color: "#555", fontSize: "0.78rem", textDecoration: "none" }} target="_blank">View Site ↗</Link>
        </header>

        {/* Overlay for mobile */}
        {sideOpen && (
          <div onClick={() => setSideOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 49 }} />
        )}

        <main style={{ flex: 1, padding: "1.5rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
