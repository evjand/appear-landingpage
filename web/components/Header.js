import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Container from './Container'

const Header = props => {
  const { title = 'Missing title', navItems, logo } = props
  const router = useRouter()
  return (
    <header>
      <Container className="container">
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
        <nav className="main-menu">
          <ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="" data-active>
                Resources
              </a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </nav>
        <ul className="cta">
          <li className="try">
            <a href="">Try for free</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
        </ul>
        <nav>
          <ul>
            {navItems &&
              navItems.map(item => {
                const { slug, title, _id } = item
                const isActive = router.pathname === '/Home' && router.query.slug === slug.current
                return (
                  <li key={_id} className={styles.navItem}>
                    <Link
                      href={{
                        pathname: '/Home',
                        query: { slug: slug.current }
                      }}
                      as={`/${slug.current}`}
                      prefetch
                    >
                      <a data-is-active={isActive ? 'true' : 'false'}>{title}</a>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      </Container>
      <style jsx>{`
        header {
          padding: 4rem;
        }
        header :global(.container) {
          display: flex;
          align-items: center;
        }

        img {
          width: 48px;
          height: auto;
        }

        ul {
          list-style: none;
        }

        .main-menu {
          margin-left: 1rem;
          flex: 1 auto;
        }

        .main-menu ul {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0;
        }

        .main-menu li {
          margin-left: 2rem;
        }

        .main-menu a {
          font-size: 1.125rem;
          text-decoration: none;
          color: black;
          font-weight: 400;
        }

        .main-menu a[data-active] {
          font-weight: 500;
        }

        .cta {
          padding: 0;
          display: flex;
          align-items: center;
        }

        .cta a {
          font-size: 0.875rem;
          text-decoration: none;
          color: black;
          font-weight: 500;
        }

        .cta .try {
          padding: 0.5rem 1.5rem;
          background: #b4d4f9;
          border-radius: 4px;
          margin-right: 0.5rem;
        }
      `}</style>
    </header>
  )
}

export default Header
