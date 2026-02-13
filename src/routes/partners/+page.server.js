import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('sort_order');

  if (error) {
    console.error(error);
    return { sections: {} };
  }

  function getSection(key) {
    return data.find(p => p.section_key?.trim() === key);
  }

  return {
    sections: {
      intro: getSection('intro'),
      partnerWorden: getSection('partner worden'),
      partnerLogin: getSection('partnerlogin')
    }
  };
}
