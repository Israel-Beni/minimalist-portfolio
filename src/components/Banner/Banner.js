import React from 'react';
import './Banner.css';
import down_arrows from '../../images/icons/down-arrows.svg';

class Banner extends React.Component {
    render() {
        return (
            <div className="Banner" id="Banner">
                <div className="Banner_text">
                    <div className="hero_text">
                        <h1>Hey, I'm Israel Ben T. Degbe and I love building beautiful websites</h1>
                    </div>
                    <button className="Banner_button">
                        <a href="#AboutMe"></a>
                        <div className="image_container">
                            <div className="background_filler"></div>
                            <img src={down_arrows} alt="down-arrows" />
                        </div>
                        <span>About Me</span>
                    </button>
                </div>
            </div>
        );
    }

};

export default Banner;