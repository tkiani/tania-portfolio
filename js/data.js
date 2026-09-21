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

  // Return encoded paths for a specific, hand-picked set of filenames in a folder.
  function pick(folder, names) {
    return names.map(function (name) {
      return encodeURI(folder + '/' + name);
    });
  }

  // Everything in a folder that hasn't been explicitly used above.
  function rest(folder, usedNames) {
    var files = IMG[folder] || [];
    return files
      .filter(function (name) { return usedNames.indexOf(name) === -1; })
      .map(function (name) { return encodeURI(folder + '/' + name); });
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
      title: 'Work Experience, Techpack & Digital Embroidery',
      subtitle: '',
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
      subtitle: 'Vintage Prints',
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

  var myGarments = {
    slug: 'my-garments',
    title: 'My Garments',
    subtitle: 'Made by Hand',
    category: 'Garment Realisation',
    year: '2024–2025',
    discipline: 'Design · Pattern Cutting · Construction',
    blurb:
      'Finished garments I designed and made — from structured corsetry and voluminous sleeves to draped, chain-detailed silhouettes brought to life on the body.',
    statement:
      'This selection brings together garments I have designed and constructed myself, photographed on the runway, in the studio and on the stand. The work spans corsetry, gathered and ruched volume, pleating, hardware detailing and full evening silhouettes — evidence of a hands-on maker who takes a concept through pattern cutting, toile and final construction to a resolved, wearable piece.',
    images: build('6 - My Garments')
  };

  var GD = '7 - Graphic Design';
  var gdEllipsis = [
    'Screenshot 2023-07-02 135125.jpg', 'Screenshot 2023-07-02 150707.jpg',
    'Screenshot 2023-07-02 152445.jpg', 'Screenshot 2023-07-02 214209.jpg'
  ];
  var gdFeatured = gdEllipsis.concat([
    'professional 1-Recovered.jpg', 'professional 5-Recovered.jpg', 'professional 7-Recovered.jpg',
    'BANNER 1.jpg', 'BANNER 2.jpg', 'BANNER 4.jpg',
    'book cover 1.jpg', 'book cover 2.jpg', 'book cover  4.jpg',
    'a-5 screen printing.jpg', 'screen printing tetile 7.jpg',
    'REPEAT 4.jpg', 'TEX 2 4.jpg', 'tex 77.jpg', 'TEX 8-Recovered.jpg', 'scarf print tania 1.jpg',
    'development 17.jpg', 'developments and elements.jpg'
  ]);

  var graphicDesign = {
    slug: 'graphic-design',
    title: 'Graphic Design',
    subtitle: 'Visual Communication',
    category: 'Graphic Design & Art Direction',
    year: '2022–2025',
    discipline: 'Brand Identity · Layout · Typography · Print',
    blurb:
      'A graphic design practice built around message and craft — from a full brand identity to purpose-led campaign posters, editorial covers and screen-printed graphics, where every layout is composed, not decorated.',
    statement:
      'This is design that communicates. From building a complete brand identity to campaign posters, book covers, screen printing and repeat prints, I take a brief from concept and research through logo, typographic system, composition and colour to a finished, print-ready artwork. The work moves fluidly between the screen, the poster wall and the fabric roll — a visual language rooted in strong hierarchy, considered type and a designer\u2019s eye for the details that make a layout feel intentional.',
    // Curated cover for the homepage feature and hero.
    cover: encodeURI(GD + '/tex 77.jpg'),
    // Homepage mosaic — one piece from four different disciplines for variety.
    homeFeature: pick(GD, [
      'professional 1-Recovered.jpg',
      'WhatsApp Image 2026-07-26 at 8.57.22 PM.jpeg',
      'BANNER 1.jpg',
      'book cover 1.jpg'
    ]),
    disciplines: ['Campaigns', 'Digital', 'Social', 'Print', 'Editorial'],
    // Featured project spotlight — a full brand identity case study.
    spotlight: {
      label: 'Featured Project',
      client: 'ELLIPSIS',
      kind: 'Brand Identity',
      title: 'A Travel Brand, End to End',
      tagline: 'Where memories are born, and dreams take flight.',
      text:
        'ELLIPSIS is a complete brand identity I designed for a travel company — a flexible logo system built around a friendly explorer mark, a circular tagline seal and a confident wordmark.',
      brief: 'Create a memorable identity for a travel company that works everywhere, from a boarding pass to a billboard.',
      concept: 'A friendly explorer mark and a circular tagline seal that make wanderlust instantly recognisable.',
      role: 'Full brand identity — logo system, wordmark, emblem and mascot variations, and usage rules.',
      deliverables: 'Primary logo, emblem, wordmark, brand mascot set, colour and lockup variations.',
      tags: ['Logo System', 'Wordmark', 'Emblem', 'Brand Mascot'],
      images: pick(GD, gdEllipsis)
    },
    // Live, published brand — external link.
    liveProject: {
      label: 'Live Brand',
      name: 'Maquillage',
      kind: 'Brand · Packaging · Digital',
      title: 'A Cosmetic Brand, Live on the Web',
      text:
        'Maquillage is a cosmetics brand I designed and built end to end — identity, packaging, campaign visuals and a fully published e-commerce website.',
      brief: 'Launch a bold cosmetics brand with a complete identity and a live, shoppable website.',
      concept: 'A confident "Be Bold" beauty brand carried consistently from logo to storefront.',
      role: 'Brand identity, packaging, campaign and product artwork, plus website design and build.',
      deliverables: 'Logo, packaging, campaign key visuals, product ads, published e-commerce site.',
      cta: 'Visit the Live Site',
      url: 'https://taniazahidkayani1.wixsite.com/maquillage',
      images: [
        encodeURI(GD + '/maquillage/cover.jpg'),
        encodeURI(GD + '/maquillage/campaign.jpg'),
        encodeURI(GD + '/maquillage/wonder-liner.png')
      ]
    },
    groups: [
      {
        title: 'Awareness Campaigns',
        num: '01',
        kind: 'Campaign · Print · Social',
        brief: 'Turn a cause into a single, arresting poster that lands its message in seconds.',
        concept: 'Symbolic, illustrative key visuals paired with one confident line of copy.',
        role: 'Concept, art direction, illustration, typography and final poster layout.',
        deliverables: 'Campaign key visuals, poster artwork, social-ready crops.',
        images: pick(GD, ['professional 1-Recovered.jpg', 'professional 5-Recovered.jpg', 'professional 7-Recovered.jpg'])
      },
      {
        title: 'Banners & Brand Graphics',
        num: '02',
        kind: 'Brand · Print · Digital',
        brief: 'Design wide-format banners that carry a brand message at a glance.',
        concept: 'Confident type and colour blocking built to stay legible at scale.',
        role: 'Layout, typography and colour direction.',
        deliverables: 'Banner artwork, print-ready files, digital variants.',
        images: pick(GD, ['BANNER 1.jpg', 'BANNER 2.jpg', 'BANNER 4.jpg'])
      },
      {
        title: 'Editorial & Book Covers',
        num: '03',
        kind: 'Editorial · Print',
        brief: 'Translate a story into a single, shelf-ready cover image.',
        concept: 'Typographic hierarchy and image treatment that set the tone before a page is turned.',
        role: 'Cover concept, typesetting, image treatment and layout.',
        deliverables: 'Cover artwork, spine and back layout, print-ready files.',
        images: pick(GD, ['book cover 1.jpg', 'book cover 2.jpg', 'book cover  4.jpg'])
      },
      {
        title: 'Screen Printing',
        num: '04',
        kind: 'Print · Illustration',
        brief: 'Take detailed illustration to the print bed as clean, separated artwork.',
        concept: 'Line and layered colour engineered for a physical, hands-on print process.',
        role: 'Illustration, colour separation and print preparation.',
        deliverables: 'Screen-ready separations and printed samples.',
        images: pick(GD, ['a-5 screen printing.jpg', 'screen printing tetile 7.jpg'])
      },
      {
        title: 'Repeat, Print & Scarf Design',
        num: '05',
        kind: 'Print · Surface · Digital',
        brief: 'Develop surface graphics that work as seamless repeats across products.',
        concept: 'Motifs and colourways designed to sit as beautifully on fabric as on the page.',
        role: 'Motif development, repeat construction, colourways and placement.',
        deliverables: 'Repeat artwork, scarf layouts, colourway sets.',
        images: pick(GD, ['REPEAT 4.jpg', 'TEX 2 4.jpg', 'tex 77.jpg', 'TEX 8-Recovered.jpg', 'scarf print tania 1.jpg'])
      },
      {
        title: 'Process & Development',
        num: '06',
        kind: 'Research · Development',
        brief: 'Show the thinking that resolves a design from first idea to finished piece.',
        concept: 'Elements, iterations and refinement documented openly.',
        role: 'Research, development and design iteration.',
        deliverables: 'Development sheets and element studies.',
        images: pick(GD, ['development 17.jpg', 'developments and elements.jpg'])
      },
      {
        title: 'Selected Graphics & Explorations',
        num: '07',
        kind: 'Mixed · Studies',
        brief: 'A wider archive of applied graphics and type studies across briefs.',
        concept: 'Ongoing exploration across formats, subjects and treatments.',
        role: 'Design and art direction across each piece.',
        deliverables: 'Assorted graphics, type studies and applied layouts.',
        images: rest(GD, gdFeatured)
      }
    ],
    // Flat list (used for lightbox + hero mosaic), curated order.
    images: pick(GD, gdFeatured).concat(rest(GD, gdFeatured))
  };

  var contentCreator = {
    slug: 'content-creator',
    title: 'Content Creation',
    subtitle: 'Fashion Storytelling',
    category: 'Digital & Social',
    year: '2024–2025',
    discipline: 'Styling · Photography Direction · Social',
    blurb:
      'Content built for the feed — travel, lifestyle and storytelling through styling, art direction and social-first posts that turn ideas into engagement.',
    statement:
      'Beyond the studio, I create content that builds audiences and tells a story. This body of work spans travel and lifestyle content, styling, shoot direction and social-first storytelling — turning ideas into reach, engagement and community.',
    images: build('Content Creator')
  };

  window.PORTFOLIO = {
    designer: {
      name: 'Tania Zahid Kiani',
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
    contentCreator: contentCreator,
    graphicDesign: graphicDesign,
    myGarments: myGarments
  };
})();
