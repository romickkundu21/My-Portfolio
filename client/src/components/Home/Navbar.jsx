import React from 'react';
// import logo from '../../assets/img/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="header ">
        {/* <div className="logo">
            <img src={logo} alt="" />
        </div> */}
        {/* <div className="logo_1">
            My Portfolio
        </div> */}
        <div className="navigation">
            <ul className="navbar ">
                <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                <a href="#About"><li className="nav__items mx__15">About</li></a>
                <a href="#Services"><li className="nav__items mx__15">Services</li></a>
                <a href="#Portfolio"><li className="nav__items mx__15">Portfolio</li></a>
                <a href="#Blog"><li className="nav__items mx__15">Blog</li></a>
                <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
