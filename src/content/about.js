import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faProjectDiagram, faChartBar, faEye }  from '@fortawesome/free-solid-svg-icons'
import layoutStyles from '../styles/layout.module.scss'


const ContentOfAbout = () => {
    return (
        <React.Fragment>
            <div   
                style={{
                    maxWidth: "450px",
                    paddingLeft:"3rem",
                    // paddingRight:"6rem"
                }}                     
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease">
                <p>A broad-skilled software engineer!</p>
                <p>
                    Originating from eastern Finland, and currently based in Espoo.
                </p>
                <p>
                    I like to work with things that are new: creating innovative solutions and trying to find
                    those real-life cheat codes are tasks that bring the best out of me.
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
        </React.Fragment>
    )
}
   

export default ContentOfAbout