import React from 'react'

import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

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
                        fluid(maxWidth: 2048) {
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

    const navWrap = (
        <div className={articleStyles.navWrapper}>
        <div className={articleStyles.navPrev}>
            {prev && (
                <Link to={prev.path}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} /> {prev.title}
                </Link>
            )}
        </div>
        <div className={articleStyles.navBack}>
            <Link to="/#projects">Home</Link>
        </div>
        <div className={articleStyles.navNext}>
            {next && (
                <Link to={next.path}>
                    {next.title} <FontAwesomeIcon icon={faLongArrowAltRight} /> 
                </Link>
            )}
        </div>
    </div>
    )

    return (
        <Layout>
            <div className={articleStyles.articleWrapper}>
                {navWrap}
                <div className={articleStyles.navSeparator}/>
                <div className={articleStyles.article} id="article-content">
                    <Img className={articleStyles.coverImg} fluid={data.markdownRemark.frontmatter.cover.childImageSharp.fluid} alt={data.markdownRemark.frontmatter.title}/>
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                    <p className={articleStyles.date}>{data.markdownRemark.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
                </div>

                {navWrap}
            </div>
        </Layout>
        )
    }
    
export default Article