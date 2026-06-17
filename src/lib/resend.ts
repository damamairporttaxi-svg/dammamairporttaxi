import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "haramtaxiservice@gmail.com";
export const FROM_EMAIL = "Dammam Airport Taxi <noreply@dammamairporttaxi.com>";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dammamairporttaxi.com";
