import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('home')
    .select('*'); 

  if (error) {
    console.error(error);
    return { home: [] };
  }

  return { home: data };
}
