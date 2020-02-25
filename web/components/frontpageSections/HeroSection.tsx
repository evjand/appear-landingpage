import Container from '../Container'
import CallToAction from '../CallToAction'
import { useContext, FC } from 'react'
import { ColorContext } from '../../context/color'
import useColor from '../../hooks/useColor'
import Color from 'color'
import useDarkMode from 'use-dark-mode'
import BlockContent from '@sanity/block-content-to-react'

const HeroSection: FC<{ heading: Array<any>; tagline: Array<any>; ctas: Array<any>; image: any }> = ({
  heading,
  tagline,
  ctas,
  image
}) => {
  console.log(ctas)
  const colors = useContext(ColorContext)
  const { value: darkMode } = useDarkMode()
  const colorFunc = Color(colors.primaryLight)
  const linkColor = useColor(colors.accentDefault)
  const backgroundColor = useColor(colors.primaryLight)

  const serializers = {
    types: {
      block: (props: any) => {
        return <span>{props.children}</span>
      }
    }
  }
  return (
    <section>
      <Container>
        <div className="hero">
          <h1>
            <BlockContent blocks={heading} serializers={serializers} />
          </h1>
          <BlockContent blocks={tagline} />
          <div className="cta">
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
      <style jsx>
        {`
          section {
            padding-bottom: 256px;
          }

          .hero {
            background: ${darkMode ? backgroundColor : colorFunc};
            width: calc(100% - 2rem);
            position: relative;
            padding: 4rem 6rem;
          }

          .hero::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 2rem;
            left: 2rem;
            border: 1px solid ${darkMode ? 'rgba(255,255,255,0.2)' : 'black'};
            z-index: -1;
          }

          h1 {
            margin: 0;
            font-size: 4rem;
            line-height: 4.5rem;
            max-width: 60%;
            margin-bottom: 1.5rem;
          }

          h1 :global(a) {
            color: ${linkColor.saturate(0.5)};
          }

          .hero :global(p) {
            font-size: 1.25rem;
            max-width: 55%;
            margin: 0;
          }

          .cta {
            padding-top: 2rem;
            display: flex;
            align-items: center;
            margin-left: -1rem;
          }

          .cta :global(a) {
            margin-left: 1rem;
          }

          img {
            width: 50%;
            height: auto;
            position: absolute;
            top: 3rem;
            right: 2rem;
          }
        `}
      </style>
    </section>
  )
}

export default HeroSection
