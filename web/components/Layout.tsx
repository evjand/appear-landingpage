import { LogoJsonLd } from 'next-seo'
import React, { FC } from 'react'
import Header from './Header'

import Footer from './Footer'

const Layout: FC<{ config: any }> = ({ config, children, ...rest }) => {
  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }
  const {
    title,
    mainNavigation,
    footerNavigation,
    logo,
    url,
    footerSocials,
    footerTextLeft,
    footerTextRight,
    footerLogo
  } = config
  const logoUrl = logo && logo.asset && logo.asset.url

  return (
    <div className="container" {...rest}>
      <Header navItems={mainNavigation} logo={logo} />
      <div className="content">{children}</div>
      <Footer
        navItems={footerNavigation}
        socials={footerSocials}
        leftText={footerTextLeft}
        rightText={footerTextRight}
        logo={footerLogo}
      />
      {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
    </div>
  )
}

export default Layout
