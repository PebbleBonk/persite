import React from 'react'

import ProjectsSection from '../sections/projects'
import FeaturedSection from '../sections/featured'


const ContentOfProjects = () => {
    return (
        <React.Fragment>
            <FeaturedSection>
                <div                        
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease">
                    <h2>Featured projects</h2>
                    <p>These are some projects I could say I am proud of.</p>
                </div>
            </FeaturedSection>
            <ProjectsSection>
                <div                        
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease">
                    <h2>Misc. projects</h2>
                    <p>
                    These are some other projects I've worked on, which might not be so polished, 
                    but still worth checking out
                    </p>
                </div>
            </ProjectsSection>
        </React.Fragment>
    )
}


export default ContentOfProjects