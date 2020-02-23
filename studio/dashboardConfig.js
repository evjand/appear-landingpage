export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e526acbee454f2bd9f92e9a',
                  title: 'Appear Studio',
                  name: 'appear-studio',
                  apiId: 'b339988b-1948-4d01-99c0-ef4dcf5d8d4a'
                },
                {
                  buildHookId: '5e526b6cf91fc6cf286cbd8c',
                  title: 'Appear Landing Page',
                  name: 'appear-landingpage',
                  apiId: '485bb83a-b676-4b93-9df0-bfca1039c2f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evjand/appear-landingpage',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://appear-landingpage.netlify.com/',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    }
  ]
}
