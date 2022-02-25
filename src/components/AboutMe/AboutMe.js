import React from 'react';
import './AboutMe.css';
import profileImage from '../../images/homepage_profile.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="AboutMe" id="AboutMe">
                <div className="image_container">
                    <img src={profileImage} alt="profile" />
                </div>
                <div className="info">
                    <h2>About Me</h2>
                    <p className="description">
                        I'm a junior front-end developer looking for a new role in an exciting 
                        company. I focus on writing accessible HTML, using modern CSS practices 
                        and writing clean JavaScript. When writing JavaScript code, I mostly use 
                        React, but I can adapt to whatever tools are required. I'm based in Chandigarh,
                        India, but I'm happy to working remotely and have experience in remote teams. However,
                        I'm open to relocating since I prefer working physically. When I'm not coding, you'll find me 
                        playing guitar or piano, and sometimes writing poems or songs. I love traveling and being out in nature whether that's 
                        going for a walk, contemplating the nature; I also appreciate being alone. I'd love you to 
                        check out my work.
                    </p>
                </div>
            </div>
        );
    }
};

export default AboutMe;

