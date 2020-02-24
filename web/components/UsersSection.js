import Container from './Container'

const UsersSection = () => {
  return (
    <section>
      <Container>
        <div className="text">
          <h1>Proud to be trusted by</h1>
          <p>
            We would love for you to <a href="">try Appear</a> as well
          </p>
        </div>
        <div className="logos">
          <img src="/logo1.png" alt="" />
          <img src="/logo2.png" alt="" />
          <img src="/logo3.png" alt="" />
        </div>
      </Container>
      <style jsx>{`
        section {
          padding: 6rem 0;
        }
        .text {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
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
        }

        .logos {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 4rem 0;
        }

        .logos img {
          max-height: 48px;
          width: auto;
          margin: 0 1rem;
        }
      `}</style>
    </section>
  )
}

export default UsersSection
