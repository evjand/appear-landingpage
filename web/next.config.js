const withTM = require('next-transpile-modules')(['@iconscout/react-unicons'])

const client = require('./client')
const query = `
{
  "routes": *[_type == "route"] {
    ...,
    disallowRobot,
    includeInSitemap,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
    },
    subpage->{
      _id,
      title,
      _createdAt,
      _updatedAt
    }
  }
}
`
const reduceRoutes = (obj, route) => {
  const { page = {}, slug = {} } = route
  const { _createdAt, _updatedAt } = page
  const { includeInSitemap, disallowRobot } = route
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  const pagePath = route['slug']['current'] === '/' ? '/Home' : '/Page'
  obj[path] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: pagePath
  }
  return obj
}

module.exports = withTM({
  poweredByHeader: false,
  exportPathMap: function() {
    return client.fetch(query).then(res => {
      const { routes = [] } = res
      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({ slug, page }) => slug.current && !!page).reduce(reduceRoutes, {})
      }
      return nextRoutes
    })
  }
})
