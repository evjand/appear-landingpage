import { FC, useContext, CSSProperties } from 'react'
import useColor from '../hooks/useColor'
import { variantColors, ColorContext } from '../context/color'
import useDarkMode from 'use-dark-mode'
import classnames from 'classnames'
import styles from './CallToAction.module.css'

type Variants = 'solid' | 'ghost'

interface ICallToAction {
  /**
   * The style of the button.
   * @example
   * solid | ghost
   * @default ghost
   */
  variant?: Variants
  /**
   * The style of the button.
   * @param {variantColors}
   * @default primaryDefault
   */
  variantColor?: string
  /**
   * The URL that should be opened when you click the button
   */
  href: string
  /**
   * The size of the button
   * @example
   * small | large
   * @default large
   */
  size?: 'small' | 'large'
  /**
   * Should the button be desaturated in dark mode
   * @default true
   */
  desaturate?: boolean
}

const CallToAction: FC<ICallToAction> = ({
  children,
  variant = 'solid',
  variantColor = 'primaryDefault',
  href,
  size = 'large',
  desaturate = true
}) => {
  const { value: darkMode } = useDarkMode()
  const colors = useContext(ColorContext)
  const colorString = colors[variantColor] || variantColor
  const colorFunc = useColor(colorString, desaturate)

  const cssVars = {
    ['--padding']: size === 'small' ? '0.5rem 1.5rem' : '1rem 2rem',
    ['--solid-background']: colorFunc,
    ['--solid-hover-background']: colorFunc.darken(0.2),
    ['--solid-color']: colorFunc.isLight() ? 'black' : 'white',
    ['--ghost-color']: darkMode ? colorFunc.negate() : colorFunc,
    ['--ghost-hover-background']: darkMode ? colorFunc.negate().alpha(0.1) : colorFunc.alpha(0.1)
  } as CSSProperties

  return (
    <a href={href} className={classnames(styles.cta, styles[variant], styles[size])} style={cssVars}>
      {children}
    </a>
  )
}

export default CallToAction
