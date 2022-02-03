import { createClient } from "@supabase/supabase-js";

const supaBaseURL: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supaBaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supaBaseURL, supaBaseKey);
