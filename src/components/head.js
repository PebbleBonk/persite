import React from 'react'
import { Helmet } from 'react-helmet'
// import { graphql, useStaticQuery } from 'gatsby'

const Head = ({title}) => {
    // const data = useStaticQuery(graphql`
    //     query { site { siteMetadata {
    //         title
    //         }
    //     }}
    // `)

    return (
        <Helmet title={`${title} ||`}>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        </Helmet>
    )
}

export default Head