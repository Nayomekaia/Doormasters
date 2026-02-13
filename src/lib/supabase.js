import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tfszhjlbruuuzjxopsyo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__K8nMs0aQCzPSHcuzD3Tvw_5JIHLvNi';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

