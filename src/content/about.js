import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import layoutStyles from '../styles/layout.module.scss'


const ContentOfAbout = () => {
    return (
        <div                        
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease">
            <h2 className={layoutStyles.fadedIn}>An innovative software developer!</h2>
            <p>
                I come from eastern Finland, and am currently based in Espoo.<br/>
                I have a Master's degree in electrical engineering from Aalto University (FI) <br/>
                And I am passionate of many things, mainly: 
            </p>
            <ol>
                <li  data-sal="slide-right">Innovation</li>
                <li  data-sal="slide-right">Holism</li>
                <li  data-sal="slide-right">Data</li>
                <li  data-sal="slide-right">Visualisation</li>
            </ol>
        </div>
    )
}


export default ContentOfAbout