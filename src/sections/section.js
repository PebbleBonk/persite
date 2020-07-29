import React from 'react'
import { Parallax } from 'react-parallax'

import sectionStyles from '../sections/sections.module.scss'
// const ColorThief = require('colorthief');
import { usePalette } from 'react-palette';



const Section = (props) => {
    const { data } = usePalette(props.img)

    return (
        <Parallax  bgImage={props.img} strength={800} contentClassName={sectionStyles.parallax}>
        <div id={props.id} className={props.solid} style={{ backgroundColor: data.darkVibrant }}>

            <div className={sectionStyles.sectionBorder}></div>

            <div className={sectionStyles.section}>
                <div className={sectionStyles.firstColumn}></div>
                <div className={sectionStyles.transparentColumn}></div>
                <div className={sectionStyles.midColumn}></div>
                <div className={sectionStyles.transparentColumn}></div>
                
                <div className={sectionStyles.contentColumn}>
                    <div className={sectionStyles.content} style={{ backgroundColor: data.vibrant }}>
                        <h1>{props.title}</h1>
                        <br/>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>

            <div className={sectionStyles.sectionBorder}></div>
        </div>
     </Parallax>
    )
}


export default Section