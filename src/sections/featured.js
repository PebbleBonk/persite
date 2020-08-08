import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import featuredStyles from './featured.module.scss'

const FeaturedSection = (props) => {
    const mddata = useStaticQuery(graphql`
    query {
        # (filter: {fileAbsolutePath: {regex: "/(featured)/"  }})
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        cover {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `) 

    return (
        <div>

            {props.children}

            <div className={featuredStyles.projectContainer}>

                {mddata.allMarkdownRemark.edges.map((edge) => {
                    const linkto = `/projects/${edge.node.fields.slug}`
                    
                    return (
                        
                            <Link to={linkto} className={featuredStyles.featured} key={edge.node.frontmatter.title}>
                        {/* <div className={featuredStyles.featured} key={edge.node.frontmatter.title}> */}
                            {/* <div> */}
                                    <Img
                                        fluid={edge.node.frontmatter.cover.childImageSharp.fluid}
                                        objectFit="cover"
                                        alt="A corgi smiling happily"
                                    />
                                {/* </div> */}
                                    <div className={featuredStyles.projectTag}>
                                        <h3>{edge.node.frontmatter.title}</h3>
                                        <p>{edge.node.frontmatter.date}</p>
                                    </div>
                                <div className={featuredStyles.overlay}></div>
                            </Link>
                        // </div>
                    )
                })}
            </div>  
        </div>
    )
}

export default FeaturedSection;