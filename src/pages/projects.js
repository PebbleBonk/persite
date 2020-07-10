import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import projectsStyles from './projects.module.scss'

const ProjectsPage = () => {
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
        <Layout>
            <Head title='Projects'/>
            <h1>This is the home of projects</h1>
            <ol className={projectsStyles.projects}>
                {mddata.allMarkdownRemark.edges.map((edge) => {
                    const linkto = `/projects/${edge.node.fields.slug}`
                    return (
                    <li className={projectsStyles.project} key={edge.node.frontmatter.title}>
                        <Link to={linkto}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ProjectsPage;