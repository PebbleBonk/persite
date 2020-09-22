import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import projectsStyles from './projects.module.scss'

const ProjectsSection = (props) => {
    const mddata = useStaticQuery(graphql`
    query {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(projects)/"}}) {
        # allMarkdownRemark  {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        thumbnail {
                            name
                            childImageSharp {
                                fixed(width: 55) {
                                    ...GatsbyImageSharpFixed
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

            <div className={projectsStyles.projects}>
                {mddata.allMarkdownRemark.edges.map((edge) => {
                    const linkto = `/projects/${edge.node.fields.slug}#article-content`
                    
                    return (
                            <Link to={linkto} className={projectsStyles.project} key={edge.node.frontmatter.title}
                            data-sal="slide-up" data-sal-duration="500" data-sal-easing="ease">
                                <Img fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed} alt=""/>

                                <div className={projectsStyles.projectTag}>
                                    <p>{edge.node.fields.slug}</p>
                                </div>
                                
                                <div className={projectsStyles.overlay}></div>
                            </Link>
                    )
                })}
            </div>  
        </div>
    )
}

export default ProjectsSection;