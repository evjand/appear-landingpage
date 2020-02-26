import toPlainText from '../utils/toPlainText'

export default {
  type: 'object',
  name: 'demoSection',
  title: 'Demo',
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
      name: 'beforeImage',
      type: 'image',
      title: 'Image: Before'
    },
    {
      name: 'afterImage',
      type: 'image',
      title: 'Image: After'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'afterImage'
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
