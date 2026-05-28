/* Lunar Chaperone — canonical Tailwind configuration
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
        // Paper-archive palette
        'background':                '#fcf9f2',
        'surface':                   '#fcf9f2',
        'surface-bright':            '#fcf9f2',
        'surface-container-lowest':  '#ffffff',
        'surface-container-low':     '#f6f3ec',
        'surface-container':         '#f1eee7',
        'surface-container-high':    '#ebe8e1',
        'surface-container-highest': '#e5e2db',
        'surface-dim':               '#dcdad3',
        'surface-variant':           '#e5e2db',
        'surface-tint':              '#725b37',

        'on-background':             '#1c1c18',
        'on-surface':                '#1c1c18',
        'on-surface-variant':        '#4d463c',

        'primary':                   '#725b37',
        'primary-container':         '#c4a77d',
        'primary-fixed':             '#fedeb0',
        'primary-fixed-dim':         '#e1c296',
        'on-primary':                '#ffffff',
        'on-primary-container':      '#503c1b',
        'on-primary-fixed':          '#281800',
        'on-primary-fixed-variant':  '#584321',
        'inverse-primary':           '#e1c296',

        'secondary':                 '#5f5e5c',
        'secondary-container':       '#e5e2de',
        'secondary-fixed':           '#e5e2de',
        'secondary-fixed-dim':       '#c9c6c3',
        'on-secondary':              '#ffffff',
        'on-secondary-container':    '#656461',
        'on-secondary-fixed':        '#1c1c1a',
        'on-secondary-fixed-variant':'#474744',

        'tertiary':                  '#515f77',
        'tertiary-container':        '#9eacc7',
        'tertiary-fixed':            '#d5e3ff',
        'tertiary-fixed-dim':        '#b9c7e3',
        'on-tertiary':               '#ffffff',
        'on-tertiary-container':     '#324057',
        'on-tertiary-fixed':         '#0d1c31',
        'on-tertiary-fixed-variant': '#3a475e',

        'outline':                   '#7f766a',
        'outline-variant':           '#d0c5b7',

        'error':                     '#ba1a1a',
        'error-container':           '#ffdad6',
        'on-error':                  '#ffffff',
        'on-error-container':        '#93000a',

        'inverse-surface':           '#31312c',
        'inverse-on-surface':        '#f3f0e9',

        'eclipse':                   '#31312c',
        'on-eclipse':                '#f3f0e9',
      },
      borderRadius: {
        DEFAULT: '0px',
        lg:      '0px',
        xl:      '0px',
        full:    '9999px',
      },
      fontFamily: {
        display:  ['"Cormorant Garamond"', '"Noto Serif"', 'Georgia', 'serif'],
        headline: ['"Noto Serif"',          'Georgia',    'serif'],
        body:     ['Newsreader',            '"Noto Serif"','Georgia', 'serif'],
        label:    ['Inter',                 'system-ui',  'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
};
