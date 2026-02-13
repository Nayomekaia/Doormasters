import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('overons')
    .select('*'); 

  if (error) {
    console.error(error);
    return { overons: [] };
  }

  return { overons: data };
}
