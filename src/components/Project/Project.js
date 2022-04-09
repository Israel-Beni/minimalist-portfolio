import React from 'react';
import './Project.css';
import { getData } from '../../api/api';
import { toTitleCase } from '../../utilities';

import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.swatchModels = this.swatchModels.bind(this);
    }

    swatchModels() {
        const data = this.state.data;
        if (data.length > 0) {
            const name = data[0].name;
            const image = data[0].images.portfolio.desktop;
            return this.props.model === 'thumbnail-first' ? (
                <div className="thumbnail-first Project-container">
                    <div className="thumbnail-container">
                        <img src="../../../images/portfolio/desktop/image-portfolio-minimalist-portfolio.jpg" alt="" />
                    </div>
                    <div className="info">
                        <h2>{toTitleCase(name)}</h2>
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
                        <img src="" alt="" />
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

    async componentDidMount() {
        this.setState({
        data: await getData()
        });
        console.log('getData\'s name from componentDidMount: ',  this.state.data[0].name);
    }

    async componentDidUpdate() {
         console.log('getData from componentDidUpdate: ',  this.state.data[0].name)
    }

    render() {
        return (
            <div className="Project">
                {console.log('in render: ', this.state.data[0])}
                {this.swatchModels()}
            </div>
        );
    }
};

export default Project;