import Container from './Container'

const FeaturesSection = () => {
  return (
    <section>
      <Container>
        <div className="titles">
          <h1>Features</h1>
          <p>
            Our goal is to remove all the hard and tedious steps of adding AR content to an app. Here is what we can
            offer.
          </p>
        </div>
      </Container>
      <div className="features">
        <div className="feature">
          <Container>
            <div className="grid">
              <div className="image">
                <img src="/Feature1.png" alt="" />
              </div>
              <div className="text">
                <h3>Have multiple different projects</h3>
                <p>
                  Organize all your projects from the console. You can both invite people to your own projects and get
                  access to projects created by other people.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div className="feature">
          <Container>
            <div className="grid">
              <div className="image">
                <img src="/Feature2.png" alt="" />
              </div>
              <div className="text">
                <h3>Guided setup</h3>
                <p>All through the console you get wizards to help you set up the project the correct way.</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="feature">
          <Container>
            <div className="grid">
              <div className="image">
                <img src="/Feature3.png" alt="" />
              </div>
              <div className="text">
                <h3>Created to be used with Reality Composer</h3>
                <p>You can use the tools you already know, we just make the next part easier</p>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <style jsx>{`
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
          max-width: 600px;
        }

        .features {
          padding: 3rem 0;
        }

        .feature {
          width: 100%;
          padding: 7rem 0;
        }

        .feature:nth-of-type(odd) {
          background: #f2f8ff;
        }

        .feature:nth-of-type(even) .grid .text {
          grid-row: 1;
        }

        .feature .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 6rem;
        }

        .image img {
          width: 100%;
          height: auto;
        }

        .image,
        .text {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .text {
          text-align: left;
        }

        .text h3 {
          margin: 0;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 3rem;
        }
        .text p {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
      `}</style>
    </section>
  )
}

export default FeaturesSection
