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
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("admin_auth") === "1") {
      setAuthed(true);
    }
  }, []);

  function login() {
    if (pw === ADMIN_PASS) {
      localStorage.setItem("admin_auth", "1");
      setAuthed(true);
    } else {
      setErr(true);
    }
  }

  function logout() {
    localStorage.removeItem("admin_auth");
    setAuthed(false);
    router.push("/admin/dashboard");
  }

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0c0c0c" }}>
        <div style={{ background: "#141414", border: "1px solid #222", borderRadius: 12, padding: "2.5rem", width: "100%", maxWidth: 380, textAlign: "center" }}>
          <h1 style={{ color: "#f5c518", fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.5rem" }}>Admin Panel</h1>
          <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1.5rem" }}>Dammam Airport Taxi</p>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setErr(false); }}
            onKeyDown={e => e.key === "Enter" && login()}
            placeholder="Enter admin password"
            style={{ width: "100%", background: "#0c0c0c", border: `1px solid ${err ? "#e53e3e" : "#333"}`, borderRadius: 6, padding: "0.8rem 1rem", color: "#fff", fontSize: "0.95rem", boxSizing: "border-box", marginBottom: "1rem" }}
          />
          {err && <p style={{ color: "#e53e3e", fontSize: "0.82rem", marginBottom: "0.75rem" }}>Incorrect password</p>}
          <button onClick={login} style={{ width: "100%", background: "#f5c518", color: "#000", border: "none", borderRadius: 6, padding: "0.85rem", fontWeight: 700, cursor: "pointer", fontSize: "1rem" }}>
            Login
          </button>
        </div>
      </div>
    );
  }

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
