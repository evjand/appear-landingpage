import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from './Container'

import PinIcon from '@iconscout/react-unicons/icons/uil-map-marker-alt'
import EnvelopeIcon from '@iconscout/react-unicons/icons/uil-envelope-alt'

const Footer = props => {
  const { title = 'Missing title', navItems, logo } = props
  const router = useRouter()
  return (
    <footer>
      <Container className="container">
        <section className="top">
          <Link
            href={{
              pathname: '/Home',
              query: {
                slug: '/'
              }
            }}
            as="/"
          >
            <a title={title}>
              <img src={logo.asset.url} alt={logo.title} />
            </a>
          </Link>
          <div className="socials">
            <a href="">
              <i className="cib-twitch"></i>
            </a>
            <a href="">
              <i className="cib-discord"></i>
            </a>
            <a href="">
              <i className="cib-facebook"></i>
            </a>
            <a href="">
              <i className="cib-instagram"></i>
            </a>
          </div>
        </section>
        <nav>
          <ul>
            <li>
              <h4>Product</h4>
            </li>
            <li>
              <a href="">Go to console</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Branding</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Developers</h4>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Open Source</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Resources</h4>
            </li>
            <li>
              <a href="">Help & Support</a>
            </li>
            <li>
              <a href="">Guidelines</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Status</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Appear</h4>
            </li>
            <li className="grid">
              <PinIcon></PinIcon>Nedre slottsgate 8, Oslo, Norway
            </li>
            <li className="grid">
              <EnvelopeIcon></EnvelopeIcon>support@appear.media
            </li>
          </ul>
        </nav>
        <section className="bottom">
          <p>
            Powered by <a href="">Sanity.io</a> & <a href="">Next.js</a>
          </p>
          <p>
            A <a href="">Purpl</a> product
          </p>
        </section>
      </Container>
      <style jsx>{`
        footer {
          padding: 9rem 0;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .socials a {
          margin-left: 2rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover  {
          text-decoration: underline;
        }

        i {
          font-size: 1.5rem;
        }

        nav {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 4rem;
          padding: 5rem 0;
        }

        ul {
          padding: 0;
          font-size: 1.25rem;
          list-style: none;
        }

        li {
          margin-bottom: 1rem;
          line-height: 1;
        }

        li.grid {
          display: grid;
          grid-template-columns: 3rem 1fr;
        }

        ul li:first-child {
          margin-bottom: 3rem;
        }

        h4 {
          font-weight: 500;
          line-height: 1;
          margin: 0;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .bottom a {
          font-weight: 500;
        }
      `}</style>
    </footer>
  )
}

export default Footer
