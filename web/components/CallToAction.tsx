import { FC, useContext } from 'react'
import Color from 'color'
import useColor from '../hooks/useColor'
import { colorContext } from '../context/color'
import useDarkMode from 'use-dark-mode'

type Variants = 'solid' | 'ghost'

interface ICallToAction {
  /**
   * The style of the button
   */
  variant: Variants
  variantColor: string
  /**
   * The URL that should be opened when you click the button
   */
  href: string
  /**
   * The size of the button
   * @example
   * "small" | "large"
   */
  size: 'small' | 'large'
  color: string
}

const CallToAction: FC<ICallToAction> = ({
  children,
  variant = 'solid',
  variantColor = 'primaryDefault',
  href,
  size = 'large'
}) => {
  const { value: darkMode } = useDarkMode()
  const colors = useContext(colorContext)
  const colorFunc = useColor(colors[variantColor], true)
  return (
    <a href={href} className={`cta ${variant}`}>
      {children}
      <style jsx>{`
        .cta {
          text-decoration: none;
          border-radius: 4px;
          padding: ${size === 'large' ? ' 1rem 2rem' : ' 0.5rem 1.5rem'};
        }

        .solid {
          background: ${colorFunc};
          color: ${colorFunc.isLight() ? 'black' : 'white'};
        }

        .solid:hover {
          background: ${colorFunc.darken(0.2)};
        }

        .ghost {
          background: rgba(0, 0, 0, 0);
          color: ${darkMode ? colorFunc.negate() : colorFunc};
          border: 1px solid ${darkMode ? colorFunc.negate() : colorFunc};
        }

        .ghost:hover {
          background: ${darkMode ? colorFunc.negate().alpha(0.1) : colorFunc.alpha(0.1)};
        }
      `}</style>
    </a>
  )
}

export default CallToAction
