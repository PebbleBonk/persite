import React from 'react'
import { Parallax, Background } from 'react-parallax'

import sectionStyles from '../sections/sections.module.scss'
import { usePalette } from 'react-palette';


const Section = (props) => {
    const { data } = usePalette(props.img)
    const vibrant = data.vibrant;
    const muted = 'transparent' //data.darkMuted;

    return (
        <Parallax strength={600} className={sectionStyles.parallax}>
        <div id={props.id} className={props.solid} style={{ backgroundColor: vibrant }}>

                <div className={sectionStyles.sectionBorder}></div>

                <div className={sectionStyles.section}>
                    <div className={sectionStyles.firstColumn}></div>
                    <div className={sectionStyles.transparentColumn}></div>
                    <div className={sectionStyles.midColumn}></div>
                    <div className={sectionStyles.transparentColumn}></div>
                    
                    <div className={sectionStyles.contentColumn}></div>

                    <div className={sectionStyles.container}>
                        <div className={sectionStyles.content} style={{ backgroundColor: muted }}>
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
        <Background style={{width: '100%', height: '100%'}}>
            <div style={{backgroundImage: `url(${props.img})`}} className={sectionStyles.blended}>
            </div> 
        </Background>
     </Parallax>
    )
}


export default Section