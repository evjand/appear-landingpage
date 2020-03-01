import groq from 'groq'
const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
    page-> {
        ...,
        content[] {
            ...,
            image {
                ...,
                asset->{extension, url}
            },
            beforeImage {
                ...,
                asset->{extension, url}
            },
            afterImage {
                ...,
                asset->{extension, url}
            },
            cta {
                ...,
                route->
            },
            ctas[] {
                ...,
                route->
            },
        }
    }
}`
export default pageQuery
