import Container from '../Container'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="hero">
          <h1>
            Augmented Reality <br />- for <a href="">anyone</a>
          </h1>
          <p>Add the ability to dynamically change AR content in your app. It only takes minutes!</p>
          <div className="cta">
            <a href="" className="cta-purple">
              Get started for free
            </a>
            <a href="" className="cta-ghost">
              See an example
            </a>
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
            background: #f2f8ff;
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
            border: 1px solid black;
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
            color: #4527a0;
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
          }

          .cta a {
            text-decoration: none;
            border-radius: 4px;
            padding: 1rem 2rem;
          }

          .cta-purple {
            background: #4527a0;
            color: white;
          }

          .cta-ghost {
            background: transparent;
            color: black;
            border: 1px solid black;
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
