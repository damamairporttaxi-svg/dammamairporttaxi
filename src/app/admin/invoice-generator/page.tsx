"use client";
import React, { useState } from "react";

export default function AdminInvoiceGenerator() {
  const [form, setForm] = useState({
    name:"", email:"", phone:"", pickup:"", dropoff:"",
    date:"", time:"", vehicle:"Sedan (Toyota Camry)",
    passengers:"1", price:"", discount:"0", ref:`DAT-MAN-${Date.now().toString(36).toUpperCase()}`
  });
  const gold = "#0C58D1";
  const inp = { background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:6, padding:"0.65rem 0.85rem", color: "var(--text-primary)", fontSize:"0.85rem", width:"100%", boxSizing:"border-box" as const };
  const lbl = { display:"block" as const, color:"#64748B", fontSize:"0.72rem", fontWeight:600 as const, marginBottom:3, textTransform:"uppercase" as const };

  const finalPrice = Math.max(0, parseFloat(form.price||"0") - parseFloat(form.discount||"0"));

  return (
    <div style={{maxWidth:900,margin:"0 auto"}}>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Manual Invoice Generator</h1>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem",alignItems:"start"}}>
        {/* Form */}
        <div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"1.5rem"}}>
          <h3 style={{color:"#0C58D1",fontSize:"0.9rem",marginBottom:"1rem"}}>Enter Details</h3>
          <div style={{display:"flex",flexDirection:"column",gap:"0.85rem"}}>
            <div><label style={lbl}>Ref Number</label><input style={inp} value={form.ref} onChange={e=>setForm(p=>({...p,ref:e.target.value}))} /></div>
            <div><label style={lbl}>Passenger Name</label><input style={inp} value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} /></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
              <div><label style={lbl}>Email</label><input style={inp} value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} /></div>
              <div><label style={lbl}>Phone</label><input style={inp} value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} /></div>
            </div>
            <div><label style={lbl}>Pickup</label><input style={inp} value={form.pickup} onChange={e=>setForm(p=>({...p,pickup:e.target.value}))} /></div>
            <div><label style={lbl}>Drop-off</label><input style={inp} value={form.dropoff} onChange={e=>setForm(p=>({...p,dropoff:e.target.value}))} /></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
              <div><label style={lbl}>Date</label><input type="date" style={inp} value={form.date} onChange={e=>setForm(p=>({...p,date:e.target.value}))} /></div>
              <div><label style={lbl}>Time</label><input type="time" style={inp} value={form.time} onChange={e=>setForm(p=>({...p,time:e.target.value}))} /></div>
            </div>
            <div><label style={lbl}>Vehicle</label><input style={inp} value={form.vehicle} onChange={e=>setForm(p=>({...p,vehicle:e.target.value}))} /></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
              <div><label style={lbl}>Price (SAR)</label><input type="number" style={inp} value={form.price} onChange={e=>setForm(p=>({...p,price:e.target.value}))} /></div>
              <div><label style={lbl}>Discount (SAR)</label><input type="number" style={inp} value={form.discount} onChange={e=>setForm(p=>({...p,discount:e.target.value}))} /></div>
            </div>
          </div>
          <button onClick={()=>window.print()} style={{background:"#0C58D1",color:"#000",border:"none",borderRadius:6,padding:"0.75rem",fontWeight:700,cursor:"pointer",width:"100%",marginTop:"1.25rem"}}>Print / Save PDF</button>
        </div>

        {/* Preview */}
        <div id="invoice-preview" style={{background:"#fff",color:"#111",padding:"2rem",borderRadius:10,fontFamily:"Arial,sans-serif"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem",borderBottom:"2px solid #f5c518",paddingBottom:"1rem"}}>
            <div>
              <h2 style={{margin:0,fontSize:"1.4rem",fontWeight:800}}>INVOICE</h2>
              <p style={{margin:"2px 0 0",color:"#64748B",fontSize:"0.78rem"}}>Dammam Airport Taxi</p>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontFamily:"monospace",fontWeight:700,fontSize:"0.9rem"}}>{form.ref}</div>
              <div style={{color:"#64748B",fontSize:"0.75rem",marginTop:4}}>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.83rem",marginBottom:"1.5rem"}}>
            <tbody>
              {[["Name",form.name],["Phone",form.phone],["Email",form.email],["Pickup",form.pickup],["Dropoff",form.dropoff],["Date",form.date],["Time",form.time],["Vehicle",form.vehicle],["Passengers",form.passengers]].map(([l,v])=>(
                <tr key={l} style={{borderBottom:"1px solid #f0f0f0"}}>
                  <td style={{padding:"0.4rem 0",color:"#64748B",width:"40%"}}>{l}</td>
                  <td style={{padding:"0.4rem 0",fontWeight:500}}>{v||"-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{background:"#f9f9f9",borderRadius:6,padding:"1rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:"0.85rem"}}><span style={{color:"#64748B"}}>Base Fare</span><span>{form.price||"0"} SAR</span></div>
            {parseFloat(form.discount||"0")>0&&<div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:"0.85rem",color:"green"}}><span>Discount</span><span>-{form.discount} SAR</span></div>}
            <div style={{display:"flex",justifyContent:"space-between",borderTop:"2px solid #eee",paddingTop:8,fontWeight:800,fontSize:"1rem"}}><span>Total</span><span style={{color:"#0C58D1"}}>{finalPrice} SAR</span></div>
          </div>
          <p style={{textAlign:"center",color:"#64748B",fontSize:"0.72rem",marginTop:"1.5rem"}}>Dammam Airport Taxi · +966 56 948 7569 · haramtaxiservice@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
