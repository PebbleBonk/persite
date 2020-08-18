import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import Head from '../components/head'
import Section from '../sections/section'
import ProjectsSection from '../sections/projects'
import FeaturedSection from '../sections/featured'
import { RandSet } from '../utilities/utils'

import '../styles/index.scss'
import sectionStyles from '../sections/sections.module.scss'
import layoutStyles from '../styles/layout.module.scss'

// For hero scroll icon:
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Div100vh from 'react-div-100vh'
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
                            fluid (maxWidth: 1500 , maxHeight: 1500 ) {
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
                //   imgStyle={{ objectFit: 'contain' }}
                  style={{minHeight: '150vh'}}
                  alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                />
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
        <div className="app">
            <Section title='' id='hero' img={imgs[img_idx[0]]} solid={false} centered={true} height="" noTitle={true} noPadding={true}>
                <Div100vh>
                    <div className="hero">
                        <h1 className={layoutStyles.fadedIn}>Hello.</h1>
                        <h2 className={layoutStyles.fadedIn}>I am Olli</h2>
                    </div>

                    <ScrollLink to={'about'} spy={true} smooth={true} offset={-40} duration={800} >
                        <FontAwesomeIcon icon={faChevronDown} size="2x" className="hero-scroll"/>
                    </ScrollLink>
                </Div100vh>
            </Section>

            <Layout scrollRefs={sections}> 
                <Head title='Home'/>
                <div className="sectionsGrid">


                    
                    <Section title='About' id='about' img={imgs[img_idx[0]]} solid={true} height="half">
                        <div                        
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                            <h2 className={layoutStyles.fadedIn}>What do I do?</h2>
                            <p>
                                Lorem dolore mollit dolor aliqua eu nostrud quis laborum aliquip.<br/>
                                Incididunt officia fugiat cillum ullamco ad adipisicing cupidatat <br/>
                                qui deserunt do irure ad. Laboris ex qui labore duis Lorem tempor 
                            </p>
                            <ol>
                                <li  data-sal="slide-right">Coding</li>
                                <li  data-sal="slide-right">Finding</li>
                                <li  data-sal="slide-right">Design</li>
                            </ol>
                        </div>
                    </Section>

                    <Section title='What can I do?' id='skills' img={imgs[img_idx[2]]} solid={false} height="half">
                        <div                        
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                            <p>I like doing stuff. Different types of stuffs. </p>
                            <p>
                            Ut aliquip commodo mollit quis ad aliqua qui. 
                            </p>
                            <p>
                            Lorem dolore mollit dolor aliqua eu nostrud quis laborum aliquip.<br/>
                            Incididunt officia fugiat cillum ullamco ad adipisicing cupidatat <br/>
                            qui deserunt do irure ad. Laboris ex qui labore duis Lorem tempor 
                            </p>
                        </div>
                    </Section>
                
                    <Section title='Projects' id='projects' img={imgs[img_idx[2]]} style={sectionStyles.projects} solid={true}>
                        <FeaturedSection>
                            <div                        
                                data-sal="slide-up"
                                data-sal-delay="300"
                                data-sal-easing="ease">
                                <h2>Featured projects</h2>
                                <p>These are some projects I could say I am proud of.</p>
                            </div>
                        </FeaturedSection>
                        <ProjectsSection>
                            <div                        
                                data-sal="slide-up"
                                data-sal-delay="300"
                                data-sal-easing="ease">
                                <h2>Misc. projects</h2>
                                <p>
                                These are some other projects I've worked on, which might not be so polished, 
                                but still worth checking out
                                </p>
                            </div>
                        </ProjectsSection>
                    </Section>
                
                    <Section title='' id='contact' img={imgs[img_idx[3]]} solid={false} centered={true} height="nav-and-footer">
                        <div
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                            <h1 className={layoutStyles.fadedIn}>Contact</h1>
                            <h2 className={layoutStyles.fadedIn}>Wanna know me better?</h2>
                            <p className={layoutStyles.fadedIn}>Nice.</p>
                            <p className={layoutStyles.fadedIn}>Toss me a message at <Link to='/404'>myemail (a) contact.com</Link></p>
                        </div>
                    </Section>
                    <div style={{height:'5px', backgroundColor: '#2F2F2F'}}></div>
                </div>
            </Layout>
        </div>
    )
}
    
    
export default IndexPage