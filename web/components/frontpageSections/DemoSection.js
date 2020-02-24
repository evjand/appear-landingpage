import Container from '../Container'
import useColor from '../../hooks/useColor'
import { useContext } from 'react'
import { colorContext } from '../../context/color'

const DemoSection = () => {
  const { primaryLight } = useContext(colorContext)
  const circleColor = useColor(primaryLight)
  return (
    <Container>
      <div className="demo">
        <div className="grid">
          <div className="left">
            <div className="text">
              <h1>Unlimited possibilities</h1>
              <p>
                Appear lets you add, change and delete Augmented Reality scenes created with{' '}
                <a href="">Reality Composer </a>
                dynamically from our web dashboard.
              </p>
            </div>
            <div className="before">
              <div className="before-image">
                <img className="demo-image" src="/AppearDemoBefore.png" alt="" />
                <img className="striped-circle" src="/AppearStripedCircle.svg" alt="" />
              </div>
              <img className="arrow" src="/AppearArrow.svg" alt="" />
            </div>
          </div>
          <img src="/AppearDemoAfter.png" alt="" />
        </div>
      </div>
      <style jsx>
        {`
          .demo {
            width: 100%;
            position: relative;
          }

          h1 {
            margin: 0;
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1.25rem;
            margin: 0;
            font-weight: 400;
            line-height: 2rem;
            max-width: 80%;
          }

          .text {
            padding-left: 6rem;
          }

          .grid {
            display: grid;
            grid-template-columns: auto 400px;
            grid-gap: 6rem;
          }
          .left {
            display: flex;
            flex-direction: column;
          }

          .before {
            flex: 1 auto;
            display: flex;
            align-items: center;
          }

          .before-image {
            margin-left: 6rem;
            width: calc(100% - 12rem);
            display: block;
            position: relative;
            z-index: 1;
          }

          .before-image .demo-image {
            width: 100%;
            height: auto;
          }

          .before-image .striped-circle {
            position: absolute;
            bottom: -3rem;
            right: -2rem;
            transform: rotate(22.5deg);
            width: 6rem;
            height: auto;
          }

          .before-image::before {
            content: '';
            display: block;
            width: 18rem;
            height: 18rem;
            position: absolute;
            top: -3rem;
            left: -6rem;
            border-radius: 50%;
            background: ${circleColor};
            z-index: -1;
          }

          .before-image::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            border: 1px solid black;
            z-index: -1;
          }

          .arrow {
            transform: translateX(4rem);
          }
        `}
      </style>
    </Container>
  )
}

export default DemoSection
