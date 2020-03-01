import groq from 'groq'

export default groq`
*[_id == "global-config"][0]{
    frontpage -> {
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
            features[] {
                ...,
                image {
                    asset->{url, extension}
                }
            },
            clients[] {
                ...,
                asset->
            }
        }
    }
}`
