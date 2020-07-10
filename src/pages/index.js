import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Section from '../sections/section'
import ProjectsSection from '../sections/projects'

import sectionStyles from '../sections/sections.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className="app">
        <Head title='Home'/>

        <Section title='About' i_img={0} style={sectionStyles.about}>
          <h2>Hello.</h2>
          <h3>I am Olli, some weird pal</h3>
          <p>I like doing weird stuff. A lot of different types of weird stuff.</p>
        </Section>

        <Section title='Featured' i_img={1} style={sectionStyles.featured}>
          <h2>These are some projects I've been working on.</h2>
          <h3>Maybe some might interest you</h3>
          <p>Check out my latest <Link to='/projects'>projects</Link></p>
        </Section>

        <ProjectsSection title='Projects' i_img={2} style={sectionStyles.projects}>
          <h2>These are some projects I've been working on.</h2>
          <h3>Maybe some might interest you</h3>
          <p>Check out my latest <Link to='/projects'>projects</Link></p>
        </ProjectsSection>

        <Section title='Contact' i_img={3} style={sectionStyles.contact}>
          <h2>Wanna know me better?.</h2>
          <h3>Nice</h3>
          <p>Toss me a message at <Link to='/projects'>myemail (a) contact.com</Link></p>
        </Section>
      </div>
    </Layout>
  )
}


export default IndexPage