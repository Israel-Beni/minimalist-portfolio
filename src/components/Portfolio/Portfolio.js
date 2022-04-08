import React from 'react';
import { Component } from 'react';
import './Portfolio.css';
import Project from '../Project/Project';

import { Routes, Route, useRouteMatch } from 'react-router-dom';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.model = 'thumbnail-last';
        this.swatchModels = this.swatchModels.bind(this);

    }

    // To deactivate the Home menu item when as soon as Banner is mounted
    componentDidMount() {
        console.log('Hello from ComponentDidMount in Portfolio');
        this.props.deactivateHomeMenuItem('home');
        console.log('this.props.path: ', this.props.path);
    }

    swatchModels() {
        console.log("this.props.match", this.props.match);
        return this.model === 'thumbnail-first' ? 'thumbnail-last' : 'thumbnail-first';
    }

    render() {
        return (
            <section className="Portfolio">
                <Routes>
                    <Route path="/" element={<Project model={this.swatchModels()} />} />
                </Routes>
            </section>
        );
    }
};

export default Portfolio;