import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import ContentOfProjects from '../content/projects'

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
            <div className={projectsStyles.projects}>
                <Head title='Projects'/>
                <h1>Projects I have been crushing</h1>
                <div className={projectsStyles.content}>
                    <ContentOfProjects/>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage;