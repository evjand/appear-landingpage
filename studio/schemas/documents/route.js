import { MdLink } from 'react-icons/lib/md'

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  validation: Rule => Rule.custom((fields = {}) => !fields.page || !fields.link || 'Only one link type is allowed'),
  icon: MdLink,
  fieldsets: [
    {
      title: 'Link',
      name: 'link'
    }
  ],
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      name: 'displayName',
      type: 'string',
      title: 'Display name'
    },
    {
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      fieldset: 'link',
      to: [
        {
          type: 'page'
        },
        {
          type: 'subpage'
        }
      ]
    },
    {
      title: 'External link',
      name: 'link',
      type: 'url',
      fieldset: 'link'
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    }
  ],
  preview: {
    select: {
      displayName: 'displayName',
      slug: 'slug.current',
      link: 'link'
    },
    prepare({ displayName, slug, link }) {
      return {
        title: displayName,
        subtitle: link ? link : slug === '/' ? slug : `/${slug}`
      }
    }
  }
}
