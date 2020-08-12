import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import Img from "gatsby-image"

import Layout from '../components/layout'
import Head from '../components/head'
import Section from '../sections/section'
import ProjectsSection from '../sections/projects'
import FeaturedSection from '../sections/featured'
import { RandSet } from '../utilities/utils'

import '../styles/index.scss'
import sectionStyles from '../sections/sections.module.scss'
import layoutStyles from '../styles/layout.module.scss'


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
                            fluid {
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
        return image.node.publicURL
        //  <Img
        //           fluid={image.node.childImageSharp.fluid}
        //           alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
        //         />
    })
    
    
    // Randomly select images for the sections:
    const img_idx = RandSet(0, imgs.length-1, 4)
    
    const sections = [
        {id: '', slug: 'home'},
        {id: 'About', slug: 'about'},
        {id: 'Skills', slug: 'skills'},
        {id: 'Projects', slug: 'projects'},
        {id: 'Contact', slug: 'contact'}
    ]

    return (
        <Layout scrollRefs={sections}> 
            <Head title='Home'/>
            <div className="app">
            
                <Section title='' id='home' img={imgs[img_idx[0]]} style={sectionStyles.about} 
                        solid={sectionStyles.transparent} contentStyle={layoutStyles.centered} heightStyle={sectionStyles.fullHeight}>
                
                    <h1 className={layoutStyles.fadedIn}>Hello.</h1>
                    <h2 className={layoutStyles.fadedIn}>I am Olli</h2>
                </Section>
                
                <Section title='About' id='about' img={imgs[img_idx[0]]} style={sectionStyles.about} 
                        solid={sectionStyles.solid} heightStyle={sectionStyles.halfHeight}>
                
                    <h1 className={layoutStyles.fadedIn}>Who am I?.</h1>
                    <h2 className={layoutStyles.fadedIn}>What do I do?</h2>
                    <p>
                        Lorem dolore mollit dolor aliqua eu nostrud quis laborum aliquip.<br/>
                        Incididunt officia fugiat cillum ullamco ad adipisicing cupidatat <br/>
                        qui deserunt do irure ad. Laboris ex qui labore duis Lorem tempor 
                    </p>
                    <ol>
                        <li>Coding</li>
                        <li>Finding</li>
                        <li>Design</li>
                    </ol>
                </Section>

                <Section title='What can I do?' id='skills' img={imgs[img_idx[2]]} style={sectionStyles.about} 
                        solid={sectionStyles.transparent} contentStyle={layoutStyles.centered} heightStyle={sectionStyles.halfHeight}>
                
                    <div className={layoutStyles.fadedIn}>
                        <p>I like doing stuff. Different types of stuffs. </p>
                        <p>
                        Ut aliquip commodo mollit quis ad aliqua qui. 
                        </p>
                        <p>
                        Lorem dolore mollit dolor aliqua eu nostrud quis laborum aliquip.<br/>
                        Incididunt officia fugiat cillum ullamco ad adipisicing cupidatat <br/>
                        qui deserunt do irure ad. Laboris ex qui labore duis Lorem tempor 
                        </p>
                        <p>  
                        quis ex sit consectetur in nostrud est ex. Ut enim elit incididunt<br/>
                        dolore deserunt exercitation. Ex adipisicing officia sint irure <br/>
                        nostrud esse pariatur dolor sit. Officia id cillum cillum <br/>
                        voluptate minim ipsum consequat.
                        </p>
                    </div>
                
                </Section>

                {/* <Section title='Featured' id='featured' img={imgs[img_idx[1]]} style={sectionStyles.featured} solid={sectionStyles.solid}>
                <FeaturedSection>
                <p>These are some projects I could say I am proud of.</p>
                </FeaturedSection>
                </Section> */}
            
                <Section title='Projects' id='projects' img={imgs[img_idx[2]]} style={sectionStyles.projects} solid={sectionStyles.solid}>
                    <FeaturedSection>
                        <h2>Featured projects</h2>
                        <p>These are some projects I could say I am proud of.</p>
                    </FeaturedSection>
                    <ProjectsSection>
                        <h2>Misc. projects</h2>
                        <p>
                        These are some other projects I've worked on, which might not be so polished, 
                        but still worth checking out
                        </p>
                    </ProjectsSection>
                </Section>
            
                <Section title='' id='contact' img={imgs[img_idx[3]]} style={sectionStyles.contact} 
                        solid={sectionStyles.transparent} contentStyle={layoutStyles.centered} heightStyle={sectionStyles.fullHeight}>
                    <div
                      data-sal="slide-up"
                      data-sal-delay="300"
                      data-sal-easing="ease">
                        <h1 className={layoutStyles.fadedIn}>Contact</h1>
                        <h2 className={layoutStyles.fadedIn}>Wanna know me better?</h2>
                        <p className={layoutStyles.fadedIn}>Nice.</p>
                        <p className={layoutStyles.fadedIn}>Toss me a message at <Link to='/projects'>myemail (a) contact.com</Link></p>
                    </div>
                </Section>
            </div>
        </Layout>
    )
}
    
    
export default IndexPage