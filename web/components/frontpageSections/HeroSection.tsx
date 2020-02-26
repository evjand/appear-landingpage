import Container from '../Container'
import CallToAction from '../CallToAction'
import { useContext, FC, CSSProperties } from 'react'
import { ColorContext } from '../../context/color'
import useColor from '../../hooks/useColor'
import Color from 'color'
import useDarkMode from 'use-dark-mode'
import BlockContent from '@sanity/block-content-to-react'

import styles from './HeroSection.module.css'

const HeroSection: FC<{ heading: Array<any>; tagline: Array<any>; ctas: Array<any>; image: any }> = ({
  heading,
  tagline,
  ctas,
  image
}) => {
  const colors = useContext(ColorContext)
  const { value: darkMode } = useDarkMode()
  const colorFunc = Color(colors.primaryLight)
  const linkColor = useColor(colors.accentDefault)
  const backgroundColor = useColor(colors.primaryLight)

  const cssVars = {
    ['--background-color']: darkMode ? backgroundColor : colorFunc,
    ['--link-color']: linkColor.saturate(0.5)
  } as CSSProperties

  const serializers = {
    types: {
      block: (props: any) => {
        return <span>{props.children}</span>
      }
    }
  }
  return (
    <section className={styles.section} style={cssVars}>
      <Container>
        <div className={styles.hero}>
          <h1>
            <BlockContent blocks={heading} serializers={serializers} />
          </h1>
          <BlockContent blocks={tagline} />
          <div className={styles.cta}>
            {ctas.map((cta: any) => (
              <CallToAction
                key={cta._key}
                href={cta.route ? cta.route.slug.current : cta.link}
                variant={cta.variant}
                variantColor={cta.variantColor?.hex}
                desaturate={cta.desaturate}
              >
                {cta.title}
              </CallToAction>
            ))}
          </div>
          <img src={image.asset.url} alt="" />
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
