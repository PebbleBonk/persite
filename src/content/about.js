import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faProjectDiagram, faChartBar, faEye }  from '@fortawesome/free-solid-svg-icons'
import layoutStyles from '../styles/layout.module.scss'



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
            <div className={layoutStyles.circularPhoto}>
                <Img fluid={query.fileName.childImageSharp.fluid} alt="" />
            </div>
            <div>
                <div   
                    style={{
                        maxWidth: "450px",
                        paddingLeft:"3rem",
                        // paddingRight:"6rem"
                    }}                     
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
                        Expecially the following inspire me:
                    </p>
                </div>
                <ul className="fa-ul">
                    <li  data-sal="slide-righ" className={layoutStyles.pillButton}>
                        <FontAwesomeIcon fixedWidth icon={faLightbulb}/>  Innovation
                    </li>
                    <li  data-sal="slide-righ" className={layoutStyles.pillButton}>
                        <FontAwesomeIcon fixedWidth icon={faProjectDiagram}/>  Holism
                    </li>
                    <li  data-sal="slide-righ" className={layoutStyles.pillButton}>
                        <FontAwesomeIcon fixedWidth icon={faEye}/>  Visualisation
                    </li>
                    <li  data-sal="slide-righ" className={layoutStyles.pillButton}>
                        <FontAwesomeIcon fixedWidth icon={faChartBar}/>  Data
                    </li>
                </ul>     
            </div>
            </div>
        </React.Fragment>
    )
}
   

export default ContentOfAbout