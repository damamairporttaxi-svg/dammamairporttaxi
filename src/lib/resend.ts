import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY ?? "re_placeholder_build_only";
export const resend = new Resend(apiKey);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "haramtaxiservice@gmail.com";
export const FROM_EMAIL = "Dammam Airport Taxi <noreply@dammamairporttaxi.com>";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dammamairporttaxi.com";
