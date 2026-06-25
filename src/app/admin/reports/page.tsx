"use client";
import React, { useEffect, useState } from "react";

export default function AdminReports() {
  const [data, setData] = useState<any>(null);
  const [range, setRange] = useState("30");
  const gold = "#0C58D1";

  useEffect(() => {
    fetch(`/api/admin/reports?days=${range}`).then(r=>r.json()).then(d=>setData(d));
  }, [range]);

  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem",flexWrap:"wrap",gap:"0.75rem"}}>
        <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,margin:0}}>Reports</h1>
        <select value={range} onChange={e=>setRange(e.target.value)} style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:6,padding:"0.6rem 0.9rem",color: "var(--text-primary)",fontSize:"0.85rem"}}>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last 12 months</option>
        </select>
      </div>

      {!data && <p style={{color:"#64748B"}}>Loading...</p>}
      {data && (
        <>
          {/* Summary cards */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:"1rem",marginBottom:"2rem"}}>
            {[
              {label:"Total Bookings",val:data.total_bookings,color:"#0C58D1"},
              {label:"Completed",val:data.completed,color:"#2e7d32"},
              {label:"Cancelled",val:data.cancelled,color:"#c62828"},
              {label:"Revenue",val:`${data.revenue} SAR`,color:"#0C58D1"},
              {label:"Avg. Order",val:`${data.avg_order} SAR`,color:"#1565c0"},
              {label:"New Customers",val:data.new_customers,color:"#7b1fa2"},
            ].map(c=>(
              <div key={c.label} style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"1.25rem"}}>
                <div style={{color:"#64748B",fontSize:"0.73rem",fontWeight:600,textTransform:"uppercase",marginBottom:6}}>{c.label}</div>
                <div style={{color:c.color,fontSize:"1.5rem",fontWeight:800}}>{c.val}</div>
              </div>
            ))}
          </div>

          {/* By vehicle */}
          {data.by_vehicle && (
            <div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"1.5rem",marginBottom:"1.25rem"}}>
              <h3 style={{color:"#0C58D1",fontSize:"0.9rem",marginBottom:"1rem"}}>Bookings by Vehicle Type</h3>
              <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                {Object.entries(data.by_vehicle).map(([vt,count]) => (
                  <div key={vt} style={{display:"flex",justifyContent:"space-between",padding:"0.5rem 0",borderBottom:"1px solid #1a1a1a",fontSize:"0.85rem"}}>
                    <span style={{color:"#64748B",textTransform:"uppercase"}}>{vt}</span>
                    <span style={{color: "var(--text-primary)",fontWeight:600}}>{String(count)} bookings</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* By status */}
          {data.by_status && (
            <div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"1.5rem"}}>
              <h3 style={{color:"#0C58D1",fontSize:"0.9rem",marginBottom:"1rem"}}>Bookings by Status</h3>
              <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                {Object.entries(data.by_status).map(([st,count]) => (
                  <div key={st} style={{display:"flex",justifyContent:"space-between",padding:"0.5rem 0",borderBottom:"1px solid #1a1a1a",fontSize:"0.85rem"}}>
                    <span style={{color:"#64748B",textTransform:"capitalize"}}>{st.replace("_"," ")}</span>
                    <span style={{color: "var(--text-primary)",fontWeight:600}}>{String(count)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
