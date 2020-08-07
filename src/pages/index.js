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


// const imgsFlickr = [
//     'https://live.staticflickr.com/6006/5942800447_6e4822bebb_o_d.jpg',
//     'https://live.staticflickr.com/7142/6707293269_0361acd56c_o_d.jpg',
//     'https://live.staticflickr.com/7149/6708266797_77c096059d_o_d.jpg',
//     'https://live.staticflickr.com/5021/5600476618_92cdd80fd7_o_d.jpg',
//     'https://live.staticflickr.com/7026/6707277175_7aa2cc5f44_o_d.jpg',
//     'https://live.staticflickr.com/7004/6620515997_1c073ce689_o_d.jpg',
//     'https://live.staticflickr.com/6144/5942791055_5cb37613b2_o_d.jpg',
//     'https://live.staticflickr.com/6018/5942786393_29d58c64b8_o_d.jpg',
//     'https://live.staticflickr.com/6011/5942704051_9ae5457fc8_o_d.jpg',
//     'https://live.staticflickr.com/6016/5922083451_7492315f7b_o_d.jpg'
// ]



const IndexPage = () => {
//   const imgData = useStaticQuery(graphql`
//     query {
//       allFile(
//         filter: {
//           extension: {eq: "jpg"}
//         }) {
//         edges {
//           node {
//             name
//             extension
//             dir
//           }
//         }
//       }
//   }`)
//   console.log("IMGDATA", imgData)   

//   const imgLol = "C:/Users/Olli/Documents/01_Projects/PerSite/persite/static/img/OR-226.jpg"
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
console.log("IMGS", imgs)

  // Randomly select images for the sections:
  const img_idx = RandSet(0, imgs.length-1, 4)

  const sections = [
    {id: 'About', slug: 'about'},
    {id: 'Featured', slug: 'featured'},
    {id: 'Projects', slug: 'projects'},
    {id: 'Contact', slug: 'contact'}
  ]



  return (
      <Layout scrollRefs={sections}> 
        <Head title='Home'/>
        <div className="app">

          <Section title='' id='about' img={imgs[img_idx[0]]} style={sectionStyles.about} solid={sectionStyles.transparent}>
            <div className={layoutStyles.centered}>
              <div>

                <h2>Hello.</h2>
                <h3>I am Olli</h3>
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
            </div>

          </Section>

          <FeaturedSection title='Featured' id='featured' img={imgs[img_idx[1]]} style={sectionStyles.featured} solid={sectionStyles.solid}>
            <p>These are some projects I could say I am proud of.</p>
          </FeaturedSection>

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
  )
}


export default IndexPage