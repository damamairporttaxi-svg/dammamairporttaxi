"use client";
import React, { useEffect, useState } from "react";

export default function AdminSettings() {
  const [settings, setSettings] = useState<any[]>([]);
  const [edits, setEdits] = useState<Record<string,string>>({});
  const [msg, setMsg] = useState("");
  const gold = "#f5c518";

  const load = () => fetch("/api/admin/settings-manage").then(r=>r.json()).then(d => {
    setSettings(d.settings ?? []);
    const e: Record<string,string> = {};
    (d.settings ?? []).forEach((s: any) => { e[s.key] = s.value; });
    setEdits(e);
  });
  useEffect(()=>{ load(); },[]);

  async function save(key: string) {
    await fetch("/api/admin/settings-manage",{ method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({key, value: edits[key]}) });
    setMsg(`${key} saved!`); setTimeout(()=>setMsg(""),2000);
  }

  const inp = { background:"#0c0c0c", border:"1px solid #333", borderRadius:6, padding:"0.65rem 0.85rem", color:"#fff", fontSize:"0.85rem", flex:1 };

  return (
    <div>
      <h1 style={{color:"#fff",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Site Settings {msg&&<span style={{color:gold,fontSize:"0.85rem",marginLeft:10}}>{msg}</span>}</h1>
      <div style={{background:"#141414",border:"1px solid #222",borderRadius:10,padding:"1.5rem"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          {settings.map(s=>(
            <div key={s.key} style={{display:"flex",alignItems:"center",gap:"0.75rem",paddingBottom:"1rem",borderBottom:"1px solid #1e1e1e"}}>
              <label style={{color:"#aaa",fontSize:"0.8rem",fontWeight:600,textTransform:"uppercase",minWidth:200,flexShrink:0}}>{s.key.replace(/_/g," ")}</label>
              <input style={inp} value={edits[s.key]??""} onChange={e=>setEdits(p=>({...p,[s.key]:e.target.value}))} />
              <button onClick={()=>save(s.key)} style={{background:gold,color:"#000",border:"none",borderRadius:6,padding:"0.6rem 1rem",fontWeight:700,cursor:"pointer",fontSize:"0.82rem",whiteSpace:"nowrap"}}>Save</button>
            </div>
          ))}
          {settings.length===0&&<p style={{color:"#555"}}>Loading settings...</p>}
        </div>
      </div>
    </div>
  );
}
