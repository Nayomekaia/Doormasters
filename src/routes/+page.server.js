import { supabase } from '$lib/supabase.js';

export async function load() {

  // Beide queries tegelijk uitvoeren (sneller)
  const [homeRes, faqRes] = await Promise.all([
    supabase.from('home').select('*'),
    supabase.from('faq').select('*').order('id', { ascending: true })
  ]);

  if (homeRes.error) {
    console.error('Home error:', homeRes.error);
  }

  if (faqRes.error) {
    console.error('FAQ error:', faqRes.error);
  }

  return {
    home: homeRes.data ?? [],
    faq: faqRes.data ?? []
  };
}