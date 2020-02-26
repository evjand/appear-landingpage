import toPlainText from '../utils/toPlainText'

export default {
  type: 'object',
  name: 'gettingStartedSection',
  title: 'Getting Started',
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
      name: 'text',
      type: 'portableText',
      title: 'Getting started info'
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
