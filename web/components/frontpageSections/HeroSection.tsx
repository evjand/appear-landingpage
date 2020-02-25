import Container from '../Container'
import CallToAction from '../CallToAction'
import { useContext } from 'react'
import { ColorContext } from '../../context/color'
import useColor from '../../hooks/useColor'
import Color from 'color'
import useDarkMode from 'use-dark-mode'

const HeroSection = () => {
  const colors = useContext(ColorContext)
  const { value: darkMode } = useDarkMode()
  const colorFunc = Color(colors.primaryLight)
  const linkColor = useColor(colors.accentDefault)
  const backgroundColor = useColor(colors.primaryLight)
  return (
    <section>
      <Container>
        <div className="hero">
          <h1>
            Augmented Reality <br />- for <a href="">anyone</a>
          </h1>
          <p>Add the ability to dynamically change AR content in your app. It only takes minutes!</p>
          <div className="cta">
            <CallToAction href="https://console.appear.media/join" variantColor="#4527A0" desaturate={false}>
              Get started for free
            </CallToAction>
            <CallToAction variant="ghost" href="/" variantColor="black">
              See an example
            </CallToAction>
            <CallToAction variantColor
          </div>
          <img src="/AppearHeroImage.png" alt="" />
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

          h1 a {
            color: ${linkColor.saturate(0.5)};
          }

          p {
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
