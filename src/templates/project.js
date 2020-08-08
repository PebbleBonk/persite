import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'

import projectStyles from './project.module.scss'


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
    
const Project = (props) => {
    return (
        <Layout>
            <div className={projectStyles.article}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
        )
    }
    
export default Project