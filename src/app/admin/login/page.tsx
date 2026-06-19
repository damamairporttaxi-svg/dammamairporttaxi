"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  // Already logged in → redirect to dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.replace("/admin/dashboard");
      else setChecking(false);
    });
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (authError) {
      setError(authError.message === "Invalid login credentials"
        ? "Incorrect email or password."
        : authError.message);
      setLoading(false);
      return;
    }

    router.replace("/admin/dashboard");
  }

  if (checking) {
    return (
      <div style={{ minHeight: "100vh", background: "#0c0c0c", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#444", fontSize: "0.85rem" }}>Checking session...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0c0c0c",
      fontFamily: "Arial, sans-serif",
      padding: "1rem",
    }}>
      <div style={{
        background: "#141414",
        border: "1px solid #222",
        borderRadius: 16,
        padding: "2.5rem 2rem",
        width: "100%",
        maxWidth: 400,
        boxShadow: "0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(245,197,24,0.05)",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: "#f5c518", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
            DAT Admin
          </div>
          <div style={{ color: "#555", fontSize: "0.82rem", marginTop: 6 }}>
            Dammam Airport Taxi — Control Panel
          </div>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Email */}
          <div>
            <label style={{
              display: "block", color: "#888", fontSize: "0.75rem",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 6,
            }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(""); }}
              placeholder="admin@example.com"
              autoFocus
              autoComplete="email"
              style={{
                width: "100%", background: "#0c0c0c",
                border: `1px solid ${error ? "#e53e3e" : "#333"}`,
                borderRadius: 8, padding: "0.85rem 1rem",
                color: "var(--text-primary)", fontSize: "0.95rem",
                boxSizing: "border-box", outline: "none",
              }}
            />
          </div>

          {/* Password */}
          <div>
            <label style={{
              display: "block", color: "#888", fontSize: "0.75rem",
              fontWeight: 600, textTransform: "uppercase", marginBottom: 6,
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(""); }}
              placeholder="••••••••"
              autoComplete="current-password"
              style={{
                width: "100%", background: "#0c0c0c",
                border: `1px solid ${error ? "#e53e3e" : "#333"}`,
                borderRadius: 8, padding: "0.85rem 1rem",
                color: "var(--text-primary)", fontSize: "0.95rem",
                boxSizing: "border-box", outline: "none",
              }}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: "rgba(229,62,62,0.1)", border: "1px solid rgba(229,62,62,0.3)",
              borderRadius: 6, padding: "0.65rem 0.9rem",
              color: "#e53e3e", fontSize: "0.82rem",
            }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !email || !password}
            style={{
              width: "100%",
              background: loading || !email || !password ? "#1e1e1e" : "#f5c518",
              color: loading || !email || !password ? "#444" : "#000",
              border: "none", borderRadius: 8,
              padding: "0.9rem", fontWeight: 700,
              fontSize: "1rem", cursor: loading || !email || !password ? "not-allowed" : "pointer",
              transition: "all 0.2s", marginTop: "0.25rem",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div style={{ marginTop: "1.75rem", textAlign: "center", color: "#333", fontSize: "0.73rem" }}>
          Authorized personnel only · Dammam Airport Taxi
        </div>
      </div>
    </div>
  );
}
