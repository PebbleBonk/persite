import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

// Components:
import Layout from '../components/layout'
import Head from '../components/head'
import Section from '../sections/section'

// Utilities:
import { RandSet } from '../utilities/utils'

// Styles:
import '../styles/index.scss'
import sectionStyles from '../sections/sections.module.scss'
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import "prismjs/plugins/command-line/prism-command-line.css"
import  '../styles/prism.override.scss'

// Contents:
import Hero from '../content/hero'
import ContentOfAbout from '../content/about'
import ContentOfSkills from '../content/skills'
import ContentOfContact from '../content/contact'
import ContentOfProjects from '../content/projects'


const IndexPage = () => {
    const imD = useStaticQuery(graphql`
    query {
        allFile(
            filter: {
                extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                relativeDirectory: { eq: "background_images" }
            }
            ) {
                edges {
                    node {
                        base
                        publicURL
                        childImageSharp {
                            fluid (maxWidth: 1980 , maxHeight: 1980 ) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                        absolutePath
                    }
                }
            }
        }
    `)
        

    const imgs = imD.allFile.edges.map(image => {
        // return image.node.publicURL
         return <Img
                  fluid={image.node.childImageSharp.fluid}
                  style={{minHeight: '150vh'}}
                  alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                />
    })
    
    
    // Randomly select images for the sections:
    const img_idx = [4,0,0,0] //RandSet(0, imgs.length-1, 4)

    const sections = [
        {id: '', slug: 'home'},
        {id: 'About', slug: 'about'},
        {id: 'Skills', slug: 'skills'},
        {id: 'Projects', slug: 'projects'},
        {id: 'Contact', slug: 'contact'}
    ]


    return (
        <div className="app">
            <Section title='' id='hero' img={imgs[img_idx[0]]} solid={false} centered={true} height="" noTitle={true} noPadding={true}>
                <Hero/>
            </Section>

            <Layout scrollRefs={sections}> 
                <Head title='Home'/>
                <div className="sectionsGrid">

                    <Section title='Wait, who?' id='about' img={imgs[img_idx[0]]} solid={true} centered={true} height="half">
                        <ContentOfAbout/>
                    </Section>

                    <Section title='What can I do?' id='skills' img={imgs[img_idx[2]]} solid={false} centered={true} height="half">
                        <ContentOfSkills/>
                    </Section>
                
                    <Section title='Projects' id='projects' img={imgs[img_idx[2]]} style={sectionStyles.projects} centered={false} solid={true}>
                        <ContentOfProjects/>
                    </Section>
                
                    <Section title='' id='contact' img={imgs[img_idx[3]]} solid={false} centered={true} height="nav-and-footer">
                        <ContentOfContact/>
                    </Section>

                    {/* Hack:  */}
                    <div style={{height:'5px', backgroundColor: '#2F2F2F'}}></div>
                </div>
            </Layout>
        </div>
    )
}
    
    
export default IndexPage