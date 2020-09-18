import React from 'react'
import { Link } from 'gatsby'

import layoutStyles from '../styles/layout.module.scss'


const ContentOfContact = () => {
    return (
        <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease">
                <h1 className={layoutStyles.fadedIn}>Contact</h1>
                <h2 className={layoutStyles.fadedIn}>Wanna know me better?</h2>
                <p className={layoutStyles.fadedIn}>Nice.</p>
                <p className={layoutStyles.fadedIn}>Toss me a message at <Link to='/404'>myemail (a) contact.com</Link></p>
        </div>
    )
}


export default ContentOfContact