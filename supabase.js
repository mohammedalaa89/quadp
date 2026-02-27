// استدعاء مكتبة Supabase من CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ⚠️ ضع بيانات مشروعك هنا
const SUPABASE_URL = "https://rfuifdpjlyhqvcywdzrg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhb
// إنشاء العميل
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// اجعله متاحًا عالميًا
window.supabaseClient = supabase
