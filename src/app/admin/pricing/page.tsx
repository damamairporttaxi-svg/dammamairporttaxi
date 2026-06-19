"use client";
import React, { useEffect, useState } from "react";

export default function AdminPricing() {
  const [pricing, setPricing] = useState<any[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [vals, setVals] = useState<Record<string,any>>({});
  const [msg, setMsg] = useState("");
  const gold = "#f5c518";

  const load = () => fetch("/api/admin/pricing-manage").then(r=>r.json()).then(d=>setPricing(d.pricing??[]));
  useEffect(()=>{ load(); },[]);

  async function save(id: string) {
    await fetch("/api/admin/pricing-manage",{ method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id,...vals[id]}) });
    setEditing(null); load(); setMsg("Saved!"); setTimeout(()=>setMsg(""),2000);
  }

  const inp = { background:"#0c0c0c", border:"1px solid #444", borderRadius:4, padding:"0.35rem 0.5rem", color: "var(--text-primary)", fontSize:"0.82rem", width:"80px" };

  return (
    <div>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Route Pricing {msg&&<span style={{color:gold,fontSize:"0.85rem",marginLeft:10}}>{msg}</span>}</h1>
      <div style={{background:"#141414",border:"1px solid #222",borderRadius:10,overflow:"hidden"}}>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.82rem"}}>
            <thead><tr style={{borderBottom:"1px solid #1e1e1e"}}>
              {["Route","Distance","Duration","Sedan SAR","SUV SAR","Van SAR","Luxury SAR",""].map(h=><th key={h} style={{padding:"0.65rem 1rem",color:"#555",textAlign:"left",fontWeight:600,whiteSpace:"nowrap"}}>{h}</th>)}
            </tr></thead>
            <tbody>
              {pricing.map(p=>{
                const isEdit = editing===p.id;
                const v = vals[p.id] ?? { sedan_price:p.sedan_price, suv_price:p.suv_price, van_price:p.van_price, luxury_price:p.luxury_price, distance_km:p.distance_km, duration_min:p.duration_min };
                return (
                  <tr key={p.id} style={{borderBottom:"1px solid #1a1a1a"}}>
                    <td style={{padding:"0.6rem 1rem",color: "var(--text-primary)",fontWeight:600,whiteSpace:"nowrap"}}>{p.route_name}</td>
                    <td style={{padding:"0.6rem 1rem"}}>
                      {isEdit ? <input style={inp} value={v.distance_km} onChange={e=>setVals(prev=>({...prev,[p.id]:{...v,distance_km:e.target.value}}))} /> : <span style={{color:"#aaa"}}>{p.distance_km} km</span>}
                    </td>
                    <td style={{padding:"0.6rem 1rem"}}>
                      {isEdit ? <input style={inp} value={v.duration_min} onChange={e=>setVals(prev=>({...prev,[p.id]:{...v,duration_min:e.target.value}}))} /> : <span style={{color:"#aaa"}}>{p.duration_min} min</span>}
                    </td>
                    {["sedan_price","suv_price","van_price","luxury_price"].map(k=>(
                      <td key={k} style={{padding:"0.6rem 1rem"}}>
                        {isEdit ? <input style={inp} value={v[k]} onChange={e=>setVals(prev=>({...prev,[p.id]:{...v,[k]:e.target.value}}))} /> : <span style={{color:gold,fontWeight:700}}>{p[k]}</span>}
                      </td>
                    ))}
                    <td style={{padding:"0.6rem 1rem"}}>
                      {isEdit
                        ? <><button onClick={()=>save(p.id)} style={{background:gold,color:"#000",border:"none",borderRadius:4,padding:"4px 10px",cursor:"pointer",fontSize:"0.78rem",fontWeight:700,marginRight:4}}>Save</button>
                           <button onClick={()=>setEditing(null)} style={{background:"#222",color:"#aaa",border:"none",borderRadius:4,padding:"4px 8px",cursor:"pointer",fontSize:"0.78rem"}}>✕</button></>
                        : <button onClick={()=>{setEditing(p.id);setVals(prev=>({...prev,[p.id]:v}));}} style={{background:"#222",color:"#aaa",border:"1px solid #333",borderRadius:4,padding:"4px 10px",cursor:"pointer",fontSize:"0.78rem"}}>Edit</button>}
                    </td>
                  </tr>
                );
              })}
              {pricing.length===0&&<tr><td colSpan={8} style={{padding:"2rem",textAlign:"center",color:"#555"}}>No pricing data</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
