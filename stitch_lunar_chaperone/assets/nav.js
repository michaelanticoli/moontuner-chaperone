/**
 * Lunar Chaperone — shared navigation injector
 *
 * Usage: Add <script src="../assets/nav.js" data-workbook="07"></script>
 * (or set data-workbook on <body>)
 *
 * The script:
 *  1. Injects a fixed global top-nav header with breadcrumb
 *  2. Injects a prev/next workbook footer at the end of <body>
 *  3. Adds a cycle-position timeline strip inside the top nav
 *  4. Offsets <body> padding-top for the fixed header height
 */
(function () {
  'use strict';

  /* ── Workbook data ─────────────────────────────────────────────────────── */
  var WORKBOOKS = [
    { num: 1,  title: 'From Bone to Heart',              journey: 'Capricorn → Leo',          cycle: 1,       folder: 'workbook_01_ignition_to_depth' },
    { num: 2,  title: 'From Heart to Mind',              journey: 'Leo → Aquarius',            cycle: 1,       folder: 'workbook_02_depth_to_root' },
    { num: 3,  title: 'From Mind to Gut',                journey: 'Aquarius → Virgo',          cycle: 1,       folder: 'workbook_03_root_to_vision' },
    { num: 4,  title: 'From Gut to Soul',                journey: 'Virgo → Pisces',            cycle: 1,       folder: 'workbook_04_vision_to_voice' },
    { num: 5,  title: 'From Soul to Balance',            journey: 'Pisces → Libra',            cycle: 1,       folder: 'workbook_05_soul_to_balance' },
    { num: 6,  title: 'From Balance to Fire',            journey: 'Libra → Aries',             cycle: 1,       folder: 'workbook_06_balance_to_fire' },
    { num: 7,  title: 'From Fire to Depth',              journey: 'Aries → Scorpio',           cycle: 1,       folder: 'workbook_07_fire_to_depth' },
    { num: 8,  title: 'From Depth to Root',              journey: 'Scorpio → Taurus',          cycle: 1,       folder: 'workbook_08_depth_to_root' },
    { num: 9,  title: 'From Root to Vision',             journey: 'Taurus → Sagittarius',      cycle: 1,       folder: 'workbook_09_root_to_vision' },
    { num: 10, title: 'From Vision to Voice',            journey: 'Sagittarius → Gemini',      cycle: 1,       folder: 'workbook_10_vision_to_voice' },
    { num: 11, title: 'From Voice to Womb',              journey: 'Gemini → Cancer',           cycle: 1,       folder: 'workbook_11_voice_to_womb' },
    { num: 12, title: 'From Womb to Bone',               journey: 'Cancer → Capricorn',        cycle: 1,       folder: 'workbook_12_womb_to_bone' },
    { num: 13, title: 'Heart Expanding to Mind',         journey: 'Leo → Aquarius',            cycle: 2,       folder: 'workbook_13_heart_expanding_to_mind' },
    { num: 14, title: 'Mind Manifesting Through Gut',    journey: 'Aquarius → Virgo',          cycle: 2,       folder: 'workbook_14_mind_manifesting_through_gut' },
    { num: 15, title: 'Gut Flowing to Soul',             journey: 'Virgo → Pisces',            cycle: 2,       folder: 'workbook_15_gut_flowing_to_soul' },
    { num: 16, title: 'Soul Balancing Through Harmony',  journey: 'Pisces → Libra',            cycle: 2,       folder: 'workbook_16_soul_balancing_through_harmony' },
    { num: 17, title: 'Balance Igniting to Fire',        journey: 'Libra → Aries',             cycle: 2,       folder: 'workbook_17_balance_igniting_to_fire' },
    { num: 18, title: 'Fire Deepening to Shadow',        journey: 'Aries → Scorpio',           cycle: 2,       folder: 'workbook_18_fire_deepening_to_shadow' },
    { num: 19, title: 'Depth Rooting in Earth',          journey: 'Scorpio → Taurus',          cycle: 2,       folder: 'workbook_19_depth_rooting_in_earth' },
    { num: 20, title: 'Root Expanding to Vision',        journey: 'Taurus → Sagittarius',      cycle: 2,       folder: 'workbook_20_root_expanding_to_vision' },
    { num: 21, title: 'Vision Speaking Through Voice',   journey: 'Sagittarius → Gemini',      cycle: 2,       folder: 'workbook_21_vision_speaking_through_voice_1' },
    { num: 22, title: 'Voice Nourishing to Womb',        journey: 'Gemini → Cancer',           cycle: 2,       folder: 'workbook_22_voice_nourishing_to_womb' },
    { num: 23, title: 'Womb Structuring to Bone',        journey: 'Cancer → Capricorn',        cycle: 2,       folder: 'workbook_23_womb_structuring_to_bone' },
    { num: 24, title: 'Bone Warming to Heart',           journey: 'Capricorn → Leo',           cycle: 2,       folder: 'workbook_24_bone_warming_to_heart' },
    { num: 25, title: 'Virgo–Aries Eclipse Portal',      journey: 'Virgo → Aries',             cycle: 'eclipse', folder: 'workbook_25_virgo_aries_eclipse_portal' },
    { num: 26, title: 'Pisces–Virgo Eclipse Portal',     journey: 'Pisces → Virgo',            cycle: 'eclipse', folder: 'workbook_26_pisces_virgo_eclipse_portal' },
  ];

  /* ── Helpers ───────────────────────────────────────────────────────────── */
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  /** Build a relative path from a workbook folder back up to the site root and
   *  then down into the target folder. Works from any depth-1 subfolder. */
  function wbHref(folder) {
    return '../' + folder + '/code.html';
  }

  function indexHref() { return '../the_lunar_chaperone_master_index/code.html'; }
  function libraryHref() { return '../the_great_library/code.html'; }

  /* ── Detect current workbook ───────────────────────────────────────────── */
  var currentNum = null;

  // 1. Check <script data-workbook="07">
  var scripts = document.querySelectorAll('script[data-workbook]');
  if (scripts.length) {
    currentNum = parseInt(scripts[scripts.length - 1].getAttribute('data-workbook'), 10);
  }
  // 2. Fallback: <body data-workbook="07">
  if (!currentNum) {
    var bodyAttr = document.body && document.body.getAttribute('data-workbook');
    if (bodyAttr) currentNum = parseInt(bodyAttr, 10);
  }
  // 3. Fallback: parse path
  if (!currentNum) {
    var m = window.location.pathname.match(/workbook_(\d+)/);
    if (m) currentNum = parseInt(m[1], 10);
  }

  var currentWb  = WORKBOOKS.find(function (w) { return w.num === currentNum; });
  var prevWb     = currentNum > 1  ? WORKBOOKS.find(function (w) { return w.num === currentNum - 1; }) : null;
  var nextWb     = currentNum < 26 ? WORKBOOKS.find(function (w) { return w.num === currentNum + 1; }) : null;

  /* ── Build timeline strip HTML ─────────────────────────────────────────── */
  function buildTimeline() {
    var dots = '';
    WORKBOOKS.forEach(function (w) {
      var cls = 'timeline-dot';
      if (w.cycle === 'eclipse') cls += ' eclipse';
      else if (currentNum && w.num < currentNum)  cls += ' done';
      else if (currentNum && w.num === currentNum) cls += ' current';
      var title = 'Workbook ' + pad(w.num) + ': ' + w.title;
      var href  = (currentNum && w.num === currentNum) ? '#' : wbHref(w.folder);
      dots += '<a href="' + href + '" title="' + title + '" aria-label="' + title + '" class="' + cls + '" style="display:inline-block;text-decoration:none;"></a>';
    });
    return dots;
  }

  /* ── Inject nav header ─────────────────────────────────────────────────── */
  function injectNav() {
    var wbLabel = currentWb
      ? 'Workbook ' + pad(currentWb.num) + ' — ' + currentWb.title
      : 'Lunar Chaperone';

    var breadcrumb = '<nav class="breadcrumb" aria-label="Breadcrumb">'
      + '<a href="' + libraryHref() + '">The Great Library</a>'
      + '<span class="breadcrumb-sep" aria-hidden="true">/</span>'
      + '<a href="' + indexHref() + '">Master Index</a>'
      + (currentWb
          ? '<span class="breadcrumb-sep" aria-hidden="true">/</span>'
            + '<span class="current">' + wbLabel + '</span>'
          : '')
      + '</nav>';

    var timeline = '<div class="timeline-strip" aria-hidden="true" style="margin-top:0.5rem;">'
      + buildTimeline()
      + '</div>';

    var nav = document.createElement('header');
    nav.id = 'lc-nav';
    nav.setAttribute('role', 'banner');
    nav.innerHTML = '<div style="max-width:1280px;margin:0 auto;padding:0.75rem clamp(1.5rem,5vw,5rem);">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">'
      + '<a href="' + libraryHref() + '" aria-label="The Great Library" style="font-family:\'Inter\',sans-serif;font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;color:#725b37;text-decoration:none;font-weight:500;white-space:nowrap;">✦ Moontuner</a>'
      + breadcrumb
      + '<a href="' + indexHref() + '" style="font-family:\'Inter\',sans-serif;font-size:0.625rem;letter-spacing:0.2em;text-transform:uppercase;color:#725b37;text-decoration:none;white-space:nowrap;" aria-label="All Workbooks">All Workbooks</a>'
      + '</div>'
      + (currentWb ? timeline : '')
      + '</div>';

    document.body.insertBefore(nav, document.body.firstChild);

    // Offset body so fixed nav doesn't overlap content
    var h = nav.offsetHeight || 72;
    document.body.style.paddingTop = (h + 16) + 'px';

    // Recalculate on resize
    window.addEventListener('resize', function () {
      document.body.style.paddingTop = (nav.offsetHeight + 16) + 'px';
    });
  }

  /* ── Inject prev/next footer ───────────────────────────────────────────── */
  function injectFooter() {
    if (!currentWb) return;

    var prevHtml = prevWb
      ? '<a href="' + wbHref(prevWb.folder) + '" class="prev" aria-label="Previous workbook">'
        + '<span class="dir">← Previous</span>'
        + '<span class="wb-name">' + pad(prevWb.num) + '. ' + prevWb.title + '</span>'
        + '<span style="font-size:0.75rem;font-family:\'Inter\',sans-serif;color:#7f766a;">' + prevWb.journey + '</span>'
        + '</a>'
      : '<span class="prev" style="opacity:0.3;">'
        + '<span class="dir">← Previous</span>'
        + '<span class="wb-name">Beginning of Cycle</span>'
        + '</span>';

    var nextHtml = nextWb
      ? '<a href="' + wbHref(nextWb.folder) + '" class="next" aria-label="Next workbook">'
        + '<span class="dir">Next →</span>'
        + '<span class="wb-name">' + pad(nextWb.num) + '. ' + nextWb.title + '</span>'
        + '<span style="font-size:0.75rem;font-family:\'Inter\',sans-serif;color:#7f766a;">' + nextWb.journey + '</span>'
        + '</a>'
      : '<span class="next" style="opacity:0.3;">'
        + '<span class="dir">Next →</span>'
        + '<span class="wb-name">Cycle Complete</span>'
        + '</span>';

    var footer = document.createElement('footer');
    footer.className = 'wb-nav-footer';
    footer.setAttribute('aria-label', 'Workbook navigation');
    footer.innerHTML = prevHtml + nextHtml;

    document.body.appendChild(footer);
  }

  /* ── Inject "Continue Journey" button if missing ────────────────────────── */
  function injectContinue() {
    if (!nextWb) return;
    // Only inject if page doesn't already have a continue-journey element
    if (document.querySelector('[data-continue-journey]')) return;

    var btn = document.createElement('div');
    btn.setAttribute('data-continue-journey', '');
    btn.style.cssText = 'text-align:center;padding:3rem 2rem;';
    btn.innerHTML = '<a href="' + wbHref(nextWb.folder) + '" '
      + 'style="display:inline-block;font-family:\'Inter\',sans-serif;font-size:0.625rem;'
      + 'letter-spacing:0.25em;text-transform:uppercase;background:#725b37;color:#fff;'
      + 'padding:1rem 3rem;text-decoration:none;transition:opacity 0.2s;" '
      + 'onmouseover="this.style.opacity=\'0.85\'" onmouseout="this.style.opacity=\'1\'">'
      + 'Continue Journey → Workbook ' + pad(nextWb.num)
      + '</a>';

    // Append before the footer if it exists, otherwise to body
    var footer = document.querySelector('.wb-nav-footer');
    if (footer) { document.body.insertBefore(btn, footer); }
    else { document.body.appendChild(btn); }
  }

  /* ── Run on DOMContentLoaded ───────────────────────────────────────────── */
  function init() {
    injectNav();
    injectFooter();
    injectContinue();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
