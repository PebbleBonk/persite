import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import Section from '../sections/section'
import ProjectsSection from '../sections/projects'
import { RandSet } from '../utilities/utils'
import Header from '../components/header'

import '../styles/index.scss'
import sectionStyles from '../sections/sections.module.scss'


const imgs = [
  'https://live.staticflickr.com/6006/5942800447_6e4822bebb_o_d.jpg',
  'https://live.staticflickr.com/7142/6707293269_0361acd56c_o_d.jpg',
  'https://live.staticflickr.com/7149/6708266797_77c096059d_o_d.jpg',
  'https://live.staticflickr.com/5021/5600476618_92cdd80fd7_o_d.jpg',
  'https://live.staticflickr.com/7026/6707277175_7aa2cc5f44_o_d.jpg',
  'https://live.staticflickr.com/7004/6620515997_1c073ce689_o_d.jpg',
  'https://live.staticflickr.com/6144/5942791055_5cb37613b2_o_d.jpg',
  'https://live.staticflickr.com/6018/5942786393_29d58c64b8_o_d.jpg',
  'https://live.staticflickr.com/6011/5942704051_9ae5457fc8_o_d.jpg',
  'https://live.staticflickr.com/6016/5922083451_7492315f7b_o_d.jpg'
]



const IndexPage = () => {
  // Randomly select images for the sections:
  const img_idx = RandSet(0, imgs.length-1, 4)
  console.log(img_idx)

  const sections = [
    {id: 'About', slug: 'about'},
    {id: 'Featured', slug: 'featured'},
    {id: 'Projects', slug: 'projects'},
    {id: 'Contact', slug: 'contact'}
  ]

  return (
    <div>
      <Header scrollRefs={sections}/>
      <Layout>
        <div className="app">
          <Head title='Home'/>

          <Section title='About' id='about' img={imgs[img_idx[0]]} style={sectionStyles.about} solid={sectionStyles.transparent}>
            <h2>Hello.</h2>
            <h3>I am Olli, some weird pal</h3>
            <p>I like doing weird stuff. A lot of different types of weird stuff.</p>
          </Section>

          <Section title='Featured' id='featured' img={imgs[img_idx[1]]} style={sectionStyles.featured} solid={sectionStyles.solid}>
            <p>These are some projects I could say I am proud of.</p>
          </Section>

          <ProjectsSection title='Projects' id='projects' img={imgs[img_idx[2]]} style={sectionStyles.projects} solid={sectionStyles.transparent}>
            <p>
              These are some other projects I've worked on, which might not be so polished, 
              but still worth checking out
            </p>
          </ProjectsSection>

          <Section title='Contact' id='contact' img={imgs[img_idx[3]]} style={sectionStyles.contact} solid={sectionStyles.solid}>
            <h2>Wanna know me better?.</h2>
            <h3>Nice</h3>
            <p>Toss me a message at <Link to='/projects'>myemail (a) contact.com</Link></p>
          </Section>
        </div>
      </Layout>
    </div>
  )
}


export default IndexPage