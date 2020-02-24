import Link from 'next/link'
import { useRouter } from 'next/router'
import useDarkMode from 'use-dark-mode'
import React from 'react'
import Container from './Container'
import ArrowIcon from '@iconscout/react-unicons/icons/uil-arrow-right'
import CallToAction from './CallToAction'

import SunIcon from '@iconscout/react-unicons/icons/uil-sun'
import MoonIcon from '@iconscout/react-unicons/icons/uil-moon'

const Header = props => {
  const { title = 'Missing title', navItems, logo } = props
  const router = useRouter()
  const { value, toggle } = useDarkMode(false)
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
        <button onClick={toggle}>{value ? <SunIcon /> : <MoonIcon />}</button>
        <ul className="cta">
          <li className="try">
            <CallToAction
              variant="solid"
              variantColor="primaryDefault"
              size="small"
              href="https://console.appear.media/join"
            >
              Try for free
            </CallToAction>
          </li>
          <li className="signin">
            <a href="">
              Sign in <ArrowIcon />
            </a>
          </li>
        </ul>
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
          color: inherit;
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

        .cta :global(a) {
          font-size: 0.875rem;
          text-decoration: none;
          color: inherit;
          font-weight: 500;
        }

        .cta .signin {
          margin-left: 1rem;
        }

        .cta .signin a {
          display: flex;
          align-items: center;
        }

        .cta .signin a :global(svg) {
          margin-top: -2px;
        }

        .cta .signin a:hover,
        .main-menu a:hover {
          text-decoration: underline;
        }

        button {
          background: ${value ? '#333' : '#eee'};
          border-radius: 4px;
          padding: 0.5rem;
          position: fixed;
          border: none;
          outline: none;
          top: 2rem;
          right: 2rem;
          color: inherit;
          line-height: 1;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.67;
        }
      `}</style>
    </header>
  )
}

export default Header
