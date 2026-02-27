// ضع بياناتك هنا
const SUPABASE_URL = "https://rfuifdpjlyhqvcywdzrg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdWlmZHBqbHlocXZjeXdkenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDU2MDIsImV4cCI6MjA4NzYyMTYwMn0.bNyi-l5kx6y6TsXayP0oJ9iwchPneEaCiZ9R8l0oMBE"

// تأكد أن مكتبة supabase اتحمّلت من الـ CDN قبل ما ينفذ هذا الملف
if (!window.supabase || !window.supabase.createClient) {
  console.error("Supabase CDN not loaded. Make sure you included the CDN script before supabase.js");
} else {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
