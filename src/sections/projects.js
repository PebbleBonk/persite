import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

import Section from '../sections/section'

import projectsStyles from './projects.module.scss'

const ProjectsSection = (props) => {
    const mddata = useStaticQuery(graphql`
    query {
        # (filter: {fileAbsolutePath: {regex: "/(projects)/"}})
        allMarkdownRemark  {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        thumbnail {
                            name
                            childImageSharp {
                                fluid(maxWidth: 200) {
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

            <div className={projectsStyles.projects}>
                {mddata.allMarkdownRemark.edges.map((edge) => {
                    const linkto = `/projects/${edge.node.fields.slug}`

                    return (
                        <div className={projectsStyles.project} key={edge.node.frontmatter.title}>
                            <div>
                                <Img
                                    fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                                    objectFit="cover"
                                    alt="A corgi smiling happily"
                                />
                            </div>
                            <Link to={linkto}>
                                <div>
                                    <p>{edge.node.fields.slug}</p>
                                </div>
                            </Link>
                            <div className={projectsStyles.overlay}>
                                </div>
                        </div>
                    )
                })}
            </div>  
        </Section>
    )
}

export default ProjectsSection;