import { createContext } from 'react'

export enum variantColors {
  primaryDefault,
  primaryLight,
  primaryDark,
  accentDefault,
  accentLight,
  accentDark,
  black,
  white
}

export const colors: { [key: string]: string } = {
  primaryDefault: '#B4D4F9',
  primaryLight: '#F2F8FF',
  primaryDark: '#84B8F5',
  accentDefault: '#5C63AB',
  accentLight: '#8D90DD',
  accentDark: '#2F3676',
  black: '#000000',
  white: '#FFFFFF'
}

export const ColorContext = createContext(colors)
