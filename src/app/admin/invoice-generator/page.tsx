"use client";
import React, { useState } from "react";
import { CURRENCIES } from "@/lib/currencies";

export default function AdminInvoiceGenerator() {
  const [form, setForm] = useState({
    name:"", email:"", phone:"", pickup:"", dropoff:"",
    date:"", time:"", vehicle:"Sedan (Toyota Camry)",
    passengers:"1", price:"", discount:"0", currency:"SAR", tripType:"One Way", returnDate:"", returnTime:"", paid:"0", balanceDue:"", ref:`DAT-MAN-${Date.now().toString(36).toUpperCase()}`
  });
  const gold = "#0C58D1";
  const inp = { background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:6, padding:"0.65rem 0.85rem", color: "var(--text-primary)", fontSize:"0.85rem", width:"100%", boxSizing:"border-box" as const };
  const lbl = { display:"block" as const, color:"#64748B", fontSize:"0.72rem", fontWeight:600 as const, marginBottom:3, textTransform:"uppercase" as const };

  const finalPrice = Math.max(0, parseFloat(form.price||"0") - parseFloat(form.discount||"0"));
  const paidAmt = Math.min(finalPrice, Math.max(0, parseFloat(form.paid||"0")));
  const balance = Math.round((finalPrice - paidAmt) * 1000) / 1000;
  const status = finalPrice > 0 && balance === 0 ? "PAID IN FULL" : paidAmt > 0 ? "PARTIALLY PAID" : "UNPAID";
  const statusColor = status === "PAID IN FULL" ? "#16a34a" : status === "PARTIALLY PAID" ? "#d97706" : "#dc2626";
  const setHalf = () => setForm(p => ({ ...p, paid: String(finalPrice / 2) }));

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
            <div><label style={lbl}>Trip Type</label>
              <select style={inp} value={form.tripType} onChange={e=>setForm(p=>({...p,tripType:e.target.value}))}>
                <option>One Way</option><option>Round Trip</option>
              </select>
            </div>
            {form.tripType==="Round Trip"&&(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
                <div><label style={lbl}>Return Date</label><input type="date" style={inp} value={form.returnDate} onChange={e=>setForm(p=>({...p,returnDate:e.target.value}))} /></div>
                <div><label style={lbl}>Return Time</label><input type="time" style={inp} value={form.returnTime} onChange={e=>setForm(p=>({...p,returnTime:e.target.value}))} /></div>
              </div>
            )}
            <div><label style={lbl}>Vehicle</label><input style={inp} value={form.vehicle} onChange={e=>setForm(p=>({...p,vehicle:e.target.value}))} /></div>
            <div><label style={lbl}>Currency</label>
              <select style={inp} value={form.currency} onChange={e=>setForm(p=>({...p,currency:e.target.value}))}>
                {CURRENCIES.map(c=><option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
              </select>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
              <div><label style={lbl}>Price ({form.currency})</label><input type="number" style={inp} value={form.price} onChange={e=>setForm(p=>({...p,price:e.target.value}))} /></div>
              <div><label style={lbl}>Discount ({form.currency})</label><input type="number" style={inp} value={form.discount} onChange={e=>setForm(p=>({...p,discount:e.target.value}))} /></div>
            </div>
            <div>
              <label style={lbl}>Amount Paid ({form.currency}) — advance / partial</label>
              <div style={{display:"flex",gap:"0.5rem"}}>
                <input type="number" style={inp} value={form.paid} onChange={e=>setForm(p=>({...p,paid:e.target.value}))} />
                <button type="button" onClick={setHalf} style={{background:"#f8f9fa",color:"#000",border:"1px solid #e5e7eb",borderRadius:6,padding:"0 0.75rem",cursor:"pointer",fontSize:"0.78rem",whiteSpace:"nowrap"}}>50%</button>
              </div>
              <div style={{fontSize:"0.78rem",color:"#64748B",marginTop:4}}>Balance due: <b>{balance} {form.currency}</b></div>
            </div>
            <div><label style={lbl}>Balance Due Date (optional)</label><input type="date" style={inp} value={form.balanceDue} onChange={e=>setForm(p=>({...p,balanceDue:e.target.value}))} /></div>
          </div>
          <button onClick={()=>window.print()} style={{background:"#0C58D1",color:"#000",border:"none",borderRadius:6,padding:"0.75rem",fontWeight:700,cursor:"pointer",width:"100%",marginTop:"1.25rem"}}>Print / Save PDF</button>
        </div>

        {/* Preview */}
        <div id="invoice-preview" style={{background:"#fff",color:"#111",padding:"2rem",borderRadius:10,fontFamily:"inherit"}}>
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
              {[["Name",form.name],["Phone",form.phone],["Email",form.email],["Pickup",form.pickup],["Dropoff",form.dropoff],["Date",form.date],["Time",form.time],["Trip Type",form.tripType],...(form.tripType==="Round Trip"?[["Return Date",form.returnDate],["Return Time",form.returnTime]]:[]),["Vehicle",form.vehicle],["Passengers",form.passengers]].map(([l,v])=>(
                <tr key={l} style={{borderBottom:"1px solid #f0f0f0"}}>
                  <td style={{padding:"0.4rem 0",color:"#64748B",width:"40%"}}>{l}</td>
                  <td style={{padding:"0.4rem 0",fontWeight:500}}>{v||"-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{background:"#f9f9f9",borderRadius:6,padding:"1rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:"0.85rem"}}><span style={{color:"#64748B"}}>Base Fare</span><span>{form.price||"0"} {form.currency}</span></div>
            {parseFloat(form.discount||"0")>0&&<div style={{display:"flex",justifyContent:"space-between",marginBottom:6,fontSize:"0.85rem",color:"green"}}><span>Discount</span><span>-{form.discount} {form.currency}</span></div>}
            <div style={{display:"flex",justifyContent:"space-between",borderTop:"2px solid #eee",paddingTop:8,fontWeight:800,fontSize:"1rem"}}><span>Total</span><span style={{color:"#0C58D1"}}>{finalPrice} {form.currency}</span></div>
            {paidAmt>0&&<div style={{display:"flex",justifyContent:"space-between",marginTop:8,fontSize:"0.85rem",color:"#16a34a"}}><span>Paid</span><span>-{paidAmt} {form.currency}</span></div>}
            <div style={{display:"flex",justifyContent:"space-between",marginTop:6,fontWeight:800,fontSize:"1rem"}}><span>Balance Due{balance>0&&form.balanceDue?` (by ${form.balanceDue})`:""}</span><span style={{color:balance>0?"#dc2626":"#16a34a"}}>{balance} {form.currency}</span></div>
            <div style={{textAlign:"center",marginTop:10,fontWeight:800,fontSize:"0.8rem",letterSpacing:1,color:statusColor,border:`2px solid ${statusColor}`,borderRadius:6,padding:"4px 0"}}>{status}</div>
          </div>
          <p style={{textAlign:"center",color:"#64748B",fontSize:"0.72rem",marginTop:"1.5rem"}}>Dammam Airport Taxi · +966 59 141 9157 · haramtaxiservice@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
