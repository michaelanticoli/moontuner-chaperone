/**
 * Lunar Chaperone — orphan-nav injector
 *
 * Injects a minimal fixed top nav bar on pages that are not part of the
 * main 26-workbook navigation flow (prototype screens, dashboards, templates,
 * supplementary modules). Provides "Lunar Chaperone" home and "All Workbooks"
 * links so no page in the collection is a dead end.
 *
 * Usage: <script src="../assets/orphan-nav.js"></script>
 * (placed just before </body> on any page that does not include nav.js)
 */
(function () {
  'use strict';

  // Do nothing if the main workbook nav is already present
  if (document.getElementById('lc-nav')) return;

  var nav = document.createElement('header');
  nav.id = 'lc-nav';
  nav.setAttribute('role', 'banner');
  nav.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'right:0',
    'z-index:100',
    'background:rgba(252,249,242,0.94)',
    'backdrop-filter:blur(12px)',
    '-webkit-backdrop-filter:blur(12px)',
    'border-bottom:1px solid #d0c5b7',
  ].join(';');

  nav.innerHTML = '<div style="max-width:1280px;margin:0 auto;padding:0.75rem clamp(1.5rem,5vw,5rem);'
    + 'display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">'
    + '<a href="../the_lunar_chaperone_master_index/code.html" aria-label="The Lunar Chaperone — home" '
    + 'style="font-family:\'Inter\',system-ui,sans-serif;font-size:0.625rem;letter-spacing:0.2em;'
    + 'text-transform:uppercase;color:#725b37;text-decoration:none;font-weight:500;white-space:nowrap;">'
    + '✦ Moontuner</a>'
    + '<nav aria-label="Site navigation" style="display:flex;align-items:center;gap:1.5rem;">'
    + '<a href="../the_lunar_chaperone_master_index/code.html" '
    + 'style="font-family:\'Inter\',system-ui,sans-serif;font-size:0.625rem;letter-spacing:0.2em;'
    + 'text-transform:uppercase;color:#7f766a;text-decoration:none;transition:color 0.2s;" '
    + 'onmouseover="this.style.color=\'#725b37\'" onmouseout="this.style.color=\'#7f766a\'">'
    + '← Lunar Chaperone</a>'
    + '<a href="../the_lunar_chaperone_master_index/code.html" '
    + 'style="font-family:\'Inter\',system-ui,sans-serif;font-size:0.625rem;letter-spacing:0.2em;'
    + 'text-transform:uppercase;color:#7f766a;text-decoration:none;transition:color 0.2s;" '
    + 'onmouseover="this.style.color=\'#725b37\'" onmouseout="this.style.color=\'#7f766a\'">'
    + 'All Workbooks</a>'
    + '</nav>'
    + '</div>';

  document.body.insertBefore(nav, document.body.firstChild);

  // Offset body so fixed nav does not overlap content
  function adjustPadding() {
    document.body.style.paddingTop = (nav.offsetHeight + 16) + 'px';
  }
  adjustPadding();
  window.addEventListener('resize', adjustPadding);
})();
