"use client";
import React, { useEffect, useState } from "react";

export default function AdminReviews() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [msg, setMsg] = useState("");
  const gold = "#f5c518";

  const load = () => fetch("/api/admin/reviews-manage").then(r=>r.json()).then(d=>setReviews(d.reviews??[]));
  useEffect(()=>{ load(); },[]);

  async function toggle(id: string, published: boolean) {
    await fetch("/api/admin/reviews-manage",{ method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id,published:!published}) });
    load(); setMsg("Updated!"); setTimeout(()=>setMsg(""),2000);
  }

  async function del(id: string) {
    if(!confirm("Delete this review?")) return;
    await fetch(`/api/admin/reviews-manage?id=${id}`,{ method:"DELETE" });
    load();
  }

  const stars = (n: number) => "★".repeat(n) + "☆".repeat(5-n);

  return (
    <div>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Customer Reviews {msg&&<span style={{color:gold,fontSize:"0.85rem",marginLeft:10}}>{msg}</span>}</h1>
      <div style={{display:"flex",flexDirection:"column",gap:"0.85rem"}}>
        {reviews.length===0&&<div style={{background:"#141414",border:"1px solid #222",borderRadius:10,padding:"2rem",textAlign:"center",color:"#555"}}>No reviews yet</div>}
        {reviews.map(r=>(
          <div key={r.id} style={{background:"#141414",border:"1px solid #222",borderRadius:10,padding:"1.25rem",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"1rem"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"}}>
                <span style={{color: "var(--text-primary)",fontWeight:700,fontSize:"0.9rem"}}>{r.customer_name}</span>
                <span style={{color:gold,fontSize:"0.85rem"}}>{stars(r.rating)}</span>
                <span style={{color:"#555",fontSize:"0.75rem"}}>{r.created_at?.split("T")[0]}</span>
                <span style={{background:r.published?"#2e7d32":"#555",color: "var(--text-primary)",padding:"1px 7px",borderRadius:4,fontSize:"0.7rem",fontWeight:700}}>{r.published?"LIVE":"HIDDEN"}</span>
              </div>
              <p style={{color:"#aaa",fontSize:"0.85rem",lineHeight:1.6,margin:0}}>{r.comment}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",flexShrink:0}}>
              <button onClick={()=>toggle(r.id,r.published)} style={{background:r.published?"#555":"#1a3a1a",color:r.published?"#aaa":"#4caf50",border:"none",borderRadius:5,padding:"5px 10px",cursor:"pointer",fontSize:"0.75rem",fontWeight:600}}>
                {r.published?"Hide":"Publish"}
              </button>
              <button onClick={()=>del(r.id)} style={{background:"#3d0000",color:"#e53e3e",border:"none",borderRadius:5,padding:"5px 10px",cursor:"pointer",fontSize:"0.75rem"}}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
