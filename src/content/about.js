import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faProjectDiagram, faChartBar, faEye }  from '@fortawesome/free-solid-svg-icons'
import { faRobot, faClock, faAtom }  from '@fortawesome/free-solid-svg-icons'
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
                            I like to work with things that are new: venturing to places which seem 
                            just out-of-reach and trying to find those real-life cheat codes are tasks 
                            that bring out the best in me.
                        </p>
                        <p>
                            Especially the following inspire me:
                        </p>
                    </div>
                    <div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faLightbulb}/>Innovation
                        </div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faProjectDiagram}/>Holism
                        </div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faEye}/>Visualisation
                        </div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faChartBar}/>Data
                        </div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faRobot}/>Automation
                        </div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faClock}/>Idling
                        </div>
                        <div className={layoutStyles.pillButton}>
                            <FontAwesomeIcon fixedWidth icon={faAtom}/>Details
                        </div>
                    </div>     
                </div>
            </div>
        </React.Fragment>
    )
}
   

export default ContentOfAbout