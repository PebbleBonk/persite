import React from 'react'

import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import articleStyles from './article.module.scss'

export const query = graphql`
    query ($slug: String)
    {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }) {
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
            html
        }
    }
`
    
const Article = ({ data, pageContext }) => {
    const { next, prev } = pageContext.navContext

    return (
        <Layout>
            <div className={articleStyles.navWrapper}>
                <div className={articleStyles.navPrev}>
                {prev && (
                    <Link to={prev.path}>
                    Previous: {prev.title}
                    </Link>
                )}
                </div>
                <div className={articleStyles.navBack}>
                    <Link to="/">Home</Link>
                </div>
                <div className={articleStyles.navNext}>
                {next && (
                    <Link to={next.path}>
                    Next: {next.title}
                    </Link>
                )}
                </div>
            </div>

            <div className={articleStyles.article}>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>{data.markdownRemark.frontmatter.date}</p>
                <Img fluid={data.markdownRemark.frontmatter.cover.childImageSharp.fluid} alt={data.markdownRemark.frontmatter.title}/>
                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            </div>
        </Layout>
        )
    }
    
export default Article