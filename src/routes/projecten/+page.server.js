import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('projecten')
    .select('*'); 

  if (error) {
    console.error(error);
    return { projecten: [] };
  }

  return { projecten: data };
}
