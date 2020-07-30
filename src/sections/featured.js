import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import Section from '../sections/section'

import featuredStyles from './featured.module.scss'

const FeaturedSection = (props) => {
    const mddata = useStaticQuery(graphql`
    query {
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
        <Section title={props.title} id={props.id} img={props.img} style={props.style} solid={props.solid} >
            {props.children}

            <div className={featuredStyles.container}>
                {mddata.allMarkdownRemark.edges.map((edge) => {
                    const linkto = `/projects/${edge.node.fields.slug}`
                    
                    return (
                        <div className={featuredStyles.featured} key={edge.node.frontmatter.title}>
                            <div>
                                <Img
                                    fluid={edge.node.frontmatter.cover.childImageSharp.fluid}
                                    objectFit="cover"
                                    alt="A corgi smiling happily"
                                />
                            </div>
                            <Link to={linkto}>
                                <div>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    <p>{edge.node.frontmatter.date}</p>
                                </div>
                            </Link>
                            <div className={featuredStyles.overlay}>
                                </div>
                        </div>
                    )
                })}
            </div>  
        </Section>
    )
}

export default FeaturedSection;