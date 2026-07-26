/*
 * Portfolio data model.
 * Image file lists come from js/images.js (auto-generated: window.__IMAGES__).
 * Curated titles, categories and narratives live here.
 */
(function () {
  var IMG = window.__IMAGES__ || {};

  function build(folder) {
    var files = IMG[folder] || [];
    return files.map(function (name) {
      return encodeURI(folder + '/' + name);
    });
  }

  // Merge multiple source folders into a single ordered image set.
  function buildMany(folders) {
    var out = [];
    folders.forEach(function (f) {
      out = out.concat(build(f));
    });
    return out;
  }

  var collections = [
    {
      slug: 'spoils-of-war',
      title: 'Spoils of War',
      subtitle: 'Aftermath',
      category: 'Conceptual Collection',
      year: '2025',
      discipline: 'Design · Draping · Styling',
      blurb:
        'A deconstructed womenswear story about what remains when the battle is over — resilience rendered in torn silhouettes, salvaged textures and armour-like tailoring.',
      statement:
        'Spoils of War explores the beauty found in aftermath. The collection translates the tension between destruction and survival into garments that appear both broken and rebuilt — raw seams, layered distress, and sculptural volume reclaimed into elegance. Muted, battle-worn tones are punctuated by structured tailoring that reads as modern armour, positioning the wearer as a survivor rather than a casualty.',
      images: buildMany(['1 - Spoils of War - Aftermath', '2 -Spoils of war'])
    },
    {
      slug: 'marine-life',
      title: 'Marine Life',
      subtitle: 'Beneath the Surface',
      category: 'Print & Concept Collection',
      year: '2024',
      discipline: 'Print Design · Illustration · Colour',
      blurb:
        'An oceanic study in movement and iridescence — fluid drapes, hand-built prints and a palette pulled straight from the deep.',
      statement:
        'Marine Life reimagines the fluidity of the ocean as wearable form. Flowing silhouettes echo the motion of water and marine organisms, while original prints and colour gradients capture the shifting light beneath the surface. The collection balances organic softness with considered structure, demonstrating a print-led design process from research and illustration through to final application.',
      images: build('3 - marine life collection')
    },
    {
      slug: 'new-romantic',
      title: 'New Romantic',
      subtitle: 'Softness Reimagined',
      category: 'Ready-to-Wear Collection',
      year: '2024',
      discipline: 'Design · Fabric Manipulation · Styling',
      blurb:
        'A contemporary romance — delicate volume, tactile surfaces and a restrained palette that feels both nostalgic and forward.',
      statement:
        'New Romantic revisits classic romanticism through a modern, wearable lens. Soft layering, gathered volume and tactile fabric manipulation create femininity without excess. The collection pairs a gentle palette with clean lines, showing an ability to translate an emotive mood board into commercially aware, beautifully finished pieces.',
      images: build('4 -New Romantic')
    },
    {
      slug: 'asian-embroidery',
      title: 'Asian Embroidery',
      subtitle: 'Gulnaaz · Mah-e-Kamil · Mirha · Zeenia',
      category: 'Bridal & Formal Capsule',
      year: '2025',
      discipline: 'Embroidery · Surface Design · Bridal',
      blurb:
        'Four named bridal looks celebrating South Asian craftsmanship — intricate hand embroidery, opulent surface work and heirloom detailing.',
      statement:
        'This capsule showcases four signature bridal and formal looks — Gulnaaz, Mah-e-Kamil, Mirha and Zeenia — each built around traditional South Asian embroidery techniques. Dense thread work, embellishment and considered motif placement demonstrate a deep understanding of surface design, craftsmanship and the demands of the luxury bridal market.',
      looks: ['Gulnaaz', 'Mah-e-Kamil', 'Mirha', 'Zeenia'],
      images: buildMany([
        '5 - Asian Embroidery/Gulnaaz',
        '5 - Asian Embroidery/Mah -e-kamil',
        '5 - Asian Embroidery/Mirha',
        '5 - Asian Embroidery/Zeenia'
      ])
    },
    {
      slug: 'pakistani-heritage',
      title: 'Pakistani Heritage',
      subtitle: 'Roots & Modernity',
      category: 'Cultural Collection',
      year: '2024',
      discipline: 'Cultural Research · Design · Craft',
      blurb:
        'A love letter to Pakistani craft — traditional silhouettes and motifs reinterpreted for a contemporary wardrobe.',
      statement:
        'Pakistani Heritage bridges tradition and modern design. Rooted in cultural research, the collection reinterprets regional silhouettes, colour and craft for a contemporary audience, honouring artisanal heritage while keeping the pieces relevant and wearable today.',
      images: build('pakistani heritage')
    },
    {
      slug: 'print-collection',
      title: 'Print Collection',
      subtitle: 'Portfolio Development',
      category: 'Print Design',
      year: '2023–2025',
      discipline: 'Print · Repeat · CAD',
      blurb:
        'Development work showing print research, repeat construction and application across a cohesive design range.',
      statement:
        'This selection documents the print design process end to end — from concept and research through motif development, repeat construction and final application. It highlights technical CAD ability alongside a strong sense of colour and composition, the foundation of any commercial print role.',
      images: build('print collection')
    },
    {
      slug: 'textiles',
      title: 'Textiles',
      subtitle: 'Material Research',
      category: 'Textile Design',
      year: '2023–2025',
      discipline: 'Textiles · Sampling · Development',
      blurb:
        'Fabric experimentation and sampling — the technical backbone behind the finished collections.',
      statement:
        'The Textiles work demonstrates hands-on material research: sampling, manipulation and development that informs every collection. It reflects a designer who understands cloth from the fibre up — essential for roles that demand both creative vision and technical fluency.',
      images: build('Textiles')
    }
  ];

  var contentCreator = {
    slug: 'content-creator',
    title: 'Content Creation',
    subtitle: 'Fashion Storytelling',
    category: 'Digital & Social',
    year: '2024–2025',
    discipline: 'Styling · Photography Direction · Social',
    blurb:
      'Fashion content built for the feed — styling, art direction and social storytelling that turns collections into engagement.',
    statement:
      'Beyond the atelier, I create fashion content that builds audiences and sells a point of view. This body of work spans styling, shoot direction and social-first storytelling — the modern skill set brands need to translate design into reach, engagement and community.',
    images: build('Content Creator')
  };

  window.PORTFOLIO = {
    designer: {
      name: 'Tania Kayani',
      role: 'Fashion Designer & Content Creator',
      tagline: 'Designing considered collections where craft, culture and concept meet.',
      email: 'tania.kayani@example.com',
      location: 'Available for opportunities worldwide',
      social: [
        { label: 'Instagram', url: '#' },
        { label: 'LinkedIn', url: '#' },
        { label: 'Behance', url: '#' }
      ]
    },
    collections: collections,
    contentCreator: contentCreator
  };
})();
