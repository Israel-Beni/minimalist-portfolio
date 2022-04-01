import React from 'react';
import './Banner.css';
import down_arrows from '../../images/icons/down-arrows.svg';

import { Link } from 'react-router-dom';

class Banner extends React.Component {

    // To deactivate the Home menu item when as soon as Banner is unmounted
    componentWillUnmount() {
        console.log('Hello from ComponentDidUpdate in Banner');
        this.props.deactivateHomeMenuItem('home');
    }
    render() {
        return (
            <section className="Banner" id="Banner">
                <div className="Banner_text">
                    <div className="hero_text">
                        <h1>Hey, I'm Israel Ben T. Degbe and I love building beautiful websites</h1>
                    </div>
                    <button className="Banner_button">
                        <Link to="#AboutMe"></Link>
                        <div className="image_container">
                            <div className="background_filler"></div>
                            <img src={down_arrows} alt="down-arrows" />
                        </div>
                        <span>About Me</span>
                    </button>
                </div>
            </section>
        );
    }

};

export default Banner;