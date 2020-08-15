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
                <h1>404</h1>
                <h3>It's not me you're looking for. Probably...</h3>
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