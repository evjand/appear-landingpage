import toPlainText from '../utils/toPlainText'

export default {
  type: 'object',
  name: 'clientsSection',
  title: 'Clients',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'simplePortableText'
    },
    {
      name: 'subtitle',
      type: 'simplePortableText',
      title: 'Subtitle'
    },
    {
      name: 'clients',
      type: 'array',
      title: 'Client logos',
      of: [
        {
          title: 'Logo',
          type: 'image',
          fields: [
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title, media }) {
      return {
        title: toPlainText(title),
        subtitle: 'Getting started section'
      }
    }
  }
}
