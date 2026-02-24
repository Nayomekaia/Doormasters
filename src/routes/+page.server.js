import { supabase } from '$lib/supabase.js';

export async function load() {
  try {
    // Haal alles tegelijk op
    const [homeRes, faqRes, serviceRes] = await Promise.all([
      supabase.from('home').select('*'),
      supabase.from('faq').select('*').order('id', { ascending: true }),
      supabase.from('service').select('*').order('sort_order', { ascending: true })  // sorteren op 'sort_order'
    ]);

    // Foutafhandeling
    if (homeRes.error) console.error('Home table error:', homeRes.error);
    if (faqRes.error) console.error('FAQ table error:', faqRes.error);
    if (serviceRes.error) console.error('Service table error:', serviceRes.error);

    return {
      home: homeRes.data ?? [],  // home-sectie
      faq: faqRes.data ?? [],    // FAQ-sectie
      services: serviceRes.data ?? []  // service-tabel
    };
  } catch (err) {
    console.error('Server load error:', err);
    return {
      home: [],
      faq: [],
      services: []
    };
  }
}