import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import Container from './Container'
import BlockContent from '@sanity/block-content-to-react'
import styles from './Footer.module.css'

import PinIcon from '@iconscout/react-unicons/icons/uil-map-marker-alt'
import EnvelopeIcon from '@iconscout/react-unicons/icons/uil-envelope-alt'
import ExternalIcon from '@iconscout/react-unicons/icons/uil-external-link-alt'

interface FooterProps {
  navItems: Array<any>
  logo: any
  socials: Array<any>
  leftText: Array<any>
  rightText: Array<any>
}

const Footer: FC<FooterProps> = ({ navItems, logo, socials, leftText, rightText }) => {
  const router = useRouter()
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <section className={styles.top}>
          <Link
            href={{
              pathname: '/Home',
              query: {
                slug: '/'
              }
            }}
            as="/"
          >
            <a>
              <img src={logo.asset.url} alt={logo.title} />
            </a>
          </Link>
          <div className={styles.socials}>
            {socials.map(social => (
              <a key={social._key} href={social.url} target="_blank">
                <img src={social.icon.url} alt="" />
              </a>
            ))}
          </div>
        </section>
        <nav>
          {navItems.map(navList => (
            <ul key={navList._key}>
              <li>
                <h4>{navList.listTitle}</h4>
              </li>
              {navList.pages.map(page => {
                const { slug, displayName, _id } = page
                const isActive = router.pathname === '/Page' && router.query.slug === slug.current
                return (
                  <li key={_id}>
                    {page.page ? (
                      <Link
                        href={{
                          pathname: '/Page',
                          query: { slug: slug.current }
                        }}
                        as={`/${slug.current}`}
                      >
                        <a data-is-active={isActive ? 'true' : 'false'}>{displayName}</a>
                      </Link>
                    ) : (
                      <a key={_id} href={page.link} target="_blank">
                        {displayName} <ExternalIcon size="16px" />
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          ))}
          <ul>
            <li>
              <h4>Appear</h4>
            </li>
            <li className={styles.grid}>
              <PinIcon></PinIcon>Nedre slottsgate 8, Oslo, Norway
            </li>
            <li className={styles.grid}>
              <EnvelopeIcon></EnvelopeIcon>support@appear.media
            </li>
          </ul>
        </nav>
        <section className={styles.bottom}>
          <BlockContent blocks={leftText} />
          <BlockContent blocks={rightText} />
        </section>
      </Container>
    </footer>
  )
}

export default Footer
