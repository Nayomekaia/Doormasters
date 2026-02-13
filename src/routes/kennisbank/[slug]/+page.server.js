import { supabase } from '$lib/supabase.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { data, error: dbError } = await supabase
    .from('kennisbank')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (dbError || !data) {
    throw error(404, 'Artikel niet gevonden');
  }

  return {
    artikel: data
  };
}
