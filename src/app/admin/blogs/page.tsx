"use client";
import React, { useEffect, useState } from "react";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [form, setForm] = useState({ title:"", excerpt:"", content:"", category:"GCC Travel Guides", published:false });
  const [editing, setEditing] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const gold = "#0C58D1";

  const load = () => fetch("/api/admin/blogs-manage").then(r=>r.json()).then(d=>setBlogs(d.blogs??[]));
  useEffect(()=>{ load(); },[]);

  async function save() {
    const method = editing ? "PATCH" : "POST";
    const body = editing ? { ...form, id: editing.id } : form;
    await fetch("/api/admin/blogs-manage",{ method, headers:{"Content-Type":"application/json"}, body:JSON.stringify(body) });
    setEditing(null); setForm({ title:"",excerpt:"",content:"",category:"GCC Travel Guides",published:false });
    load(); setMsg(editing?"Updated!":"Published!"); setTimeout(()=>setMsg(""),2000);
  }

  async function toggle(id: string, published: boolean) {
    await fetch("/api/admin/blogs-manage",{ method:"PATCH", headers:{"Content-Type":"application/json"}, body:JSON.stringify({id,published:!published}) });
    load();
  }

  async function del(id: string) {
    if(!confirm("Delete this blog post?")) return;
    await fetch(`/api/admin/blogs-manage?id=${id}`,{ method:"DELETE" });
    load();
  }

  const inp = { background:"#ffffff", border:"1px solid #e5e7eb", borderRadius:6, padding:"0.65rem 0.85rem", color: "var(--text-primary)", fontSize:"0.85rem", width:"100%", boxSizing:"border-box" as const };
  const lbl = { display:"block" as const, color:"#64748B", fontSize:"0.72rem", fontWeight:600 as const, marginBottom:3, textTransform:"uppercase" as const };

  return (
    <div>
      <h1 style={{color: "var(--text-primary)",fontSize:"1.2rem",fontWeight:800,marginBottom:"1.5rem"}}>Blog Posts {msg&&<span style={{color:"#0C58D1",fontSize:"0.85rem",marginLeft:10}}>{msg}</span>}</h1>

      <div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,padding:"1.5rem",marginBottom:"1.5rem"}}>
        <h3 style={{color:"#0C58D1",fontSize:"0.9rem",marginBottom:"1rem"}}>{editing?"Edit Post":"New Post"}</h3>
        <div style={{display:"flex",flexDirection:"column",gap:"0.85rem"}}>
          <div><label style={lbl}>Title</label><input style={inp} value={form.title} onChange={e=>setForm(p=>({...p,title:e.target.value}))} placeholder="Blog post title" /></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
            <div><label style={lbl}>Category</label>
              <select style={inp} value={form.category} onChange={e=>setForm(p=>({...p,category:e.target.value}))}>
                {["GCC Travel Guides","Airport Guides","Route Guides","Transport Safety","Corporate Travel","Religious Travel","Tourism & Day Trips","Fleet & Vehicles"].map(c=><option key={c}>{c}</option>)}
              </select>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"0.5rem",paddingTop:"1.2rem"}}>
              <input type="checkbox" id="pub" checked={form.published} onChange={e=>setForm(p=>({...p,published:e.target.checked}))} />
              <label htmlFor="pub" style={{color:"#64748B",fontSize:"0.85rem"}}>Published</label>
            </div>
          </div>
          <div><label style={lbl}>Excerpt</label><input style={inp} value={form.excerpt} onChange={e=>setForm(p=>({...p,excerpt:e.target.value}))} placeholder="Short description" /></div>
          <div><label style={lbl}>Content</label><textarea style={{...inp,minHeight:200,resize:"vertical"}} value={form.content} onChange={e=>setForm(p=>({...p,content:e.target.value}))} placeholder="Write your blog content here..." /></div>
          <div style={{display:"flex",gap:"0.75rem"}}>
            <button onClick={save} style={{background:"#0C58D1",color:"#000",border:"none",borderRadius:6,padding:"0.65rem 1.5rem",fontWeight:700,cursor:"pointer"}}>{editing?"Update":"Publish"}</button>
            {editing&&<button onClick={()=>{setEditing(null);setForm({title:"",excerpt:"",content:"",category:"GCC Travel Guides",published:false});}} style={{background:"#f8f9fa",color:"#64748B",border:"1px solid #e5e7eb",borderRadius:6,padding:"0.65rem 1rem",cursor:"pointer"}}>Cancel</button>}
          </div>
        </div>
      </div>

      <div style={{background:"#ffffff",border:"1px solid #e5e7eb",borderRadius:10,overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.82rem"}}>
          <thead><tr style={{borderBottom:"1px solid #1e1e1e"}}>
            {["Title","Category","Status","Date",""].map(h=><th key={h} style={{padding:"0.65rem 1rem",color:"#64748B",textAlign:"left",fontWeight:600}}>{h}</th>)}
          </tr></thead>
          <tbody>
            {blogs.map(b=>(
              <tr key={b.id} style={{borderBottom:"1px solid #1a1a1a"}}>
                <td style={{padding:"0.6rem 1rem",color: "var(--text-primary)",fontWeight:600,maxWidth:280,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{b.title}</td>
                <td style={{padding:"0.6rem 1rem",color:"#64748B"}}>{b.category}</td>
                <td style={{padding:"0.6rem 1rem"}}><span style={{background:b.published?"#2e7d32":"#555",color: "var(--text-primary)",padding:"2px 8px",borderRadius:4,fontSize:"0.72rem",fontWeight:700}}>{b.published?"LIVE":"DRAFT"}</span></td>
                <td style={{padding:"0.6rem 1rem",color:"#64748B"}}>{b.created_at?.split("T")[0]}</td>
                <td style={{padding:"0.6rem 1rem"}}>
                  <button onClick={()=>{setEditing(b);setForm({title:b.title,excerpt:b.excerpt??'',content:b.content,category:b.category,published:b.published});}} style={{background:"#f8f9fa",color:"#64748B",border:"none",borderRadius:4,padding:"3px 8px",cursor:"pointer",fontSize:"0.75rem",marginRight:6}}>Edit</button>
                  <button onClick={()=>toggle(b.id,b.published)} style={{background:"#dcfce7", color:"#16a34a",border:"none",borderRadius:4,padding:"3px 8px",cursor:"pointer",fontSize:"0.75rem",marginRight:6}}>{b.published?"Unpublish":"Publish"}</button>
                  <button onClick={()=>del(b.id)} style={{background:"#fee2e2", color:"#dc2626",border:"none",borderRadius:4,padding:"3px 8px",cursor:"pointer",fontSize:"0.75rem"}}>Del</button>
                </td>
              </tr>
            ))}
            {blogs.length===0&&<tr><td colSpan={5} style={{padding:"2rem",textAlign:"center",color:"#64748B"}}>No blog posts yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
