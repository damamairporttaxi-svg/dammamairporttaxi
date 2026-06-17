import { NextRequest, NextResponse } from "next/server";

// Simple markdown → HTML converter (no external dep needed)
function mdToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|u|l|p])/gm, "<p>")
    .replace(/$/gm, "</p>")
    .replace(/<p><\/p>/g, "");
}

export async function POST(req: NextRequest) {
  const { markdown } = await req.json();
  if (!markdown) return NextResponse.json({ html: "" });
  return NextResponse.json({ html: mdToHtml(markdown) });
}
