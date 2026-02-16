import { supabase } from '$lib/supabase.js';

export async function load() {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('sort_order');

  if (error) {
    console.error(error);
    return { 
      hero: {},
      intro: {},
      partnerWorden: {},
      partnerLogin: {}
    };
  }

  function getSection(key, fallbackTitle = '') {
    return (
      data.find(p => p.section_key?.trim().toLowerCase() === key.toLowerCase()) ||
      data.find(p => p.title?.trim().toLowerCase() === fallbackTitle.toLowerCase()) ||
      {}
    );
  }

  const heroSection = getSection('1', 'hero');
  const introSection = getSection('intro');
  const partnerWordenSection = getSection('partner worden');
  const partnerLoginSection = getSection('partnerlogin');

  // ✅ Splits image veld op nieuwe regels en filter lege entries
  let introImages = [];
  if (introSection.image) {
    introImages = introSection.image
      .split(/\r?\n/)      // split op newline
      .map(url => url.trim()) // trim whitespace
      .filter(url => url);    // verwijder lege strings
  }

  return {
    hero: {
      ...heroSection,
      imageUrl: heroSection.content // 1 hero image
    },
    intro: {
      ...introSection,
      images: introImages // array van meerdere foto's
    },
    partnerWorden: {
      ...partnerWordenSection,
      imageUrl: partnerWordenSection.image || partnerWordenSection.content
    },
    partnerLogin: partnerLoginSection
  };
}
