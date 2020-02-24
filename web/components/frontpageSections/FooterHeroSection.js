import Container from '../Container'

const FooterHeroSection = () => {
  return (
    <section>
      <Container>
        <div className="hero">
          <h1>Ready to join?</h1>
          <p>Absolutely free to get started. No credit card. No Spam. </p>
          <div className="cta">
            <a href="" className="cta-purple">
              Get started for free
            </a>
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          .hero {
            background: #f2f8ff;
            width: calc(100% - 2rem);
            position: relative;
            padding: 4rem 6rem;
            margin-bottom: 6rem;
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
            font-size: 3.5rem;
            margin-bottom: 0.5rem;
            text-align: center;
          }

          p {
            font-size: 1.25rem;
            margin: 0 auto;
            text-align: center;
            max-width: 600px;
          }

          .cta {
            padding-top: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
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
        `}
      </style>
    </section>
  )
}

export default FooterHeroSection
