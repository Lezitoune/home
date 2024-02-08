const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'fond-blanc': "URL('~/assets/images/LogoONbrBlanc.svg')",
        'fond-noir': "URL('~/assets/images/LogoONbrNoir.svg')",
        'fond-rouge': "URL('~/assets/images/LogoONbrRouge.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
