// supabase.js (ES Module) — works with GitHub Pages / Cloudflare Pages / pages.dev

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://rfuifdpjlyhqvcywdzrg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdWlmZHBqbHlocXZjeXdkenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDU2MDIsImV4cCI6MjA4NzYyMTYwMn0.bNyi-l5kx6y6TsXayP0oJ9iwchPneEaCiZ9R8l0oMBE";

// ✅ Create client once
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// ✅ Backwards compatibility (if some pages use window.supabaseClient)
window.supabaseClient = supabase;

// ✅ Optional debug
window.__SUPABASE_READY__ = true;
console.log("✅ Supabase client ready");
