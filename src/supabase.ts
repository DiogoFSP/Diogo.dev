import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Cliente criado apenas se as chaves existirem no .env.local.
// A anon key é pública; o acesso é limitado pelas políticas RLS.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const supabaseConfigured = supabase !== null;
