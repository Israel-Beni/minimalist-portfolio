import React from 'react';
import './Project.css';
import { getData } from '../../api/api';
import { toTitleCase } from '../../utilities';

import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.swatchModels = this.swatchModels.bind(this);
        this.disableButton = this.disableButton.bind(this);
    }

    disableButton(demoLink) {
        return demoLink ? '' : "disable";
    }

    swatchModels() {
        const data = this.props.project;
        if (data) {
            const name = data.name;
            const about = data.about;
            const imagePaths = data.images.portfolio;
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
                        <button className={`${this.disableButton(data.urls.demo)}`}>
                            <a href={data.urls.demo}
                                style={{ textDecoration: "none", color: "#33323D"}}>
                                {"View Project".toUpperCase()}
                            </a>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="thumbnail-last Project-container">
                    <div className="info">
                        <h2>{toTitleCase(name)}</h2>
                        <p className="description">
                            {about}
                        </p>
                        <button className={`${this.disableButton(data.urls.demo)}`}>
                            <a href={data.urls.demo}
                                style={{ textDecoration: "none", color: "#33323D"}}>
                                {"View Project".toUpperCase()}
                            </a>
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
                    <img src={process.env.PUBLIC_URL + "/images/icons/icons8-spinner.gif"} alt="" />
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