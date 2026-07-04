/* Lunar Chaperone — Moontuner riso/paper Tailwind configuration
   Load this BEFORE the Tailwind CDN script on every page:

     <script src="../assets/tailwind-config.js"></script>
     <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
*/
tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Riso/paper palette
        'background':                '#efe7d3',
        'surface':                   '#efe7d3',
        'surface-bright':            '#efe7d3',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f4eedd',
        'surface-container':         '#e9dfc6',
        'surface-container-high':    '#e3d8bc',
        'surface-container-highest': '#ddd1b2',
        'surface-dim':               '#d4c8a6',
        'surface-variant':           '#ddd1b2',
        'surface-tint':              '#1f7d88',

        'on-background':             '#1c1a17',
        'on-surface':                '#1c1a17',
        'on-surface-variant':        '#4c463a',

        'primary':                   '#1f7d88',
        'primary-container':         '#b6852a',
        'primary-fixed':             '#ecd9a8',
        'primary-fixed-dim':         '#d4b568',
        'on-primary':                '#ffffff',
        'on-primary-container':      '#6d4f16',
        'on-primary-fixed':          '#201703',
        'on-primary-fixed-variant':  '#6d4f16',
        'inverse-primary':           '#d4b568',

        'secondary':                 '#8a7f64',
        'secondary-container':       '#e6dcc0',
        'secondary-fixed':           '#e6dcc0',
        'secondary-fixed-dim':       '#cfc3a4',
        'on-secondary':              '#ffffff',
        'on-secondary-container':    '#8a7f64',
        'on-secondary-fixed':        '#1c1a17',
        'on-secondary-fixed-variant':'#474744',

        'tertiary':                  '#515f77',
        'tertiary-container':        '#9eacc7',
        'tertiary-fixed':            '#d5e3ff',
        'tertiary-fixed-dim':        '#b9c7e3',
        'on-tertiary':               '#ffffff',
        'on-tertiary-container':     '#324057',
        'on-tertiary-fixed':         '#0d1c31',
        'on-tertiary-fixed-variant': '#3a475e',

        'outline':                   '#8a7f64',
        'outline-variant':           '#cfc3a4',

        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#93000a',

        'inverse-surface':           '#0d0d0d',
        'inverse-on-surface':        '#ece7dc',

        'eclipse':                   '#0d0d0d',
        'on-eclipse':                '#ece7dc',
      },
      borderRadius: {
        DEFAULT: '0px',
        lg:      '0px',
        xl:      '0px',
        full:    '9999px',
      },
      fontFamily: {
        display:  ['"Playfair Display"', 'Georgia', 'serif'],
        headline: ['"Playfair Display"', 'Georgia', 'serif'],
        body:     ['"DM Sans"',          'system-ui', 'sans-serif'],
        label:    ['"Work Sans"',        'system-ui', 'sans-serif'],
        mono:     ['"IBM Plex Mono"',    'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
};
