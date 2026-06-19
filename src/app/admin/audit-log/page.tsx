"use client";
import React, { useEffect, useState } from "react";

export default function AdminAuditLog() {
  const [logs, setLogs] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const gold = "#f5c518";

  useEffect(() => {
    fetch("/api/admin/audit-log?limit=100").then(r=>r.json()).then(d=>{ setLogs(d.logs??[]); setTotal(d.total??0); });
  }, []);

  return (
    <div>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Audit Log <span style={{color:"#555",fontSize:"0.85rem",fontWeight:400}}>({total} total entries)</span></h1>
      <div style={{background:"#141414",border:"1px solid #222",borderRadius:10,overflow:"hidden"}}>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.82rem"}}>
            <thead><tr style={{borderBottom:"1px solid #1e1e1e"}}>
              {["Time","Admin","Action","Entity","Entity ID","Details"].map(h=><th key={h} style={{padding:"0.65rem 1rem",color:"#555",textAlign:"left",fontWeight:600}}>{h}</th>)}
            </tr></thead>
            <tbody>
              {logs.map(l=>(
                <tr key={l.id} style={{borderBottom:"1px solid #1a1a1a"}}>
                  <td style={{padding:"0.55rem 1rem",color:"#555",whiteSpace:"nowrap",fontSize:"0.78rem"}}>{new Date(l.created_at).toLocaleString()}</td>
                  <td style={{padding:"0.55rem 1rem",color:"#aaa"}}>{l.admin_email}</td>
                  <td style={{padding:"0.55rem 1rem"}}><span style={{background:"rgba(245,197,24,0.1)",color:gold,padding:"2px 8px",borderRadius:4,fontSize:"0.72rem",fontWeight:700}}>{l.action}</span></td>
                  <td style={{padding:"0.55rem 1rem",color:"#aaa",textTransform:"capitalize"}}>{l.entity}</td>
                  <td style={{padding:"0.55rem 1rem",color:"#555",fontFamily:"monospace",fontSize:"0.75rem"}}>{l.entity_id?.slice(0,8)}...</td>
                  <td style={{padding:"0.55rem 1rem",color:"#555",fontSize:"0.75rem",maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                    {JSON.stringify(l.details)}
                  </td>
                </tr>
              ))}
              {logs.length===0&&<tr><td colSpan={6} style={{padding:"2rem",textAlign:"center",color:"#555"}}>No audit entries yet</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
