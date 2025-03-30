import { createTamagui, getConfig } from '@tamagui/core'

const config = createTamagui({
  // act like CSS variables at your root
  tokens: {
    // width="$sm"
    size: { 
      xs: 4,
      sm: 8, 
      md: 12, 
      lg: 20,
      xl: 24,
      '2xl': 32,
      '3xl': 40,
      '4xl': 48,
      '5xl': 56,
      '6xl': 64,
    },
    // margin="$-sm"
    space: { 
      '-4xl': -64,
      '-3xl': -48,
      '-2xl': -32,
      '-xl': -24,
      '-lg': -20,
      '-md': -12,
      '-sm': -8,
      '-xs': -4,
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      13: 52,
      14: 56,
      15: 60,
      16: 64,
    },
    // radius="$none"
    radius: { 
      0: 0,
      1: 2,
      2: 3,
      3: 4,
      4: 6,
      5: 8,
      6: 12,
      7: 16,
      8: 24,
      9: 9999,
    },
    color: { 
      // Base colors
      white: '#FFFFFF',
      black: '#000000',
      
      // Theme colors
      primary: '#FFB800',
      text: '#171717',
      background: '#FFFFFF',
      tint: '#FFB800',
      icon: '#525252',
      tabIconDefault: '#525252',
      tabIconSelected: '#FFB800',
      error: '#FF3B30',
      info: '#007AFF',
      card: '#F5F5F5',
      border: '#E5E5E5',
      
      // Dark theme colors
      darkText: '#FAFAFA',
      darkBackground: '#171717',
      darkIcon: '#A3A3A3',
      darkTabIconDefault: '#A3A3A3',
      darkCard: '#262626',
      darkBorder: '#404040',
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
    },
  },

  themes: {
    light: {
      bg: '#FFFFFF',
      color: '#171717',
    },
    dark: {
      bg: '#171717',
      color: '#FAFAFA',
    },
  },

  // media query definitions can be used to style,
  // but also can be used with "groups" to do container queries by size:
  media: {
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  shorthands: {
    // <View px={20} />
    px: 'paddingHorizontal',
  },

  settings: {
    disableSSR: true, // for client-side apps gains a bit of performance
    allowedStyleValues: 'somewhat-strict-web', // if targeting only web
  },
})

// in other files use this:
console.log(`config is`, getConfig())

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
;

export default config;