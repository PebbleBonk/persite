import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const NotFound = () => {
    return (
        <Layout>
        <h1>It's not me you're looking for. Probably...</h1>
        <p><Link to='/'>Go home</Link></p>
      </Layout>
    )
}

export default NotFound