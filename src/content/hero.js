import React from 'react'

import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Div100vh from 'react-div-100vh'

import layoutStyles from '../styles/layout.module.scss'


const Hero = () => {
    return (
        <Div100vh>
            <div className="hero">
                <h1 className={layoutStyles.fadedIn}>Hello.</h1>
                <h2 className={layoutStyles.fadedIn}>I am Olli</h2>
            </div>

            <ScrollLink to={'about'} spy={true} smooth={true} offset={-40} duration={800} >
                <FontAwesomeIcon icon={faChevronDown} size="2x" className="hero-scroll"/>
            </ScrollLink>
        </Div100vh>
    )
}


export default Hero