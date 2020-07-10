import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query { site { siteMetadata {
            author
            }
        }}
    `)

    return (
        <footer className={footerStyles.footer}>
            <span><a href='https://github.com/pebblebonk'><FontAwesomeIcon icon={faGithub} /></a></span>
            <span><a href='https://github.com/pebblebonk'><FontAwesomeIcon icon={faLinkedin} /></a></span>
            <span><a href='https://github.com/pebblebonk'><FontAwesomeIcon icon={faCopyright} /></a></span>
        </footer>
    )
}


export default Footer