import React from 'react';
import './Project.css';
import { getData } from '../../api/api';
import { toTitleCase } from '../../utilities';

import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.swatchModels = this.swatchModels.bind(this);
    }

    swatchModels() {
        const data = this.props.project;
        if (data) {
            const name = data.name;
            //const image = data[0].images.portfolio.desktop;
            const about = data.about;
            const imagePaths = data.images.portfolio;
            console.log("image", imagePaths);
            return this.props.model === 'thumbnail-first' ? (
                <div className="thumbnail-first Project-container">
                    <div className="thumbnail-container">
                        <img className="desktop" src={`${process.env.PUBLIC_URL}${imagePaths.desktop}`} alt={`${name}-thumbnail`} />
                        <img className="tablet" src={`${process.env.PUBLIC_URL}${imagePaths.tablet}`} alt={`${name}-thumbnail`} />
                        <img className="mobile" src={`${process.env.PUBLIC_URL}${imagePaths.mobile}`} alt={`${name}-thumbnail`} />
                    </div>
                    <div className="info">
                        <h2>{toTitleCase(name)}</h2>
                        <p className="description">
                            {about}
                        </p>
                        <button>
                            <Link to="/portfolio/manage"
                                style={{ textDecoration: "none", color: "#33323D"}}>
                                {"View Project".toUpperCase()}
                            </Link>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="thumbnail-last Project-container">
                    <div className="info">
                        <h2>Manage 2</h2>
                        <p className="description">
                            This project required me to build a fully responsive landing
                            page to the designs provided. I used HTLM5 along with CSS Grid
                            and JavaScript for the areas that required interactivity, such as the testimonial
                            slider.
                        </p>
                        <button>
                            <Link to="/portfolio/manage"
                                style={{ textDecoration: "none", color: "#33323D"}}>
                                {"View Project".toUpperCase()}
                            </Link>
                        </button>
                    </div>
                    <div className="thumbnail-container">
                        <img className="desktop" src={`${process.env.PUBLIC_URL}${imagePaths.desktop}`} alt={`${name}-thumbnail`} />
                        <img className="tablet" src={`${process.env.PUBLIC_URL}${imagePaths.tablet}`} alt={`${name}-thumbnail`} />
                        <img className="mobile" src={`${process.env.PUBLIC_URL}${imagePaths.mobile}`} alt={`${name}-thumbnail`} />
                    </div>
                </div>
            );
        } else if (data.length === 0) {
            return (
                <div className="loading">
                    <img src="../../../images/icons/icons8-spinner.gif" alt="" />
                </div>
            );
    }}

    componentDidMount() {
        console.log('Hello from ComponentDidMount in Portfolio');
        this.props.deactivateHomeMenuItem('home');
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