import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('werkwijze')
    .select('*')
    .order('sort_order', { ascending: true });

  if (error) {
    console.error(error);
    return { werkwijze: [] };
  }

  return {werkwijze: data };
}
