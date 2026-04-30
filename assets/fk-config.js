/* FK Repairs - Shared Tailwind config & design tokens
   Loaded after the Tailwind Play CDN on every page so brand
   tokens (colors, fonts, radii, shadows) are available as
   utility classes across the entire booking flow. */
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'fk-yellow': '#FFEB00',
        'fk-yellow-tint': '#FFFEF5',
        'fk-yellow-dark': '#E6D300',
        'fk-black': '#000000',
        'fk-grey': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD',
          500: '#9E9E9E',
          700: '#757575',
          900: '#212121',
        },
        'fk-success': '#4CAF50',
        'fk-success-bg': '#E8F5E9',
        'fk-error': '#F44336',
        'fk-error-bg': '#FFEBEE',
        'fk-warning': '#FF9800',
        'fk-warning-bg': '#FFF9E6',
      },
      fontFamily: {
        'anybody': ['Anybody', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'body-xs': ['12px', { lineHeight: '18px' }],
      },
      borderRadius: {
        'btn': '8px',
        'input': '8px',
        'card': '12px',
        'modal': '16px',
      },
      boxShadow: {
        'fk-light': '0 2px 4px rgba(0,0,0,0.10)',
        'fk-medium': '0 4px 8px rgba(0,0,0,0.15)',
        'fk-heavy': '0 8px 24px rgba(0,0,0,0.20)',
        'fk-focus': '0 0 0 3px rgba(255,235,0,0.30)',
      },
    }
  }
};
