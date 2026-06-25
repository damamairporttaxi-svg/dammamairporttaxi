"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Message {
  id: number;
  text: string;
  from: "bot" | "user";
  time: string;
}

const BOT_REPLIES: Record<string, string> = {
  default: "Thank you for your message! Our team will reply shortly. For instant booking, click 'Send on WhatsApp' below.",
  price: "Our fares are fixed with no surge pricing. Dammam → Bahrain from 350 SAR, → Riyadh from 900 SAR. Want a quote?",
  booking: "Booking is easy! Just tell us: pickup location, destination, date & time, and number of passengers.",
  airport: "We offer free 60-minute waiting + flight tracking for all airport pickups. No extra charge for delays!",
  hello: "Hello! 👋 Welcome to Dammam Airport Taxi. How can I help you today?",
  hi: "Hi there! 👋 Welcome to Dammam Airport Taxi. How can I help you today?",
};

function getBotReply(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("price") || lower.includes("fare") || lower.includes("cost") || lower.includes("how much")) return BOT_REPLIES.price;
  if (lower.includes("book") || lower.includes("reserve")) return BOT_REPLIES.booking;
  if (lower.includes("airport") || lower.includes("wait") || lower.includes("flight")) return BOT_REPLIES.airport;
  if (lower === "hi" || lower === "hello" || lower === "hey") return BOT_REPLIES[lower] ?? BOT_REPLIES.hello;
  return BOT_REPLIES.default;
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function LiveChat() {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: "bot", text: locale === "en" ? "Hello! 👋 Welcome to Dammam Airport Taxi. How can I help you today?" : "مرحباً! 👋 أهلاً بك في تاكسي مطار الدمام. كيف يمكنني مساعدتك؟", time: getTime() },
  ]);
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), from: "user", text, time: getTime() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, from: "bot", text: reply, time: getTime() }]);
      setTyping(false);
      if (!open) setUnread(u => u + 1);
    }, 1200);
  };

  const sendWhatsApp = () => {
    const last = messages.filter(m => m.from === "user").pop();
    const msg = last ? last.text : "Hello, I need help with a taxi booking.";
    window.open(`https://wa.me/966569487569?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div style={S.window}>
          {/* Header */}
          <div style={S.header}>
            <div style={S.headerLeft}>
              <div style={S.avatar}>
                <span style={{ fontSize: "1.1rem" }}>🚖</span>
              </div>
              <div>
                <p style={S.agentName}>{locale === "en" ? "Dammam Airport Taxi" : "تاكسي مطار الدمام"}</p>
                <div style={S.onlineRow}>
                  <span style={S.onlineDot} />
                  <span style={S.onlineTxt}>{locale === "en" ? "Online · Typically replies in 2 min" : "متصل · يرد عادةً في دقيقتين"}</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={S.closeBtn}>✕</button>
          </div>

          {/* Messages */}
          <div style={S.msgArea}>
            {messages.map(m => (
              <div key={m.id} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", marginBottom: "0.6rem" }}>
                {m.from === "bot" && <div style={S.botAvatar}>🚖</div>}
                <div style={{ maxWidth: "75%" }}>
                  <div style={m.from === "bot" ? S.botBubble : S.userBubble}>{m.text}</div>
                  <p style={{ fontSize: "0.65rem", color: "#94A3B8", marginTop: "2px", textAlign: m.from === "user" ? "right" : "left" }}>{m.time}</p>
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "0.6rem" }}>
                <div style={S.botAvatar}>🚖</div>
                <div style={S.typingBubble}>
                  <span style={S.dot} /><span style={{ ...S.dot, animationDelay: "0.2s" }} /><span style={{ ...S.dot, animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* WhatsApp quick button */}
          <div style={S.waBtnRow}>
            <button onClick={sendWhatsApp} style={S.waBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9 9 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.277-1.497A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.951 9.951 0 01-5.19-1.352l-.374-.222-3.726.888.944-3.638-.244-.386A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              {locale === "en" ? "Continue on WhatsApp" : "تابع على واتساب"}
            </button>
          </div>

          {/* Input */}
          <div style={S.inputRow}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder={locale === "en" ? "Type a message..." : "اكتب رسالة..."}
              style={S.input}
            />
            <button onClick={send} style={S.sendBtn} disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button onClick={() => setOpen(o => !o)} style={S.fab} aria-label="Open chat">
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        )}
        {!open && unread > 0 && <span style={S.badge}>{unread}</span>}
      </button>

      <style>{`
        @keyframes bounce { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }
      `}</style>
    </>
  );
}

const S: Record<string, React.CSSProperties> = {
  window: {
    position: "fixed", bottom: "90px", right: "24px", zIndex: 9998,
    width: "360px", maxWidth: "calc(100vw - 32px)",
    background: "#ffffff", borderRadius: "16px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
    display: "flex", flexDirection: "column", overflow: "hidden",
    fontFamily: "inherit",
    border: "1px solid #e5e7eb",
  },
  header: {
    background: "#0C58D1", padding: "1rem 1.2rem",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: "0.75rem" },
  avatar: {
    width: "42px", height: "42px", borderRadius: "50%",
    background: "rgba(255,255,255,0.20)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "1.2rem", flexShrink: 0,
  },
  agentName: { color: "#ffffff", fontWeight: 700, fontSize: "0.95rem", margin: 0 },
  onlineRow: { display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" },
  onlineDot: {
    width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80",
    display: "inline-block", flexShrink: 0,
  },
  onlineTxt: { color: "rgba(255,255,255,0.85)", fontSize: "0.72rem" },
  closeBtn: {
    background: "rgba(255,255,255,0.15)", border: "none", color: "#ffffff",
    width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer",
    fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center",
  },
  msgArea: {
    flex: 1, overflowY: "auto", padding: "1rem",
    maxHeight: "320px", minHeight: "200px", background: "#f8fafc",
  },
  botAvatar: {
    width: "28px", height: "28px", borderRadius: "50%",
    background: "#EFF6FF", display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: "0.85rem", flexShrink: 0,
    marginRight: "6px", alignSelf: "flex-end",
  },
  botBubble: {
    background: "#ffffff", border: "1px solid #e5e7eb",
    borderRadius: "12px 12px 12px 2px",
    padding: "0.6rem 0.85rem", fontSize: "0.85rem",
    color: "#000000", lineHeight: 1.5,
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },
  userBubble: {
    background: "#0C58D1",
    borderRadius: "12px 12px 2px 12px",
    padding: "0.6rem 0.85rem", fontSize: "0.85rem",
    color: "#ffffff", lineHeight: 1.5,
  },
  typingBubble: {
    background: "#ffffff", border: "1px solid #e5e7eb",
    borderRadius: "12px 12px 12px 2px",
    padding: "0.7rem 1rem", display: "flex", gap: "4px", alignItems: "center",
  },
  dot: {
    width: "7px", height: "7px", borderRadius: "50%",
    background: "#94A3B8", display: "inline-block",
    animation: "bounce 1.2s infinite ease-in-out",
  },
  waBtnRow: {
    padding: "0.6rem 1rem 0.3rem",
    background: "#ffffff", borderTop: "1px solid #f1f5f9",
  },
  waBtn: {
    width: "100%", background: "#25d366", color: "#ffffff",
    border: "none", borderRadius: "8px", padding: "0.6rem",
    fontWeight: 600, fontSize: "0.85rem", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
  },
  inputRow: {
    display: "flex", gap: "8px", padding: "0.75rem 1rem",
    background: "#ffffff", borderTop: "1px solid #e5e7eb",
    alignItems: "center",
  },
  input: {
    flex: 1, border: "1px solid #e5e7eb", borderRadius: "8px",
    padding: "0.6rem 0.85rem", fontSize: "0.88rem",
    outline: "none", color: "#000000", background: "#f8fafc",
  },
  sendBtn: {
    width: "38px", height: "38px", borderRadius: "8px",
    background: "#0C58D1", border: "none", color: "#ffffff",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", flexShrink: 0,
  },
  fab: {
    position: "fixed", bottom: "24px", right: "24px", zIndex: 9999,
    width: "56px", height: "56px", borderRadius: "50%",
    background: "#0C58D1", color: "#ffffff", border: "none",
    boxShadow: "0 4px 20px rgba(12,88,209,0.40)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", transition: "all 0.2s ease",
  },
  badge: {
    position: "absolute", top: "-4px", right: "-4px",
    background: "#dc2626", color: "#ffffff",
    width: "20px", height: "20px", borderRadius: "50%",
    fontSize: "0.7rem", fontWeight: 700,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
};
