import React from 'react'


const ContentOfSkills = () => {
    return (
        <div>
            <div 
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                <p>
                I have a Master's degree from <b>Aalto University</b> (FI), where I majored in <b>Control, Robotics and Autonomous systems.</b> <br/>
                    Additionally, I have work experience from multiple different industries and 
                    excel in learning new things - <b>fast</b>. 
                </p>
            </div>

            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div style={{padding:"1rem"}}>
                    <b>Languages I am comfortable with:</b>
                    <ul>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>C#</li>
                        <li>R</li>
                        <li>Matlab</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <div style={{padding:"1rem"}}
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                    <b >Frameworks I've been tinkering with:</b>
                    <ul>
                        <li>React</li>
                        <li>Gatsby</li>
                        <li>Tensorflow</li>
                        <li>Jupyter</li>
                        <li>Flask</li>
                        <li>Numpy/Pandas</li>
                    </ul>
                </div>

                <div style={{padding:"1rem"}}
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                    <b>Tools I have discovered:</b>
                    <ul>
                        <li>Git</li>
                        <li>Bash</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>ROS</li>
                        <li>Raspberry Pi</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContentOfSkills