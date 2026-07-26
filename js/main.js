/* =====================================================================
   Tania Kayani — Portfolio interactions & rendering
   ===================================================================== */
(function () {
  'use strict';

  var P = window.PORTFOLIO;
  if (!P) return;

  /* ---------- Helpers ---------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function qs(s, r) { return (r || document).querySelector(s); }
  function qsa(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  function findCollection(slug) {
    if (slug === P.contentCreator.slug) return P.contentCreator;
    return P.collections.filter(function (c) { return c.slug === slug; })[0];
  }

  /* ---------- Navigation behaviour ---------- */
  function initNav() {
    var nav = qs('.nav');
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var toggle = qs('.nav__toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
      });
      qsa('.nav__links a').forEach(function (a) {
        a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
      });
    }
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = qsa('.reveal');
    if (!('IntersectionObserver' in window) || !items.length) {
      items.forEach(function (i) { i.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------- Lightbox ---------- */
  var LB = { images: [], i: 0, node: null };
  function buildLightbox() {
    if (LB.node) return;
    var lb = el('div', 'lightbox');
    lb.innerHTML =
      '<button class="lightbox__btn lightbox__close" aria-label="Close">&times;</button>' +
      '<button class="lightbox__btn lightbox__nav lightbox__prev" aria-label="Previous">&#8249;</button>' +
      '<img alt="Portfolio image enlarged">' +
      '<button class="lightbox__btn lightbox__nav lightbox__next" aria-label="Next">&#8250;</button>' +
      '<div class="lightbox__count"></div>';
    document.body.appendChild(lb);
    LB.node = lb;
    qs('.lightbox__close', lb).addEventListener('click', closeLightbox);
    qs('.lightbox__prev', lb).addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    qs('.lightbox__next', lb).addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    });
  }
  function openLightbox(images, index) {
    buildLightbox();
    LB.images = images; LB.i = index;
    render();
    LB.node.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    LB.node.classList.remove('open');
    document.body.style.overflow = '';
  }
  function step(d) {
    LB.i = (LB.i + d + LB.images.length) % LB.images.length;
    render();
  }
  function render() {
    qs('.lightbox img', LB.node).src = LB.images[LB.i];
    qs('.lightbox__count', LB.node).textContent = (LB.i + 1) + ' / ' + LB.images.length;
  }

  /* ---------- Homepage rendering ---------- */
  function renderHome() {
    var grid = qs('#collections');
    if (!grid) return;

    // Layout rhythm: alternate wide/tall for editorial variety.
    var layout = ['card--wide', 'card--tall', 'card', 'card', 'card--wide', 'card--tall', 'card'];
    P.collections.forEach(function (c, idx) {
      var extra = layout[idx % layout.length];
      var cover = c.images[0] || '';
      var a = el('a', 'card ' + extra + ' reveal');
      a.href = 'collection.html?c=' + encodeURIComponent(c.slug);
      a.innerHTML =
        '<div class="card__media"><img loading="lazy" src="' + cover + '" alt="' + c.title + ' collection"></div>' +
        '<div class="card__body">' +
          '<div class="card__cat">' + c.category + ' &middot; ' + c.year + '</div>' +
          '<h3 class="card__title">' + c.title + (c.subtitle ? ' <em>' + c.subtitle + '</em>' : '') + '</h3>' +
          '<div class="card__meta"><span>View Collection</span><span class="arrow">&rarr;</span></div>' +
        '</div>';
      grid.appendChild(a);
    });

    // Hero background — use a strong opening image.
    var heroImg = qs('#heroImg');
    if (heroImg) heroImg.src = P.collections[0].images[0];

    // Content creator mosaic
    var mosaic = qs('#ccMosaic');
    if (mosaic) {
      P.contentCreator.images.slice(2, 8).forEach(function (src) {
        var img = el('img');
        img.loading = 'lazy';
        img.src = src;
        img.alt = 'Content creation still';
        mosaic.appendChild(img);
      });
    }

    // Fill designer bits
    qsa('[data-designer-name]').forEach(function (n) { n.textContent = P.designer.name; });
  }

  /* ---------- Collection page rendering ---------- */
  function renderCollection() {
    var mount = qs('#collection');
    if (!mount) return;

    var slug = param('c');
    var c = findCollection(slug) || P.collections[0];
    document.title = c.title + ' — ' + P.designer.name;

    // Hero
    qs('#dHeroImg').src = c.images[0] || '';
    qs('#dCat').textContent = c.category + ' \u00b7 ' + c.year;
    qs('#dTitle').innerHTML = c.title + (c.subtitle ? ' <em>' + c.subtitle + '</em>' : '');

    // Meta
    qs('#dStatement').textContent = c.statement;
    var facts = qs('#dFacts');
    var rows = [
      ['Category', c.category],
      ['Year', c.year],
      ['Discipline', c.discipline]
    ];
    var dl = el('dl');
    rows.forEach(function (r) {
      dl.appendChild(el('dt', null, r[0]));
      dl.appendChild(el('dd', null, r[1]));
    });
    if (c.looks && c.looks.length) {
      dl.appendChild(el('dt', null, 'Looks'));
      var dd = el('dd');
      var wrap = el('div', 'looks');
      c.looks.forEach(function (l) { wrap.appendChild(el('span', null, l)); });
      dd.appendChild(wrap);
      dl.appendChild(dd);
    }
    facts.appendChild(dl);

    // Gallery
    var gallery = qs('#dGallery');
    c.images.forEach(function (src, i) {
      var item = el('div', 'gallery__item reveal');
      item.innerHTML =
        '<span class="gallery__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<img loading="lazy" src="' + src + '" alt="' + c.title + ' look ' + (i + 1) + '">';
      item.addEventListener('click', function () { openLightbox(c.images, i); });
      gallery.appendChild(item);
    });

    // Next collection strip
    var pool = P.collections;
    var curIdx = pool.map(function (x) { return x.slug; }).indexOf(c.slug);
    var next = curIdx === -1 ? pool[0] : pool[(curIdx + 1) % pool.length];
    var nextEl = qs('#dNext');
    nextEl.href = 'collection.html?c=' + encodeURIComponent(next.slug);
    qs('#dNextImg').src = next.images[0] || '';
    qs('#dNextTitle').innerHTML = next.title + (next.subtitle ? ' <em>' + next.subtitle + '</em>' : '');
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    renderHome();
    renderCollection();
    initNav();
    initReveal();
  });
})();
