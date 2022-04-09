import React from 'react';
import { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';
import { getData } from '../../api/api';

import { Routes, Route, useRouteMatch } from 'react-router-dom';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
        this.model = 'thumbnail-last';
        this.swatchModels = this.swatchModels.bind(this);
        this.renderProjects = this.renderProjects.bind(this);

    }

    // To deactivate the Home menu item when as soon as Banner is mounted
    componentDidMount() {
        console.log('Hello from ComponentDidMount in Portfolio');
        this.props.deactivateHomeMenuItem('home');
        console.log('this.props.path: ', this.props.path);
    }

    async componentDidMount() {
        this.setState({
            projects: await getData()
        });
        console.log('getData\'s name from componentDidMount: ',  this.state.projects[0].name);
    }

    async componentDidUpdate() {
         console.log('getData from componentDidUpdate: ',  this.state.projects[0].name)
    }

    swatchModels() {
        console.log("this.props.match", this.props.match);
        return this.model === 'thumbnail-first' ? 'thumbnail-last' : 'thumbnail-first';
    }

    renderProjects() {
        if (this.state.projects.length > 0) {
            return this.state.projects.map( project => {
                console.log("project.name:", project.name)
                return (
                    <li key={`${project.name}`}>
                        <Routes>
                            <Route path="/" element={<Project model={this.swatchModels()} project={project} deactivateHomeMenuItem={this.props.deactivateHomeMenuItem} />} />
                        </Routes>
                    </li>
                )
            });
        } else {
            return (
                <div className="loading">
                    <img src="../../../images/icons/icons8-spinner.gif" alt="" />
                </div>
            );
        }
    }

    render() {
        return (
            <section className="Portfolio">
                <ul>
                    {this.renderProjects()}
                </ul>
            </section>
        );
    }
};

export default Portfolio;