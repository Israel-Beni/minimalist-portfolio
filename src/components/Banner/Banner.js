import React from 'react';
import './Banner.css';

class Banner extends React.Component {

    // To deactivate the Home menu item when as soon as Banner is unmounted
    componentWillUnmount() {
        console.log('Hello from ComponentDidUpdate in Banner');
        this.props.deactivateHomeMenuItem('home');
    }
    render() {
        //const down_arrows = require('../../images/icons/down-arrows.svg');
        return (
            <section className="Banner" id="Banner">
                <div className="Banner_text">
                    <div className="hero_text">
                        <h1>Hey, I'm Israel Ben T. Degbe and I love building beautiful websites</h1>
                    </div>
                    <button className="Banner_button">
                        <a href="#AboutMe"></a>
                        <div className="image_container">
                            <div className="background_filler"></div>
                            <img src="../../../images/icons/down-arrows.svg" alt="down-arrows" />
                        </div>
                        <span>About Me</span>
                    </button>
                </div>
            </section>
        );
    }

};

export default Banner;