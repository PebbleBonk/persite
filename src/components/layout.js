import React from 'react'

import Footer from '../components/footer'


import layoutStyles from './layout.module.scss'

const Layout = (props) => {

    React.Children.map(props.children, child => console.log("CHILD", child))
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                {/* <Header/> */}
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout