import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('kennisbank')
    .select('*'); 

  if (error) {
    console.error(error);
    return { kennisbank: [] };
  }

  return { kennisbank: data };
}
