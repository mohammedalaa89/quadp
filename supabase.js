// supabase.js
// 1) ضع بيانات مشروعك هنا (Public keys فقط)
// Supabase -> Project Settings -> API
const SUPABASE_URL = "https://rfuifdpjlyhqvcywdzrg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdWlmZHBqbHlocXZjeXdkenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDU2MDIsImV4cCI6MjA4NzYyMTYwMn0.bNyi-l5kx6y6TsXayP0oJ9iwchPneEaCiZ9R8l0oMBE";

// 2) تحميل مكتبة supabase-js من CDN
// ملاحظة: GitHub Pages يسمح بتحميل CDN عادي
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
script.onload = () => {
  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
};
document.head.appendChild(script);
