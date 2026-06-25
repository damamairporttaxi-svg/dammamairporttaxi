"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const NAV = [
  { href: "/admin/dashboard",          label: "Dashboard",         icon: "⊞" },
  { href: "/admin/bookings",           label: "Bookings",          icon: "📋" },
  { href: "/admin/calendar",           label: "Calendar",          icon: "📅" },
  { href: "/admin/customers",          label: "Customers",         icon: "👤" },
  { href: "/admin/fleet",              label: "Fleet",             icon: "🚗" },
  { href: "/admin/pricing",            label: "Pricing",           icon: "💲" },
  { href: "/admin/promo-codes",        label: "Promo Codes",       icon: "🎟" },
  { href: "/admin/blogs",              label: "Blogs",             icon: "✍" },
  { href: "/admin/reviews",            label: "Reviews",           icon: "⭐" },
  { href: "/admin/reports",            label: "Reports",           icon: "📊" },
  { href: "/admin/invoice-generator",  label: "Invoice Gen.",      icon: "🧾" },
  { href: "/admin/audit-log",          label: "Audit Log",         icon: "🔍" },
  { href: "/admin/support",            label: "Support",           icon: "💬" },
  { href: "/admin/whatsapp-templates", label: "WA Templates",      icon: "📱" },
  { href: "/admin/settings",           label: "Settings",          icon: "⚙" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router   = useRouter();
  const [user,      setUser]      = useState<any>(null);
  const [checked,   setChecked]   = useState(false);
  const [sideOpen,  setSideOpen]  = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setUser(data.session.user);
      else if (pathname !== "/admin/login") router.replace("/admin/login");
      setChecked(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) setUser(session.user);
      else { setUser(null); if (pathname !== "/admin/login") router.replace("/admin/login"); }
    });
    return () => listener.subscription.unsubscribe();
  }, [pathname, router]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  if (!checked) return (
    <div style={{ minHeight:"100vh", background:"#f8fafc", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ color:"#64748B", fontSize:"0.85rem" }}>Loading...</div>
    </div>
  );

  if (pathname === "/admin/login") return <>{children}</>;
  if (!user) return null;

  const activeNav = NAV.find(n => pathname.startsWith(n.href));

  return (
    <div style={{ display:"flex", minHeight:"100vh", background:"#f8fafc", fontFamily:"'Lexend', 'Inter', sans-serif" }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: 240, background:"#0C58D1",
        display:"flex", flexDirection:"column",
        position:"fixed", top:0, left:0, bottom:0, zIndex:50,
        transform: sideOpen ? "translateX(0)" : "translateX(-240px)",
        transition:"transform 0.25s ease",
        boxShadow: sideOpen ? "4px 0 24px rgba(0,0,0,0.15)" : "none",
      }}>

        {/* Logo */}
        <div style={{ padding:"1.4rem 1.5rem", borderBottom:"1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
            <div style={{ background:"#ffffff", color:"#0C58D1", borderRadius:6, padding:"0.3rem 0.55rem", fontWeight:900, fontSize:"0.75rem" }}>DAT</div>
            <div>
              <div style={{ color:"#ffffff", fontWeight:700, fontSize:"0.9rem" }}>Admin Panel</div>
              <div style={{ color:"rgba(255,255,255,0.60)", fontSize:"0.68rem", marginTop:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:160 }}>{user.email}</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex:1, overflowY:"auto", padding:"0.6rem 0" }}>
          {NAV.map(n => {
            const active = pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} onClick={() => setSideOpen(false)} style={{
                display:"flex", alignItems:"center", gap:"0.65rem",
                padding:"0.6rem 1.25rem", fontSize:"0.82rem",
                textDecoration:"none",
                color:      active ? "#ffffff" : "rgba(255,255,255,0.65)",
                background: active ? "rgba(255,255,255,0.15)" : "transparent",
                borderLeft: active ? "3px solid #ffffff" : "3px solid transparent",
                fontWeight: active ? 600 : 400,
                transition:"all 0.15s ease",
              }}>
                <span style={{ fontSize:"0.9rem", opacity: active ? 1 : 0.7 }}>{n.icon}</span>
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding:"1rem 1.25rem", borderTop:"1px solid rgba(255,255,255,0.12)" }}>
          <Link href="/" target="_blank" style={{
            display:"block", textAlign:"center", padding:"0.5rem",
            color:"rgba(255,255,255,0.70)", fontSize:"0.76rem", textDecoration:"none",
            marginBottom:"0.6rem",
          }}>View Site ↗</Link>
          <button onClick={logout} style={{
            width:"100%", background:"rgba(255,255,255,0.12)",
            color:"#ffffff", border:"1px solid rgba(255,255,255,0.20)",
            borderRadius:6, padding:"0.6rem", cursor:"pointer", fontSize:"0.82rem", fontWeight:500,
          }}>Logout</button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex:1, marginLeft: sideOpen ? 240 : 0, transition:"margin 0.25s ease", display:"flex", flexDirection:"column" }}>

        {/* Topbar */}
        <header style={{
          background:"#ffffff", borderBottom:"1px solid #e5e7eb",
          padding:"0 1.5rem", height:56,
          display:"flex", alignItems:"center", gap:"1rem",
          position:"sticky", top:0, zIndex:40,
          boxShadow:"0 1px 4px rgba(0,0,0,0.06)",
        }}>
          <button onClick={() => setSideOpen(p => !p)} style={{
            background:"none", border:"none", cursor:"pointer",
            width:36, height:36, borderRadius:6, display:"flex",
            alignItems:"center", justifyContent:"center",
            color:"#64748B", fontSize:"1.2rem",
          }}>☰</button>

          <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
            <span style={{ color:"#64748B", fontSize:"0.8rem" }}>Admin</span>
            <span style={{ color:"#cbd5e1" }}>/</span>
            <span style={{ color:"#000000", fontSize:"0.85rem", fontWeight:600 }}>
              {activeNav?.label ?? "Panel"}
            </span>
          </div>

          <div style={{ flex:1 }} />

          <div style={{
            background:"#EFF6FF", color:"#0C58D1",
            border:"1px solid rgba(12,88,209,0.20)",
            padding:"0.3rem 0.75rem", borderRadius:20, fontSize:"0.72rem", fontWeight:600,
          }}>● Live</div>
        </header>

        {/* Overlay */}
        {sideOpen && (
          <div onClick={() => setSideOpen(false)} style={{
            position:"fixed", inset:0, background:"rgba(0,0,0,0.40)", zIndex:49,
          }} />
        )}

        {/* Page content */}
        <main style={{ flex:1, padding:"1.75rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
