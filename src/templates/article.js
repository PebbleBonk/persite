import React from 'react'

import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

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
            }
            html
        }
    }
`
    
const Article = ({ data, pageContext }) => {
    console.log("MAMERU,", pageContext)
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
                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
            </div>
        </Layout>
        )
    }
    
export default Article