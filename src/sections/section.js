import React from 'react'
import { Parallax } from 'react-parallax'

import sectionStyles from '../sections/sections.module.scss'
// const ColorThief = require('colorthief');



const imgs = [
    'https://live.staticflickr.com/6006/5942800447_6e4822bebb_o_d.jpg',
    'https://live.staticflickr.com/7142/6707293269_0361acd56c_o_d.jpg',
    'https://live.staticflickr.com/7149/6708266797_77c096059d_o_d.jpg',
    'https://live.staticflickr.com/5021/5600476618_92cdd80fd7_o_d.jpg'
 ]


const Section = (props) => {
    const img = imgs[props.i_img % imgs.length]


    // // Define the palette automatically
    // ColorThief.getPalette(img, 5)
    //     .then(palette => { console.log("Palette", palette) })
    //     .catch(err => { console.log("Err", err) })

    return (
        <Parallax bgImage={img} strength={600} contentClassName={sectionStyles.parallax}>
            <div className={`${props.style} ${sectionStyles.sectionBorder}`}></div>

            <div className={sectionStyles.section}>
                <div className={`${props.style} ${sectionStyles.firstColumn}`}></div>
                <div className={`${props.style} ${sectionStyles.transparentColumn}`}></div>
                <div className={`${props.style} ${sectionStyles.midColumn}`}></div>
                <div className={`${props.style} ${sectionStyles.transparentColumn}`}></div>
                
                <div className={`${props.style} ${sectionStyles.contentColumn}`}>
                    <h1>{props.title}</h1>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>

            <div className={`${props.style} ${sectionStyles.sectionBorder}`}></div>
        </Parallax>
    )
}

export default Section