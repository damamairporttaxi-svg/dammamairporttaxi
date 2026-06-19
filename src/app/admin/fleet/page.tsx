"use client";
import React, { useEffect, useState } from "react";

const STATUS_OPTS = ["available","busy","maintenance"];
const TYPE_OPTS = ["sedan","suv","van","luxury"];
const statusColor: Record<string,string> = { available:"#2e7d32", busy:"#e65100", maintenance:"#c62828" };

export default function AdminFleet() {
  const [fleet, setFleet] = useState<any[]>([]);
  const [form, setForm] = useState({ name:"", vehicle_type:"sedan", plate:"", driver_name:"", driver_phone:"", capacity:4, status:"available" });
  const [editing, setEditing] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const gold = "#f5c518";

  const load = () => fetch("/api/admin/fleet").then(r=>r.json()).then(d=>setFleet(d.fleet??[]));
  useEffect(()=>{ load(); },[]);

  async function save() {
    const method = editing ? "PATCH" : "POST";
    const body = editing ? { ...form, id: editing.id } : form;
    await fetch("/api/admin/fleet",{ method, headers:{"Content-Type":"application/json"}, body: JSON.stringify(body) });
    setEditing(null); setForm({ name:"",vehicle_type:"sedan",plate:"",driver_name:"",driver_phone:"",capacity:4,status:"available" });
    load(); setMsg(editing?"Updated!":"Added!"); setTimeout(()=>setMsg(""),2000);
  }

  async function del(id: string) {
    if(!confirm("Delete this vehicle?")) return;
    await fetch(`/api/admin/fleet?id=${id}`,{ method:"DELETE" });
    load();
  }

  const inp = { background:"#0c0c0c", border:"1px solid #333", borderRadius:6, padding:"0.65rem 0.85rem", color: "var(--text-primary)", fontSize:"0.85rem", width:"100%", boxSizing:"border-box" as const };
  const lbl = { display:"block" as const, color:"#888", fontSize:"0.72rem", fontWeight:600 as const, marginBottom:3, textTransform:"uppercase" as const };

  return (
    <div>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Fleet Management {msg&&<span style={{color:gold,fontSize:"0.85rem",marginLeft:10}}>{msg}</span>}</h1>

      <div style={{background:"#141414",border:"1px solid #222",borderRadius:10,padding:"1.5rem",marginBottom:"1.5rem"}}>
        <h3 style={{color:gold,fontSize:"0.9rem",marginBottom:"1rem"}}>{editing?"Edit Vehicle":"Add Vehicle"}</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"0.75rem",marginBottom:"1rem"}}>
          <div><label style={lbl}>Name</label><input style={inp} value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} placeholder="e.g. Toyota Camry"/></div>
          <div><label style={lbl}>Type</label><select style={inp} value={form.vehicle_type} onChange={e=>setForm(p=>({...p,vehicle_type:e.target.value}))}>{TYPE_OPTS.map(t=><option key={t}>{t}</option>)}</select></div>
          <div><label style={lbl}>Plate</label><input style={inp} value={form.plate} onChange={e=>setForm(p=>({...p,plate:e.target.value}))} placeholder="ABC 1234"/></div>
          <div><label style={lbl}>Driver Name</label><input style={inp} value={form.driver_name} onChange={e=>setForm(p=>({...p,driver_name:e.target.value}))} placeholder="Driver name"/></div>
          <div><label style={lbl}>Driver Phone</label><input style={inp} value={form.driver_phone} onChange={e=>setForm(p=>({...p,driver_phone:e.target.value}))} placeholder="+966..."/></div>
          <div><label style={lbl}>Capacity</label><input type="number" style={inp} value={form.capacity} onChange={e=>setForm(p=>({...p,capacity:parseInt(e.target.value)}))} /></div>
          <div><label style={lbl}>Status</label><select style={inp} value={form.status} onChange={e=>setForm(p=>({...p,status:e.target.value}))}>{STATUS_OPTS.map(s=><option key={s}>{s}</option>)}</select></div>
        </div>
        <div style={{display:"flex",gap:"0.75rem"}}>
          <button onClick={save} style={{background:gold,color:"#000",border:"none",borderRadius:6,padding:"0.65rem 1.5rem",fontWeight:700,cursor:"pointer"}}>{editing?"Update":"Add Vehicle"}</button>
          {editing&&<button onClick={()=>{setEditing(null);setForm({name:"",vehicle_type:"sedan",plate:"",driver_name:"",driver_phone:"",capacity:4,status:"available"});}} style={{background:"#222",color:"#aaa",border:"1px solid #333",borderRadius:6,padding:"0.65rem 1rem",cursor:"pointer"}}>Cancel</button>}
        </div>
      </div>

      <div style={{background:"#141414",border:"1px solid #222",borderRadius:10,overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.83rem"}}>
          <thead><tr style={{borderBottom:"1px solid #1e1e1e"}}>
            {["Name","Type","Plate","Driver","Phone","Cap.","Status",""].map(h=><th key={h} style={{padding:"0.65rem 1rem",color:"#555",textAlign:"left",fontWeight:600}}>{h}</th>)}
          </tr></thead>
          <tbody>
            {fleet.map(v=>(
              <tr key={v.id} style={{borderBottom:"1px solid #1a1a1a"}}>
                <td style={{padding:"0.6rem 1rem",color: "var(--text-primary)",fontWeight:600}}>{v.name}</td>
                <td style={{padding:"0.6rem 1rem",color:"#aaa",textTransform:"uppercase"}}>{v.vehicle_type}</td>
                <td style={{padding:"0.6rem 1rem",color:gold,fontFamily:"monospace"}}>{v.plate}</td>
                <td style={{padding:"0.6rem 1rem",color:"#aaa"}}>{v.driver_name}</td>
                <td style={{padding:"0.6rem 1rem",color:"#aaa"}}>{v.driver_phone}</td>
                <td style={{padding:"0.6rem 1rem",color:"#aaa",textAlign:"center"}}>{v.capacity}</td>
                <td style={{padding:"0.6rem 1rem"}}><span style={{background:statusColor[v.status]??"#333",color: "var(--text-primary)",padding:"2px 8px",borderRadius:4,fontSize:"0.72rem",fontWeight:700}}>{v.status?.toUpperCase()}</span></td>
                <td style={{padding:"0.6rem 1rem"}}>
                  <button onClick={()=>{setEditing(v);setForm({name:v.name,vehicle_type:v.vehicle_type,plate:v.plate,driver_name:v.driver_name,driver_phone:v.driver_phone,capacity:v.capacity,status:v.status});}} style={{background:"#222",color:"#aaa",border:"none",borderRadius:4,padding:"3px 8px",cursor:"pointer",fontSize:"0.75rem",marginRight:6}}>Edit</button>
                  <button onClick={()=>del(v.id)} style={{background:"#3d0000",color:"#e53e3e",border:"none",borderRadius:4,padding:"3px 8px",cursor:"pointer",fontSize:"0.75rem"}}>Del</button>
                </td>
              </tr>
            ))}
            {fleet.length===0&&<tr><td colSpan={8} style={{padding:"2rem",textAlign:"center",color:"#555"}}>No vehicles yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
