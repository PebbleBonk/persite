import React from 'react'
import { Link } from 'gatsby'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import headerStyles from './header.module.scss'
import sectionStyles from '../sections/sections.module.scss'

// from: https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
import { Link as ScrollLink } from "react-scroll";


const Header = (props) => {
    // const data = useStaticQuery(graphql`
    //     query { site { siteMetadata {
    //         title
    //         }
    //     }}
    // `)

    let scrollLinks;
    if (typeof props.scrollRefs !== 'undefined' ) {
        scrollLinks = props.scrollRefs.map(( {id, slug}) => {
            return (
                <li key={id}>
                    <ScrollLink className={headerStyles.navItem} activeClass={headerStyles.activeNavItem}
                                to={slug} spy={true} smooth={true} offset={-47} duration={500} >{id}
                    </ScrollLink>
                </li>
            )
        })
    }
    else {
        scrollLinks = null;
    }

    return (
        // Implementation without bootsrap:
        <header className={headerStyles.header}>
            {/* <h1 className={headerStyles.brand}>
                <Link className={headerStyles.title} to='/'>
                    {data.site.siteMetadata.title}
                </Link>
            </h1> */}
            <div className={headerStyles.brand}>

            <Link to="/" >
                <div className={sectionStyles.firstColumn} style={{backgroundColor: "inherit"}}></div>
                <div className={sectionStyles.transparentColumn} style={{backgroundColor: "rgba(255,255,255,0.2)"}}></div>
                <div className={sectionStyles.midColumn} style={{backgroundColor: "inherit"}}></div>
                <div className={sectionStyles.transparentColumn} style={{backgroundColor: "rgba(255,255,255,0.2)"}}></div>
                <div className={sectionStyles.firstColumn} style={{backgroundColor: "inherit"}}></div>
            </Link>
                <div className={sectionStyles.contentColumn} style={{backgroundColor: "inherit"}}></div>
            </div>
            <nav className={headerStyles.sections}>
                <ul className={headerStyles.navList}>
                    {scrollLinks}
                </ul>
            </nav>
        </header>


    )
}


export default Header