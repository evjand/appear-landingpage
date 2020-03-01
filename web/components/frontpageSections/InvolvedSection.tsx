import Container from '../Container'
import BrowserTemplate from '../BrowserTemplate'

const InvolvedSection = () => {
  return (
    <section>
      <div className="titles-container">
        <Container>
          <div className="titles">
            <h1>Get involved</h1>
            <p>A lot of the development of Appear is done in public, and you are of course welcome to get involved!</p>
          </div>
        </Container>
      </div>
      <div className="platforms">
        <div className="platform twitch">
          <Container>
            <div className="grid">
              <div className="image">
                <BrowserTemplate url="twitch.tv/purplteam">
                  <iframe
                    src="https://player.twitch.tv/?channel=purplteam&muted=true"
                    width="1280"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                  ></iframe>
                </BrowserTemplate>
              </div>
              <div className="text">
                <h3>We stream a lot of our development on Twitch!</h3>
                <p>
                  Come take a look at how a project like this is being built. Chat and interact with us and other
                  viewers.
                </p>
                <a href="https://twitch.tv/purplteam">twitch.tv/purplteam</a>
              </div>
            </div>
          </Container>
        </div>
        <div className="platform discord">
          <Container>
            <div className="grid">
              <div className="image">
                <BrowserTemplate url="discord.gg/vjWAPvC">
                  <iframe
                    src="https://discordapp.com/widget?id=544822662132793344&theme=dark"
                    width="350"
                    height="500"
                    allowTransparency
                    frameBorder="0"
                  ></iframe>
                </BrowserTemplate>
              </div>
              <div className="text">
                <h3>Continue the conversation on Discord!</h3>
                <p>This is where we all gather after the stream. Also a place to ask questions and get support.</p>
                <a href="https://discord.gg/vjWAPvC">discord.gg/vjWAPvC</a>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 6rem 0;
        }

        .titles-container {
          padding: 9rem 0;
          background: url('/AppearInvolvedPattern.png');
        }

        .titles {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: black;
        }

        .titles h1 {
          margin: 0;
          font-size: 3rem;
          margin-bottom: 1rem;
          line-height: 1;
          padding: 1rem 2rem;
          position: relative;
          z-index: 2;
          display: block;
          margin-bottom: 1.5rem;
          transform: translateX(-0.25rem);
        }

        .titles h1::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          z-index: -1;
          border: 1px solid black;
        }

        .titles h1::after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0rem;
          left: 0rem;
          z-index: -1;
          background: #fdba4e;
        }

        .titles p {
          font-size: 1.25rem;
          margin: 0;
          font-weight: 400;
          line-height: 2rem;
          background: #fdba4e;
          padding: 1rem 2rem;
        }

        .platform {
          width: 100%;
          padding: 7rem 0;
        }
        .platform:nth-of-type(even) .grid .text {
          grid-row: 1;
        }

        .platform .grid {
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
          color: white;
        }

        .text h3 {
          margin: 0;
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 3rem;
        }
        .text p,
        .text a {
          font-size: 1.5rem;
          line-height: 2.25rem;
          margin: 0;
        }
        .text a {
          margin: 1rem 0;
          color: white;
        }

        .twitch {
          background: #9146ff;
        }
        .discord {
          background: #7289da;
        }
      `}</style>
    </section>
  )
}

export default InvolvedSection
