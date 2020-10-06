import React from 'react'
import { Link } from 'gatsby'


const ContentOfContact = () => {
    return (
        <div style={{maxWidth: "400px", paddingTop: "5rem"}}>
            <h1  data-sal="slide-up" data-sal-easing="ease">Contact</h1>
            <h2  data-sal="slide-up" data-sal-easing="ease">Wanna know me better?</h2>
            <p  data-sal="slide-up" data-sal-easing="ease">Nice.</p>
            <p  data-sal="slide-up" data-sal-easing="ease">
                You can find more information of my education and work experience on 
                my <strike><Link to="/404">LinkedIn</Link></strike> profile. More projects and source code you 
                can find in my <a href="https://github.com/pebblebonk">GitHub</a>.
            </p>
            <p  data-sal="slide-up" data-sal-easing="ease">
                If you want more details or are interested in discussing some project,
                please toss me a message at <strike><Link to='/404'>myemail(a)contact.com</Link></strike>
            </p>
        </div>
    )
}


export default ContentOfContact