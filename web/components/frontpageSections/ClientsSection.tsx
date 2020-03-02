import Container from '../Container'
import { FC } from 'react'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(client)

interface ClientsSectionProps {
  title: any
  subtitle: any
  clients: Array<any>
}

const ClientsSection: FC<ClientsSectionProps> = ({ title, subtitle, clients }) => {
  return (
    <section>
      <Container>
        <div className="text">
          <h1>
            <BlockContent
              blocks={title}
              serializers={{ types: { block: (props: any) => <span>{props.children}</span> } }}
            />
          </h1>
          <BlockContent blocks={subtitle} />
        </div>
        <div className="logos">
          {clients.map(client => (
            <img key={client._key} src={client.asset.url} alt="" />
          ))}
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows
        }
      `}</style>
    </section>
  )
}

export default ClientsSection
