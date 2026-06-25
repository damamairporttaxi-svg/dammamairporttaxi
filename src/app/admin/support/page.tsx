"use client";
import React, { useEffect, useState } from "react";

const statusColor: Record<string,string> = { open:"#e65100", in_progress:"#1565c0", resolved:"#2e7d32" };

export default function AdminSupport() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const gold = "#0C58D1";

  const load = () => fetch("/api/admin/support-manage").then(r=>r.json()).then(d=>setTickets(d.tickets??[]));
  useEffect(()=>{ load(); },[]);

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/support-manage",{ method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id,status}) });
    load(); if(selected?.id===id) setSelected((p: any)=>({...p,status}));
  }

  return (
    <div style={{display:"grid",gridTemplateColumns:selected?"1fr 360px":"1fr",gap:"1.25rem",alignItems:"start"}}>
      <div>
        <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Support Tickets ({tickets.length})</h1>
        <div style={{display:"flex",flexDirection:"column",gap:"0.65rem"}}>
          {tickets.length===0&&<div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"2rem",textAlign:"center",color:"#64748B"}}>No support tickets</div>}
          {tickets.map(t=>(
            <div key={t.id} onClick={()=>setSelected(t)} style={{background:"#ffffff",border:`1px solid ${selected?.id===t.id?"#f5c518":"#222"}`,borderRadius:10,padding:"1.1rem 1.25rem",cursor:"pointer",transition:"border-color 0.2s"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"}}>
                <span style={{color: "var(--text-primary)",fontWeight:700,fontSize:"0.9rem"}}>{t.subject}</span>
                <span style={{background:statusColor[t.status]??"#333",color: "var(--text-primary)",padding:"2px 8px",borderRadius:4,fontSize:"0.7rem",fontWeight:700}}>{t.status?.replace("_"," ").toUpperCase()}</span>
              </div>
              <div style={{color:"#64748B",fontSize:"0.78rem"}}>{t.customer_name} · {t.customer_email}</div>
              <div style={{color:"#64748B",fontSize:"0.75rem",marginTop:2}}>{t.created_at?.split("T")[0]}</div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"1.5rem",position:"sticky",top:80}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:"1rem"}}>
            <span style={{color: "var(--text-primary)",fontWeight:700,fontSize:"0.9rem"}}>Ticket Detail</span>
            <button onClick={()=>setSelected(null)} style={{background:"none",border:"none",color:"#64748B",cursor:"pointer",fontSize:"1.1rem"}}>×</button>
          </div>
          <div style={{marginBottom:"1rem"}}>
            {[["From",selected.customer_name],["Email",selected.customer_email],["Subject",selected.subject],["Date",selected.created_at?.split("T")[0]]].map(([l,v])=>(
              <div key={String(l)} style={{display:"flex",justifyContent:"space-between",padding:"0.4rem 0",borderBottom:"1px solid #1a1a1a",fontSize:"0.82rem"}}>
                <span style={{color:"#64748B"}}>{l}</span><span style={{color: "var(--text-primary)"}}>{String(v)}</span>
              </div>
            ))}
          </div>
          <div style={{background:"#ffffff",borderRadius:8,padding:"1rem",marginBottom:"1rem",color:"#64748B",fontSize:"0.83rem",lineHeight:1.7}}>{selected.message}</div>
          <div style={{display:"flex",gap:"0.5rem"}}>
            {["open","in_progress","resolved"].map(s=>(
              <button key={s} onClick={()=>updateStatus(selected.id,s)} style={{flex:1,background:selected.status===s?statusColor[s]:"#222",color:selected.status===s?"#fff":"#888",border:"none",borderRadius:6,padding:"0.55rem",cursor:"pointer",fontSize:"0.72rem",fontWeight:600,textTransform:"capitalize"}}>
                {s.replace("_"," ")}
              </button>
            ))}
          </div>
          {selected.customer_email&&<a href={`mailto:${selected.customer_email}`} style={{display:"block",textAlign:"center",background:"#0C58D1",color:"#000",borderRadius:6,padding:"0.6rem",textDecoration:"none",fontWeight:700,fontSize:"0.82rem",marginTop:"0.75rem"}}>Reply by Email</a>}
        </div>
      )}
    </div>
  );
}
