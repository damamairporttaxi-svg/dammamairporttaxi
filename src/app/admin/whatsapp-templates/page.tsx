"use client";
import React, { useEffect, useState } from "react";

export default function AdminWhatsappTemplates() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const gold = "#0C58D1";

  const load = () => fetch("/api/admin/templates-manage").then(r=>r.json()).then(d=>setTemplates(d.templates??[]));
  useEffect(()=>{ load(); },[]);

  async function save() {
    if(!editing) return;
    await fetch("/api/admin/templates-manage",{ method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify(editing) });
    setEditing(null); load(); setMsg("Saved!"); setTimeout(()=>setMsg(""),2000);
  }

  const inp = { background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:6, padding:"0.65rem 0.85rem", color: "var(--text-primary)", fontSize:"0.85rem", width:"100%", boxSizing:"border-box" as const };

  return (
    <div>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"0.5rem"}}>WhatsApp Templates {msg&&<span style={{color:"#0C58D1",fontSize:"0.85rem",marginLeft:10}}>{msg}</span>}</h1>
      <p style={{color:"#64748B",fontSize:"0.82rem",marginBottom:"1.5rem"}}>Use variables: {"{{name}}"}, {"{{ref}}"}, {"{{date}}"}, {"{{time}}"}, {"{{driver_name}}"}, {"{{driver_phone}}"}, {"{{driver_plate}}"}</p>

      <div style={{display:"grid",gridTemplateColumns:editing?"1fr 420px":"1fr",gap:"1.25rem",alignItems:"start"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          {templates.map(t=>(
            <div key={t.id} style={{background:"#ffffff",border:`1px solid ${editing?.id===t.id?"#f5c518":"#222"}`,borderRadius:10,padding:"1.25rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
                <div>
                  <span style={{color: "var(--text-primary)",fontWeight:700,fontSize:"0.9rem"}}>{t.name}</span>
                  <span style={{color:"#64748B",fontSize:"0.75rem",marginLeft:8,fontFamily:"monospace"}}>{t.trigger}</span>
                </div>
                <div style={{display:"flex",gap:"0.5rem",alignItems:"center"}}>
                  <span style={{background:t.active?"#2e7d32":"#555",color: "var(--text-primary)",padding:"2px 7px",borderRadius:4,fontSize:"0.7rem",fontWeight:700}}>{t.active?"ON":"OFF"}</span>
                  <button onClick={()=>setEditing({...t})} style={{background:"#f8f9fa", color:"#000000",border:"1px solid #e5e7eb",borderRadius:5,padding:"4px 10px",cursor:"pointer",fontSize:"0.78rem"}}>Edit</button>
                </div>
              </div>
              <div style={{background:"#ffffff",borderRadius:6,padding:"0.85rem",color:"#64748B",fontSize:"0.82rem",lineHeight:1.7,whiteSpace:"pre-wrap"}}>{t.message}</div>
            </div>
          ))}
          {templates.length===0&&<div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"2rem",textAlign:"center",color:"#64748B"}}>No templates found</div>}
        </div>

        {editing&&(
          <div style={{background:"#ffffff",border:"1px solid #f5c518",borderRadius:10,padding:"1.5rem",position:"sticky",top:80}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"1rem"}}>
              <span style={{color: "var(--text-primary)",fontWeight:700}}>Edit Template</span>
              <button onClick={()=>setEditing(null)} style={{background:"none",border:"none",color:"#64748B",cursor:"pointer",fontSize:"1.1rem"}}>×</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.85rem"}}>
              <div><label style={{color:"#64748B",fontSize:"0.72rem",fontWeight:600,textTransform:"uppercase" as const,display:"block",marginBottom:3}}>Name</label><input style={inp} value={editing.name} onChange={e=>setEditing((p:any)=>({...p,name:e.target.value}))} /></div>
              <div><label style={{color:"#64748B",fontSize:"0.72rem",fontWeight:600,textTransform:"uppercase" as const,display:"block",marginBottom:3}}>Message</label><textarea style={{...inp,minHeight:160,resize:"vertical"}} value={editing.message} onChange={e=>setEditing((p:any)=>({...p,message:e.target.value}))} /></div>
              <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                <input type="checkbox" id="active" checked={editing.active} onChange={e=>setEditing((p:any)=>({...p,active:e.target.checked}))} />
                <label htmlFor="active" style={{color:"#64748B",fontSize:"0.85rem"}}>Active</label>
              </div>
              <div style={{display:"flex",gap:"0.75rem"}}>
                <button onClick={save} style={{flex:1,background:"#0C58D1",color:"#000",border:"none",borderRadius:6,padding:"0.7rem",fontWeight:700,cursor:"pointer"}}>Save</button>
                <button onClick={()=>setEditing(null)} style={{background:"#f8f9fa", color:"#000000",border:"1px solid #e5e7eb",borderRadius:6,padding:"0.7rem 1rem",cursor:"pointer"}}>Cancel</button>
              </div>
              {/* Preview with dummy data */}
              <div style={{background:"#ffffff",borderRadius:6,padding:"0.85rem"}}>
                <div style={{color:"#64748B",fontSize:"0.7rem",fontWeight:600,textTransform:"uppercase",marginBottom:6}}>Preview</div>
                <div style={{color:"#64748B",fontSize:"0.82rem",lineHeight:1.7,whiteSpace:"pre-wrap"}}>
                  {editing.message.replace(/\{\{name\}\}/g,"Ahmed").replace(/\{\{ref\}\}/g,"DAT-20260614-AB12").replace(/\{\{date\}\}/g,"2026-06-20").replace(/\{\{time\}\}/g,"14:00").replace(/\{\{driver_name\}\}/g,"Mohammed Ali").replace(/\{\{driver_phone\}\}/g,"+966501234567").replace(/\{\{driver_plate\}\}/g,"ABC 1234")}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
