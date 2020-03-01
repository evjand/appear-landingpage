export default {
  title: 'Navigation List',
  name: 'footerNavList',
  type: 'object',
  fields: [
    { title: 'List title', name: 'listTitle', type: 'string' },
    {
      title: 'Footer navigation items',
      name: 'pages',
      type: 'array',
      validation: Rule => [Rule.unique().error('You have duplicate menu items')],
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }]
        }
      ]
    }
  ]
}
