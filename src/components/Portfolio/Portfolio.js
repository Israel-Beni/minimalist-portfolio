import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {

    // To deactivate the Home menu item when as soon as Banner is mounted
    componentDidMount() {
        console.log('Hello from ComponentDidMount in Portfolio');
        this.props.deactivateHomeMenuItem('home');
    }

    render() {
        return (
            <section>
            </section>
        );
    }
};

export default Portfolio;