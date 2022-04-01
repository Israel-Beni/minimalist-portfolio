import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

import { NavLink, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownMenu: 'closed'
        }
        this.menuItems = {
            home: 'HOME',
            portfolio: 'PORTFOLIO',
            contact: 'CONTACT ME'
        }
        //this.handlePageChange = this.handlePageChange.bind(this); // sets this.state.page
        this.renderMenu = this.renderMenu.bind(this);
        this.toggleDropdownMenuState = this.toggleDropdownMenuState.bind(this);
        this.renderDropdownMenu = this.renderDropdownMenu.bind(this);
        this.toggleDropdownMenuDisplay = this.toggleDropdownMenuDisplay.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.activateRightMenuItem = this.activateRightMenuItem.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    toggleDropdownMenuState() {
        return this.state.dropdownMenu === 'open' ? this.setState({
            dropdownMenu: 'closed'
        }) : this.setState({
            dropdownMenu: 'open'
        })
    }

    renderDropdownMenu() {
        return this.state.dropdownMenu === 'open' ? (
                <svg onClick={this.handleMenuClick} xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                    <path fill="#33323D" fillRule="evenodd" d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"/>
                </svg>
            ) : (
                <svg onClick={this.handleMenuClick} xmlns="http://www.w3.org/2000/svg" width="24" height="13">
                    <g fill="#33323D" fillRule="evenodd">
                        <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                    </g>
                </svg>
            );
    }

    toggleDropdownMenuDisplay() {
        const navMenu = document.querySelector(' .navigation_menu');
        const firstOption = () => {
            navMenu.style.display = 'flex';
            navMenu.style.padding = '2.5rem 0';
            navMenu.style.height = '6.625rem';
        }

        const secondOption = () => {
            navMenu.style.padding = '0';
            navMenu.style.height = '0';
            navMenu.style.display = 'flex';
        }
        this.state.dropdownMenu === 'closed' ? firstOption() : secondOption();
    }

    handleMenuClick() {
        console.log(document.querySelector('.header .navigation_menu'));
        this.toggleDropdownMenuDisplay();
        this.toggleDropdownMenuState();
    }
    
    activateRightMenuItem(activeMenuItems, menuItemValue) {
        console.log(localStorage)
        activeMenuItems.push(menuItemValue);
        if (activeMenuItems.length >= 2) {
            console.log('array', activeMenuItems);
            document.addEventListener('readystatechange', event => {
                this.handlePageChange(menuItemValue)
            });
        }

    }

    handleRefresh() {
        
    }
    componentDidMount() {
        console.log('Hello from ComponentDidMount in Header component');
        this.props.activateHomeMenuItem('home');
    }

    renderMenu() {
        return Object.keys(this.menuItems).map( menuItem => {
            const menuItemValue = this.menuItems[menuItem];
            return <li  key={menuItemValue}
                        id={menuItemValue.toLowerCase()}>
                        <NavLink    to={`${menuItemValue.trim().replace(/ /, '-').toLowerCase()}`}
                                    activeclassname="active"
                                    >
                            {menuItemValue}
                        </NavLink>
                    </li>
        });
    }


    render() {
        return (
            <section className="header">
                <div className="logo_container">
                    <Link to='/home'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="separator"></div>
                <div className="icon_container">
                    {this.renderDropdownMenu()}
                </div>
                <ul className="navigation_menu">
                    {this.renderMenu()}
                </ul>
            </section>
        );
    }
};

export default Header;