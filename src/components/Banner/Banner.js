import React from 'react';
import './Banner.css';
import down_arrows from '../../images/icons/down-arrows.svg';

class Banner extends React.Component {
    render() {
        return (
            <div className="Banner">
                <div className="Banner_text">
                    <h1>Hey, I'm Israel Ben T. Degbe and I love building beautiful websites</h1>
                    <button className="Banner_button">
                        <img src={down_arrows} alt="down-arrows" />
                        <span>About Me</span>
                    </button>
                </div>
            </div>
        );
    }

};

export default Banner;