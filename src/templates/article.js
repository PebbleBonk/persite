import React from 'react'

import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
            {/* <Link to="/#projects">Home</Link> */}
            <a href="/#projects">Home</a>
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

    // const websiteLink = (pageContext.website === "none") ? null : (
    //     <div className={articleStyles.repoLink}>
    //         <span>
    //             <FontAwesomeIcon icon={faExternalLinkAlt}/>
    //             <a href={pageContext.website}>{pageContext.website}</a>
    //         </span>
    //     </div>
    // )

    // Create links for the given websites:
    const projectLinks = (
        <React.Fragment>
            {pageContext.links.map((link) => {
                let linkIcon
                let linkSlug  // A bit hacky slug creations, could be nicer
                if (link.includes('github.com/')) {
                    linkIcon = faGithub
                    linkSlug = link.split("github.com/")[1]
                } else {
                    linkIcon = faExternalLinkAlt
                    linkSlug = link.split("://")[1]
                }

                return (
                    <div className={articleStyles.repoLink} key={linkSlug}>
                        <span>
                            <FontAwesomeIcon icon={linkIcon}/>
                            <a href={link}>{linkSlug}</a>
                        </span>
                    </div>
                )
            })}
        </React.Fragment>
    )
    


    return (
        <Layout>
            <div className={articleStyles.articleWrapper} >
                {navWrap}
                {/* <div className={articleStyles.navSeparator} id="article-content"/> */}
                
                <div className={articleStyles.article}>
                    <span  id="article-content">&nbsp;</span>
                    <Img className={articleStyles.coverImg} fluid={data.markdownRemark.frontmatter.cover.childImageSharp.fluid} alt={data.markdownRemark.frontmatter.title}/>
                    <h1>{data.markdownRemark.frontmatter.title}</h1>
                    <p className={articleStyles.date}>{data.markdownRemark.frontmatter.date}</p>
                    
                    {projectLinks}
                    {/* <div className={articleStyles.repoLink}>
                        <span>
                            <FontAwesomeIcon icon={faGithub}/>
                            <a href={pageContext.githubLInk}>{pageContext.slug}</a>
                        </span>
                    </div>
                    {websiteLink} */}
                    
                    <div className={articleStyles.content} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
                </div>

                {navWrap}
            </div>
        </Layout>
        )
    }
    
export default Article