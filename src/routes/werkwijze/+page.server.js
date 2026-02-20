import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('service')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error(error);
    return { service: [] };
  }

  return { service: data };
}
