import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'HOME',
            dropdownMenu: 'closed'
        }
        this.menuItems = {
            home: 'HOME',
            portfolio: 'PORTFOLIO',
            contact: 'CONTACT ME'
        }
        this.activateMenuItem = this.activateMenuItem.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this); // sets this.state.page
        this.renderMenu = this.renderMenu.bind(this);
        this.toggleDropdownMenuState = this.toggleDropdownMenuState.bind(this);
        this.renderDropdownMenu = this.renderDropdownMenu.bind(this);
        this.toggleDropdownMenuDisplay = this.toggleDropdownMenuDisplay.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
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

    toggleDropdownMenuState() {
        return this.state.dropdownMenu === 'open' ? this.setState({
            dropdownMenu: 'closed'
        }) : this.setState({
            dropdownMenu: 'open'
        })
    }

    renderDropdownMenu() {
        return this.state.dropdownMenu === 'open' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                    <path fill="#33323D" fillRule="evenodd" d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13">
                    <g fill="#33323D" fillRule="evenodd">
                        <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
                    </g>
                </svg>
            );
    }

    toggleDropdownMenuDisplay() {
        this.state.dropdownMenu === 'closed' ? 
            document.querySelector(' .navigation_menu').style.display = 'flex' : 
            document.querySelector(' .navigation_menu').style.display = 'none';
    }

    handleMenuClick() {
        console.log(document.querySelector('.header .navigation_menu '));
        this.toggleDropdownMenuDisplay();
        this.toggleDropdownMenuState();
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
                <div className="icon_container" onClick={this.handleMenuClick}>
                    {this.renderDropdownMenu()}
                </div>
                <ul className="navigation_menu">
                    {this.renderMenu()}
                </ul>
            </div>
        );
    }
};

export default Header;