import React from 'react'
import { Link } from 'gatsby'

import layoutStyles from '../styles/layout.module.scss'


const ContentOfContact = () => {
    return (
        <div data-sal="slide-up" data-sal-easing="ease" style={{maxWidth: "400px"}}>
                <h1  data-sal="slide-up" data-sal-easing="ease">Contact</h1>
                <h2  data-sal="slide-up" data-sal-easing="ease">Wanna know me better?</h2>
                <p  data-sal="slide-up" data-sal-easing="ease">Nice.</p>
                <p  data-sal="slide-up" data-sal-easing="ease">
                    You can find more information of my education and work experience on my
                    LinkedIn profile.
                </p>
                <p  data-sal="slide-up" data-sal-easing="ease">
                    If you want more details or are interested in discussing some project,
                    please toss me a message at <Link to='/404'>myemail (a) contact.com</Link>
                </p>
        </div>
    )
}


export default ContentOfContact