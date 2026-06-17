import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { code, order_amount } = await req.json();
  if (!code) return NextResponse.json({ valid: false, error: "No code provided" }, { status: 400 });

  const { data, error } = await supabaseAdmin
    .from("promo_codes")
    .select("*")
    .eq("code", code.toUpperCase())
    .eq("active", true)
    .single();

  if (error || !data) return NextResponse.json({ valid: false, error: "Invalid promo code" });

  // Check expiry
  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return NextResponse.json({ valid: false, error: "Promo code has expired" });
  }

  // Check max uses
  if (data.max_uses && data.used_count >= data.max_uses) {
    return NextResponse.json({ valid: false, error: "Promo code usage limit reached" });
  }

  // Check minimum order
  if (data.min_order && order_amount < data.min_order) {
    return NextResponse.json({
      valid: false,
      error: `Minimum order of ${data.min_order} SAR required`,
    });
  }

  // Calculate discount
  let discount = 0;
  if (data.discount_type === "percentage") {
    discount = (order_amount * data.discount_value) / 100;
  } else {
    discount = data.discount_value;
  }
  discount = Math.min(discount, order_amount);

  return NextResponse.json({
    valid: true,
    discount_type: data.discount_type,
    discount_value: data.discount_value,
    discount_amount: Math.round(discount * 100) / 100,
    final_price: Math.round((order_amount - discount) * 100) / 100,
  });
}
