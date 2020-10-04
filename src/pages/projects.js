import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import ContentOfProjects from '../content/projects'

import projectsStyles from './projects.module.scss'

const ProjectsPage = () => {
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