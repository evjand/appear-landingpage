// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import feature from './objects/feature'

// Landing page sections
import heroSection from './sections/heroSection'
import demoSection from './sections/demoSection'
import gettingStartedSection from './sections/gettingStartedSection'
import featuresSection from './sections/featuresSection'

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
    portableText,
    route,
    simplePortableText,
    feature,
    siteConfig,
    heroSection,
    demoSection,
    gettingStartedSection,
    featuresSection
  ])
})
