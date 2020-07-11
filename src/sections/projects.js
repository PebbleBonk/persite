import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Section from '../sections/section'

import projectsStyles from './projects.module.scss'

const ProjectsSection = (props) => {
    const mddata = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
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
                            <Link to={linkto}>
                                <div>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

export default ProjectsSection;