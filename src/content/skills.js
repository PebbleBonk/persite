import React from 'react'


const SkillList = (props) => {
    return (
        <div style={{padding:"1rem", width: "230px", boxSizing: "border-box"}}
            data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            {props.children}
        </div>
    )
}

const ContentOfSkills = () => {
    return (
        <div style={{maxWidth: "527px"}}>
            <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                <p>
                    I have a Master's degree from <b>Aalto University</b> (FI), where I majored in <b>Control, Robotics and Autonomous systems.</b> <br/>
                    Additionally, I have work experience from multiple different industries and 
                    excel in learning new things - <b>fast</b>. 
                </p>
            </div>

            <div style={{display: "flex", flexWrap: "wrap"}}>
                <SkillList>
                        <b>Languages I am fluent in:</b>
                        <ul>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>R</li>
                            <li>Matlab</li>
                            <li>JavaScript</li>
                        </ul>
                </SkillList>

                <SkillList>
                    <b >Frameworks I've tinkered with:</b>
                    <ul>
                        <li>React</li>
                        <li>Gatsby</li>
                        <li>Tensorflow</li>
                        <li>Jupyter</li>
                        <li>Flask</li>
                        <li>Numpy/Pandas</li>
                    </ul>
                </SkillList>

                <SkillList>
                    <b>Tools I have discovered:</b>
                    <ul>
                        <li>Git</li>
                        <li>Bash</li>
                        <li>MongoDB</li>
                        <li>ROS</li>
                    </ul>
                </SkillList>

                <SkillList>
                    <b>Hardware I have played with:</b>
                    <ul>
                        <li>Raspberry Pi</li>
                        <li>Diddyborg</li>
                        <li>Arduino</li>
                        <li>FLIR cameras</li>
                    </ul>
                </SkillList>
            </div>
        </div>
    )
}

export default ContentOfSkills