import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faProjectDiagram, faChartBar, faEye }  from '@fortawesome/free-solid-svg-icons'
import layoutStyles from '../styles/layout.module.scss'


const ContentOfAbout = () => {
    return (
        <div                        
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease">
            <h2 className={layoutStyles.fadedIn}>An innovative software engineer!</h2>
            <p>
                I come from eastern Finland, and am currently based in Espoo.<br/>
                I have a Master's degree in electrical engineering from Aalto University (FI) <br/>
                And I am passionate of many things, mainly: 
            </p>
            <ul class="fa-ul">
                <li  data-sal="slide-right"><FontAwesomeIcon fixedWidth icon={faLightbulb}/>  Innovation</li>
                <li  data-sal="slide-right"><FontAwesomeIcon fixedWidth icon={faProjectDiagram}/>  Holism</li>
                <li  data-sal="slide-right"><FontAwesomeIcon fixedWidth icon={faChartBar}/>  Data</li>
                <li  data-sal="slide-right"><FontAwesomeIcon fixedWidth icon={faEye}/>  Visualisation</li>
            </ul>
        </div>
    )
}


export default ContentOfAbout