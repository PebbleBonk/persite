import React from 'react'

import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <span><a href='https://github.com/pebblebonk/persite'><FontAwesomeIcon icon={faGithub} /> </a></span>
            <span>&copy; 2020 Olli Riikonen</span>
            <span><Link to='/501'><FontAwesomeIcon icon={faLinkedin} /> </Link></span>
        </footer>
    )
}


export default Footer