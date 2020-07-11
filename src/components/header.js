import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import headerStyles from './header.module.scss'

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

// from: https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
import { Link as scrollLink, animateScroll as scroll } from "react-scroll";


const Header = (props) => {
    const data = useStaticQuery(graphql`
        query { site { siteMetadata {
            title
            }
        }}
    `)
        console.log("SCROLLREFS", props.scrollRefs)
    return (
        // <header className={headerStyles.header}>


        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand as={Link} to="/">{data.site.siteMetadata.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {props.scrollRefs.map(( {id, slug}) => {
                    return (
                    <Nav.Link as={scrollLink} key={id} activeClass={headerStyles.activeNavItem} to={slug} spy={true} smooth={true} offset={0} duration={500} >{id}</Nav.Link>
                    )
                })}
                {/* <Nav.Link as={Link} to="#" onClick={()=>scrollToRef("Home")}>Home</Nav.Link>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link> */}
                {/* <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Projects</Link> */}

            </Nav>
            {/* <nav className={headerStyles.sections}>
                 <ul className={headerStyles.navList}>
                     <li>
                         <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                     </li>
                     <li>
                         <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Projects</Link>
                     </li>
                 </ul>
             </nav> */}
             </Navbar.Collapse>
        </Navbar>
        // </header>
        // <header className={headerStyles.header}>
        //     <h1 className={headerStyles.brand}>
        //         <Link className={headerStyles.title} to='/'>
        //         {data.site.siteMetadata.title}
        //         </Link>
        //     </h1>

        //     <nav className={headerStyles.sections}>
        //         <ul className={headerStyles.navList}>
        //             <li>
        //                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
        //             </li>
        //             <li>
        //                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Projects</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
    )
}


export default Header