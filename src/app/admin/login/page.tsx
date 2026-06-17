"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS ?? "DATAdmin2026!";

export default function AdminLoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  // Already logged in → redirect
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("admin_auth") === "1") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (pw === ADMIN_PASS) {
        localStorage.setItem("admin_auth", "1");
        router.replace("/admin/dashboard");
      } else {
        setErr(true);
        setLoading(false);
        setPw("");
      }
    }, 300);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0c0c0c",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{
        background: "#141414",
        border: "1px solid #222",
        borderRadius: 16,
        padding: "2.5rem 2rem",
        width: "100%",
        maxWidth: 380,
        boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
      }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: "#f5c518", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-0.02em" }}>
            DAT Admin
          </div>
          <div style={{ color: "#444", fontSize: "0.82rem", marginTop: 4 }}>
            Dammam Airport Taxi — Control Panel
          </div>
        </div>

        <form onSubmit={login} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", color: "#888", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>
              Admin Password
            </label>
            <input
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setErr(false); }}
              placeholder="Enter password"
              autoFocus
              style={{
                width: "100%",
                background: "#0c0c0c",
                border: `1px solid ${err ? "#e53e3e" : "#333"}`,
                borderRadius: 8,
                padding: "0.85rem 1rem",
                color: "#fff",
                fontSize: "0.95rem",
                boxSizing: "border-box",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            {err && (
              <p style={{ color: "#e53e3e", fontSize: "0.8rem", marginTop: 6 }}>
                Incorrect password. Try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !pw}
            style={{
              width: "100%",
              background: loading || !pw ? "#333" : "#f5c518",
              color: loading || !pw ? "#666" : "#000",
              border: "none",
              borderRadius: 8,
              padding: "0.9rem",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: loading || !pw ? "not-allowed" : "pointer",
              transition: "all 0.2s",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={{ marginTop: "1.5rem", textAlign: "center", color: "#333", fontSize: "0.75rem" }}>
          Dammam Airport Taxi · Admin Access Only
        </div>
      </div>
    </div>
  );
}
