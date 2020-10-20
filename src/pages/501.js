import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import layoutStyles from '../styles/layout.module.scss'
import animationStyles from '../styles/animation.module.scss'

const NotFound = () => {

  const fofStyle = {
      wrapper: {
        height: '200px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
  }
    return (
        <Layout>
            <div className={layoutStyles.fullScreen}>
                <h1>501</h1>
                <h3 style={{width: "50vw", textAlign: "center"}}>Hi! I am a page, link or other feature that has not been implemented yet.</h3>
                <p style={{width: "50vw", textAlign: "center"}}>Thank you for finding me. Come back later to check if I am still here!</p>
                {/* <br></br>
                <h1>||</h1> */}
                <Link to='/' style={fofStyle.wrapper}>
                    <h1 className={animationStyles.colorFading}>||</h1>
                    {/* <br/> */}
                    Go home
                </Link>
            </div>
      </Layout>
    )
}

export default NotFound