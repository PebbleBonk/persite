import React from 'react'
import { Parallax, Background } from 'react-parallax'

import sectionStyles from '../sections/sections.module.scss'
import layoutStyles from '../styles/layout.module.scss'
// import Div100vh from 'react-div-100vh'
// import { usePalette } from 'react-palette';


const Section = (props) => {
    // const { data } = usePalette(props.img)
    const sectionColourStyle = {
        // backgroundColor: data.vibrant
    }
    const muted = 'transparent' //data.darkMuted;
    const baseStyle = (props.solid) ? (sectionStyles.solid) : (sectionStyles.transparent)
    const isCentered = (props.centered) ? (layoutStyles.centered) : ('');
    const noPadding = (props.noPadding) ? (sectionStyles.noPadSection) : (sectionStyles.paddedSection);
    let heightStyle;

    switch(props.height) {
        case "no-nav":
            heightStyle = sectionStyles.noNavBar;
            break;
        case "full":
            heightStyle = sectionStyles.fullHeight;
            break;
        case "half":
            heightStyle = sectionStyles.halfHeight;
            break;
        case "nav-and-footer":	
            heightStyle = sectionStyles.fullNavAndFooter;
            break;
        default:
            heightStyle = '';
    }

    let title;
    if (props.noTitle) {
        title = ''
    } else {
        title = <React.Fragment>
            <h1>{props.title}</h1>
            <br/>
        </React.Fragment>
    }
    return (
        <Parallax strength={300} className={sectionStyles.parallax}>
        <div id={props.id} className={baseStyle} style={sectionColourStyle}>


                <div className={`${sectionStyles.section}`}>
                    {/* <div className={sectionStyles.sectionBorder}></div> */}


                    <div className={`${sectionStyles.sectionWrapper} ${heightStyle}`}>
                        <div className={`${sectionStyles.sectionBackground}`}>
                            <div className={sectionStyles.firstColumn}></div>
                            <div className={sectionStyles.transparentColumn}></div>
                            <div className={sectionStyles.midColumn}></div>
                            <div className={sectionStyles.transparentColumn}></div>
                            <div className={sectionStyles.contentColumn}></div>
                        </div>


                        <div className={`${sectionStyles.sectionContent} ${isCentered} ${noPadding}`}> 
                            <div className={sectionStyles.content} style={{ backgroundColor: muted }}>
                                {title}
                                <div>
                                    {props.children}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <div className={sectionStyles.sectionBorder}></div> */}
                </div>


        </div>
        <Background >
            <div className={sectionStyles.blendImgWrapper} style={{width: '100vw', height: '200vh'}}>
                {props.img}
            </div>
            {/* <div className={sectionStyles.blendImgWrapper}>
                <img src={props.img} alt=""/>
            </div> */}
        </Background>
     </Parallax>
    )
}


export default Section