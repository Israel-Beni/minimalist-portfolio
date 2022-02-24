import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'HOME'
        }
        this.menuItems = {
            home: 'HOME',
            portfolio: 'PORTFOLIO',
            contact: 'CONTACT ME'
        }
        this.activateMenuItem = this.activateMenuItem.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this); // sets this.state.page
        this.renderMenu = this.renderMenu.bind(this);
    }

    activateMenuItem(menuItem) {
        return this.state.currentPage === menuItem ? 'active' : '';
    }

    handlePageChange(menuItem) {
        this.setState({
            currentPage: menuItem
        });
        this.props.changePage(menuItem);

    }

    renderMenu() {
        return Object.keys(this.menuItems).map( menuItem => {
            const menuItemValue = this.menuItems[menuItem];
            return <li  key={menuItemValue}
                        className={this.activateMenuItem(menuItemValue)}
                        onClick={ event => {
                            this.handlePageChange(menuItemValue)
                            }
                        }
                    >{menuItemValue}</li>;
        });
    }


    render() {
        return (
            <div className="header">
                <div className="logo_container">
                    <img src={logo} alt="logo" />
                </div>
                <div className="separator"></div>
                <ul className="navigation_menu">
                    {this.renderMenu()}
                </ul>
            </div>
        );
    }
};

export default Header;