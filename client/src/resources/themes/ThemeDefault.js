import { Colors } from './Colors';

export const defaultTheme = {
  animation: {
    none: 'none',
    fade: 'fade 0.5s ease-in-out',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite'
  },
  aspectRatio: {
    auto: 'auto',
    square: '1 / 1',
    video: '16 / 9'
  },
  border: {
    solid: 'solid 1px',
    dashed: 'dashed 1px',
    dotted: 'dotted 1px'
  },
  borderRadius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  borderWidth: {
    0: '0px',
    2: '2px',
    4: '4px',
    8: '8px'
  },
  colors: {
    ...Colors,
    background: `${({ theme }) => theme.body}`,
    border: `1px solid ${({ theme }) => theme.border}`,
    error: `${({ theme }) => theme.error}`,
    fill: `${({ theme }) => theme.fill}`,
    grey: `${({ theme }) => theme.grey}`,
    primary: `${({ theme }) => theme.primary}`,
    secondary: `${({ theme }) => theme.secondary}`,
    shadow: `$${({ theme }) => theme.shadow}`,
    shadowHover: `${({ theme }) => theme.shadowHover}`,
    text: `${({ theme }) => theme.text}`
  },
  columns: {
    auto: 'auto',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    '3xs': '16rem',
    '2xs': '18rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem'
  },
  contrast: {
    0: '0',
    50: '.5',
    75: '.75',
    100: '1',
    125: '1.25',
    150: '1.5',
    200: '2'
  },
  cursor: {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    help: 'help',
    'not-allowed': 'not-allowed',
    none: 'none',
    'context-menu': 'context-menu',
    progress: 'progress',
    cell: 'cell',
    crosshair: 'crosshair',
    'vertical-text': 'vertical-text',
    alias: 'alias',
    copy: 'copy',
    'no-drop': 'no-drop',
    grab: 'grab',
    grabbing: 'grabbing'
  },
  fontFamily: {
    sans: 'Helvetica, sans-serif'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1rem',
    '4xl': '3rem',
    '5xl': '4rem'
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  gridAutoColumns: {
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0, 1fr)'
  },
  gridAutoRows: {
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0, 1fr)'
  },
  gridColumn: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-7': 'span 7 / span 7',
    'span-8': 'span 8 / span 8',
    'span-9': 'span 9 / span 9',
    'span-10': 'span 10 / span 10',
    'span-11': 'span 11 / span 11',
    'span-12': 'span 12 / span 12',
    'span-full': '1 / -1'
  },
  gridColumnEnd: {
    auto: 'auto',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13'
  },
  gridColumnStart: {
    auto: 'auto',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13'
  },
  gridRow: {
    auto: 'auto',
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-full': '1 / -1'
  },
  gridRowEnd: {
    auto: 'auto',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7'
  },
  gridRowStart: {
    auto: 'auto',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7'
  },
  gridTemplateColumns: {
    none: 'none',
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))'
  },
  gridTemplateRows: {
    none: 'none',
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))'
  },
  height: {
    auto: 'auto',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    half: '50%',
    third: '33.333333%',
    fourth: '25%',
    fifth: '20%',
    sixth: '16.666667%',
    full: '100%',
    screen: '100vh',
    logo: '8vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  },
  keyframes: {
    spin: {
      to: {
        transform: 'rotate(360deg)'
      }
    },
    ping: {
      '75%, 100%': {
        transform: 'scale(2)',
        opacity: '0'
      }
    },
    pulse: {
      '50%': {
        opacity: '.5'
      }
    },
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
      },
      '50%': {
        transform: 'none',
        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
      }
    }
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem'
  },
  margin: {
    auto: 'auto',
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    xxl: '1rem'
  },
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1'
  },
  order: {
    first: '-9999',
    last: '9999',
    none: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12'
  },
  padding: {
    auto: 'auto',
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    xxl: '1rem'
  },
  outlineOffset: {
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
    16: '16px'
  },
  outlineWidth: {
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
    16: '16px'
  },
  ringOffsetWidth: {
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px'
  },
  ringWidth: {
    0: '0px',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px'
  },
  rotate: {
    0: '0deg',
    1: '1deg',
    2: '2deg',
    3: '3deg',
    6: '6deg',
    12: '12deg',
    45: '45deg',
    90: '90deg',
    180: '180deg'
  },
  saturate: {
    0: '0',
    50: '.5',
    100: '1',
    150: '1.5',
    200: '2'
  },
  scale: {
    0: '0',
    50: '.5',
    75: '.75',
    90: '.9',
    95: '.95',
    100: '1',
    105: '1.05',
    110: '1.1',
    125: '1.25',
    150: '1.5'
  },
  screens: {
    xxs: '280px',
    // => @media (min-width: 280px) { ... }
    xs: '320px',
    // => @media (min-width: 320px) { ... }
    sm: '640px',
    // => @media (min-width: 640px) { ... }
    md: '760px',
    // => @media (min-width: 7600px) { ... }
    lg: '840px',
    // => @media (min-width: 900px) { ... }
    xl: '1366px',
    // => @media (min-width: 1366px) { ... }
    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
    '3xl': '1920px',
    // => @media (min-width: 1920px) { ... }
    '4xl': '2560px'
    // => @media (min-width: 2560px) { ... }
  },
  skew: {
    0: '0deg',
    1: '1deg',
    2: '2deg',
    3: '3deg',
    6: '6deg',
    12: '12deg'
  },
  spacing: {
    px: '1px',
    0.5: '0.125rem', // 2px
    1: '0.25rem', // 4px
    1.5: '0.375rem', // 6px
    2: '0.5rem', // 8px
    2.5: '0.625rem', // 10px
    3: '0.75rem', // 12px
    3.5: '0.875rem', // 14px
    4: '1rem', // 16px
    5: '1.25rem', // 18px
    6: '1.5rem', // 20px
    7: '1.75rem', // 24px
    8: '2rem', // 28px
    9: '2.25rem', // 32px
    10: '2.5rem', // 36px
    11: '2.75rem', // 40px
    12: '3rem', // 48px
    14: '3.5rem', // 56px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    28: '7rem', // 112px
    32: '8rem', // 128px
    36: '9rem', // 144px
    40: '10rem', // 160px
    44: '11rem', // 176px
    48: '12rem', // 192px
    52: '13rem', // 208px
    56: '14rem', // 224px
    60: '15rem', // 240px
    64: '16rem', // 256px
    72: '18rem', // 288px
    80: '20rem', // 320px
    96: '24rem' // 384px
  },
  strokeWidth: {
    0: '0',
    1: '1',
    2: '2'
  },
  transitionDelay: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  transitionDuration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms'
  },
  width: {
    auto: 'auto',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    half: '50%',
    third: '33.333333%',
    fourth: '25%',
    fifth: '20%',
    sixth: '16.666667%',
    full: '100%',
    screen: '100vw',
    logo: '8vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  },
  zIndex: {
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  }
};
