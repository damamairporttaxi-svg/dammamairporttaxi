import { supabase } from "@/lib/supabase";

/** fetch() wrapper for admin pages: attaches the logged-in admin's access token. */
export async function adminFetch(input: string, init: RequestInit = {}) {
  const { data } = await supabase.auth.getSession();
  const headers = new Headers(init.headers);
  if (data.session?.access_token) headers.set("Authorization", `Bearer ${data.session.access_token}`);
  return fetch(input, { ...init, headers });
}
