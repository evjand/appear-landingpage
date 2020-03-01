// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
import subpage from './documents/subpage'
// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import feature from './objects/feature'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import footerNavList from './objects/footerNavList'
// Landing page sections
import heroSection from './sections/heroSection'
import clientsSection from './sections/clientsSection'
import demoSection from './sections/demoSection'
import featuresSection from './sections/featuresSection'
import gettingStartedSection from './sections/gettingStartedSection'

// Subpage sections
import textSection from './objects/textSection'
import imageSection from './objects/imageSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    internalLink,
    link,
    page,
    subpage,
    portableText,
    route,
    simplePortableText,
    footerNavList,
    feature,
    textSection,
    imageSection,
    siteConfig,
    heroSection,
    demoSection,
    gettingStartedSection,
    featuresSection,
    clientsSection
  ])
})
