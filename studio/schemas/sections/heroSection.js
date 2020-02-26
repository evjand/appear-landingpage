import toPlainText from '../utils/toPlainText'

export default {
  type: 'object',
  name: 'heroSection',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'simplePortableText'
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title: toPlainText(title),
        subtitle: 'Hero section',
        media
      }
    }
  }
}
