import React from 'react'
import { Parallax, Background } from 'react-parallax'

import sectionStyles from '../sections/sections.module.scss'
import layoutStyles from '../styles/layout.module.scss'

// import { usePalette } from 'react-palette';


const Section = (props) => {
    // const { data } = usePalette(props.img)
    const sectionColourStyle = {
        // backgroundColor: data.vibrant
    }
    const muted = 'transparent' //data.darkMuted;
    const baseStyle = (props.solid) ? (sectionStyles.solid) : (sectionStyles.transparent)
    const isCentered = (props.centered) ? (layoutStyles.centered) : ('');
    let heightStyle;

    switch(props.height) {
        case "full":
            heightStyle = sectionStyles.fullHeight;
          break;
        case "half":
            heightStyle = sectionStyles.halfHeight;
          break;
        default:
            heightStyle = sectionStyles.fullHeight;
      }

    return (
        <Parallax strength={600} className={sectionStyles.parallax}>
        <div id={props.id} className={baseStyle} style={sectionColourStyle}>


                <div className={sectionStyles.section}>
                    <div className={sectionStyles.sectionBorder}></div>


                    <div className={sectionStyles.sectionWrapper}>
                        <div className={`${sectionStyles.sectionBackground} ${heightStyle}`}>
                            <div className={sectionStyles.firstColumn}></div>
                            <div className={sectionStyles.transparentColumn}></div>
                            <div className={sectionStyles.midColumn}></div>
                            <div className={sectionStyles.transparentColumn}></div>
                            <div className={sectionStyles.contentColumn}></div>
                        </div>


                        <div className={`${sectionStyles.sectionContent} ${isCentered}`}> 
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


        </div>
        <Background style={{width: '100%', height: '100%'}}>
            <div className={sectionStyles.blendImgWrapper}>
                <img src={props.img} alt=""/>
            </div>
        </Background>
     </Parallax>
    )
}


export default Section