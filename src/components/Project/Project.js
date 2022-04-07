import React from 'react';
import './Project.css';
import { getData } from '../../api/api';

import portfolioImage from '../../images/portfolio/desktop/image-portfolio-manage.jpg'
import loading from '../../images/icons/icons8-spinner.gif'

import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.swatchModels = this.swatchModels.bind(this);
    }

     swatchModels() {
         const data = this.state.data;
        if (!data) {
        return this.props.model === 'thumbnail-first' ? (
            <div className="thumbnail-first Project-container">
                <div className="thumbnail-container">
                    <img src={portfolioImage} alt="" />
                </div>
                <div className="info">
                    <h2>{}</h2>
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
        } else {
            setTimeout( () => {
                    const portfolio = document.querySelector('.Portfolio');
                    console.log('portfolio: ', portfolio)
                    portfolio.innerHTML = `<div className="loading"><img src=${loading} alt="" /></div>`;
                    portfolio.style.width = '100px';portfolio.style.width = '100px';
                    portfolio.style.margin = 'auto';
                    
                    const image = document.querySelector('.Portfolio img');
                    image.style.width = '50px';
                    image.style.height = '50px';
                    

                    });

    }}

    async componentDidMount() { this.setState({
        data: await getData()
    });
        console.log('getData\'s name from componentDidMount: ',  this.state.data);
    }

    async componentDidUpdate() {
         console.log('getData from componentDidUpdate: ',  this.state.data)
    }

    render() {
        return (
            <div className="Project">
                {console.log(this.state.data[0])}
                {this.swatchModels()}
            </div>
        );
    }
};

export default Project;