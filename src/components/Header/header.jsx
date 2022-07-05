import React from 'react';
import Logo from '../../assets/logo.svg';
import './header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-light bg-light">
                <img className="ms-2" src={Logo} width="160px" height="48px" alt="" />
        </nav>

    );
}
export default Header;