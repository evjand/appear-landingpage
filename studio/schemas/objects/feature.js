export default {
  title: 'Feature',
  name: 'feature',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'simplePortableText'
    },
    { title: 'Image', name: 'image', type: 'image' }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare({ title, description }) {
      return {
        title: `${title}`,
        subtitle: `${description}`
      }
    }
  }
}
