/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const accentColor = '#FFB800'; // Bright yellow
const errorColor = '#FF3B30'; // Red
const infoColor = '#007AFF'; // Blue

export const colors = {
  light: {
    text: '#171717', // neutral-900
    background: '#FFFFFF', // white
    tint: accentColor,
    icon: '#525252', // neutral-600
    tabIconDefault: '#525252', // neutral-600
    tabIconSelected: accentColor,
    error: errorColor,
    info: infoColor,
    card: '#F5F5F5', // neutral-100
    border: '#E5E5E5', // neutral-200
  },
  dark: {
    text: '#FAFAFA', // neutral-50
    background: '#171717', // neutral-900
    tint: accentColor,
    icon: '#A3A3A3', // neutral-400
    tabIconDefault: '#A3A3A3', // neutral-400
    tabIconSelected: accentColor,
    error: errorColor,
    info: infoColor,
    card: '#262626', // neutral-800
    border: '#404040', // neutral-700
  },
};
