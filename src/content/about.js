import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faProjectDiagram, faChartBar, faEye }  from '@fortawesome/free-solid-svg-icons'
import layoutStyles from '../styles/layout.module.scss'

import { Parallax, Background } from 'react-parallax'

const ContentOfAbout = () => {
    const query = useStaticQuery(graphql`
        query {
            fileName: file(relativePath: { eq: "profile/itsame.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 640, maxHeight: 640) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <React.Fragment>
            <div className={layoutStyles.aboutContent}>
                <Parallax strength={50} className={layoutStyles.circularPhoto}>
                    <Background >
                        <div style={{width: '300px', height: '300px', top: '-50px', position:"relative"}} >
                            <Img fluid={query.fileName.childImageSharp.fluid} alt="" />
                        </div>
                    </Background>
                </Parallax>

                <div style={{
                            maxWidth: "450px",
                            paddingLeft:"3rem",
                            // paddingRight:"6rem"
                        }}  >
                    <div                      
                        // data-sal="slide-up"
                        // data-sal-delay="300"
                        data-sal-easing="ease">
                        <p>A broad-skilled software engineer!</p>
                        <p>
                            Originating from eastern Finland, and currently based in Espoo.
                        </p>
                        <p>
                            I like to work with things that are new: creating innovative solutions and trying to find
                            those real-life cheat codes are tasks that bring out the best in me.
                        </p>
                        <p>
                            Especially the following inspire me:
                        </p>
                    </div>
                    <div>
                        <div  data-sal="slide-righ" className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faLightbulb}/>  Innovation
                        </div>
                        <div  data-sal="sdivde-righ" className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faProjectDiagram}/>  Holism
                        </div>
                        <div  data-sal="sdivde-righ" className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faEye}/>  Visualisation
                        </div>
                        <div  data-sal="sdivde-righ" className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faChartBar}/>  Data
                        </div>
                    </div>     
                </div>
            </div>
        </React.Fragment>
    )
}
   

export default ContentOfAbout