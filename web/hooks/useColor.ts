import Color from 'color'
import useDarkMode from 'use-dark-mode'

export default (color: string, desaturate: boolean = true) => {
  const { value: darkMode } = useDarkMode(false)
  const colorFunc = Color(color)
  const luminosity = colorFunc.luminosity()
  if (darkMode) {
    const colorLightnessAdjusted = colorFunc.isLight() ? colorFunc.darken(luminosity) : colorFunc.lighten(luminosity)
    return colorLightnessAdjusted.desaturate(desaturate ? 0.33 : 0)
  } else {
    return colorFunc
  }
}
