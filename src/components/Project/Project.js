import React from 'react';
import './Project.css';

import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.swatchModels = this.swatchModels.bind(this);
    }

    swatchModels() {
        return this.props.model === 'thumbnail-first' ? (
            <div className="Project">
                <div className="thumbnail-container">
                    <img src="" alt="" />
                </div>
                <div className="info">
                    <h2>Manage</h2>
                    <p>
                        This project required me to build a fully responsive landing
                        page to the designs provided. I used HTLM5 along with CSS Grid
                        and JavaScript for the areas that required interactivity, such as the testimonial
                        slider.
                    </p>
                    <button>
                        <Link to="/portfolio/manage">
                            {"View Project".toUpperCase()}
                        </Link>
                    </button>
                </div>
            </div>
        ) : console.log();
    }

    render() {
        return (
            <div className="Project">
                {this.swatchModels()}
            </div>
        );
    }
};

export default Project;