import toPlainText from '../utils/toPlainText'

export default {
  type: 'object',
  name: 'featuresSection',
  title: 'Features',
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
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          title: 'Feature',
          type: 'feature'
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
