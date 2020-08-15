import React from 'react'

import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <span><a href='https://github.com/pebblebonk'><FontAwesomeIcon icon={faGithub} /> </a></span>
            <span><Link to='/404'><FontAwesomeIcon icon={faLinkedin} /> </Link></span>
            <span><Link to='/404'><FontAwesomeIcon icon={faCopyright} /> </Link></span>
        </footer>
    )
}


export default Footer