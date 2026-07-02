/**
 * Lunar Chaperone — workbook nav
 *
 * Injected on every main workbook page (01–26) via:
 *   <script src="../assets/nav.js" data-workbook="01"></script>
 *
 * Responsibilities:
 *  1. Injects a prev/next workbook footer strip (wb-nav-footer from style.css).
 *  2. Saves the current workbook number to localStorage so the master
 *     index can highlight "your current cycle."
 */
(function () {
  'use strict';

  /* ── Sequence data ─────────────────────────────────────────────────────── */
  var WB = [
    [1,  'Ignition to Depth',              'workbook_01_ignition_to_depth'],
    [2,  'Depth to Root',                  'workbook_02_depth_to_root'],
    [3,  'Root to Vision',                 'workbook_03_root_to_vision'],
    [4,  'Vision to Voice',                'workbook_04_vision_to_voice'],
    [5,  'Soul to Balance',                'workbook_05_soul_to_balance'],
    [6,  'Balance to Fire',                'workbook_06_balance_to_fire'],
    [7,  'Fire to Depth',                  'workbook_07_fire_to_depth'],
    [8,  'Depth to Root',                  'workbook_08_depth_to_root'],
    [9,  'Root to Vision',                 'workbook_09_root_to_vision'],
    [10, 'Vision to Voice',                'workbook_10_vision_to_voice'],
    [11, 'Voice to Womb',                  'workbook_11_voice_to_womb'],
    [12, 'Womb to Bone',                   'workbook_12_womb_to_bone'],
    [13, 'Heart Expanding to Mind',        'workbook_13_heart_expanding_to_mind'],
    [14, 'Mind Manifesting Through Gut',   'workbook_14_mind_manifesting_through_gut'],
    [15, 'Gut Flowing to Soul',            'workbook_15_gut_flowing_to_soul'],
    [16, 'Soul Balancing Through Harmony', 'workbook_16_soul_balancing_through_harmony'],
    [17, 'Balance Igniting to Fire',       'workbook_17_balance_igniting_to_fire'],
    [18, 'Fire Deepening to Shadow',       'workbook_18_fire_deepening_to_shadow'],
    [19, 'Depth Rooting in Earth',         'workbook_19_depth_rooting_in_earth'],
    [20, 'Root Expanding to Vision',       'workbook_20_root_expanding_to_vision'],
    [21, 'Vision Speaking Through Voice',  'workbook_21_vision_speaking_through_voice_1'],
    [22, 'Voice Nourishing to Womb',       'workbook_22_voice_nourishing_to_womb'],
    [23, 'Womb Structuring to Bone',       'workbook_23_womb_structuring_to_bone'],
    [24, 'Bone Warming to Heart',          'workbook_24_bone_warming_to_heart'],
    [25, 'Eclipse Portal: Virgo–Aries',    'workbook_25_virgo_aries_eclipse_portal'],
    [26, 'Eclipse Portal: Pisces–Virgo',   'workbook_26_pisces_virgo_eclipse_portal']
  ];

  function findWB(num) {
    for (var i = 0; i < WB.length; i++) {
      if (WB[i][0] === num) return WB[i];
    }
    return null;
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  function prevNum(n) {
    if (n === 1)  return 24;   // core loop
    if (n === 25) return 24;
    if (n === 26) return 25;
    return n - 1;
  }

  function nextNum(n) {
    if (n === 24) return 1;    // core loop
    if (n === 25) return 26;
    if (n === 26) return 1;
    return n + 1;
  }

  /* ── Read workbook number from script tag ─────────────────────────────── */
  var cs = document.currentScript;
  var wbStr = cs ? cs.getAttribute('data-workbook') : null;
  var currentNum = wbStr ? parseInt(wbStr, 10) : 0;

  /* ── Inject footer nav after DOM is ready ─────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Persist current workbook for master-index highlight */
    if (currentNum >= 1 && currentNum <= 26) {
      try { localStorage.setItem('lc-current-workbook', currentNum); } catch (e) {}
    }

    if (!currentNum) return;

    var pNum = prevNum(currentNum);
    var nNum = nextNum(currentNum);
    var prev = findWB(pNum);
    var next = findWB(nNum);
    if (!prev || !next) return;

    var pPath = '../' + prev[2] + '/code.html';
    var nPath = '../' + next[2] + '/code.html';
    var indexPath = '../the_lunar_chaperone_master_index/code.html';

    /* Build footer */
    var footer = document.createElement('nav');
    footer.className = 'wb-nav-footer';
    footer.setAttribute('aria-label', 'Workbook navigation');
    footer.innerHTML =
      '<a href="' + pPath + '" class="prev" aria-label="Previous workbook">'
      + '<span class="dir">← Workbook ' + pad(pNum) + '</span>'
      + '<span class="wb-name">' + prev[1] + '</span>'
      + '</a>'
      + '<a href="' + indexPath + '" style="text-align:center;border-right:1px solid var(--lc-outline-variant,#d0c5b7);">'
      + '<span class="dir" style="display:block;">All Workbooks</span>'
      + '<span class="wb-name">' + pad(currentNum) + ' / 26</span>'
      + '</a>'
      + '<a href="' + nPath + '" class="next" aria-label="Next workbook">'
      + '<span class="dir">Workbook ' + pad(nNum) + ' →</span>'
      + '<span class="wb-name">' + next[1] + '</span>'
      + '</a>';

    /* Override grid to 3 columns so the centre "All Workbooks" link fits */
    footer.style.gridTemplateColumns = '1fr 1fr 1fr';

    document.body.appendChild(footer);
  });
})();