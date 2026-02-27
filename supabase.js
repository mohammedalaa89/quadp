
const SUPABASE_URL = "https://rfuifdpjlyhqvcywdzrg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmdWlmZHBqbHlocXZjeXdkenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDU2MDIsImV4cCI6MjA4NzYyMTYwMn0.bNyi-l5kx6y6TsXayP0oJ9iwchPneEaCiZ9R8l0oMBE"

// في CDN v2 اسم الكائن هو supabase
if (typeof supabase === "undefined") {
  console.error("Supabase CDN not loaded!");
} else {
  window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );
}
