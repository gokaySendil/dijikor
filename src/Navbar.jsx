import React, { Component } from 'react';
import "./Navbar.css";
import logo from "./assets/logo.png";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      // <nav className='navbar'>
      //   <div className='nav-container'>
      //      <img className='logo' src={logo} alt='Sirket Logosu'/>
           
      //    <ul className= {`largerList ${isOpen ? "open" : "not-open"}`}>
      //     <li className='nav-link'> 
      //       <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}   to ="/"> Anasayfa </NavLink>
      //       </li>
      //     <li className='nav-link'> 
      //       <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}   to ="/hakkimizda"> Hakkımızda </NavLink>
      //       </li>
      //     <li className='nav-link'> 
      //       <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}   to ="/hizmetler"> Hizmetlerimiz </NavLink>
      //       </li>
      //     <li className='nav-link'> 
      //       <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")}   to ="/iletisim"> İletişim </NavLink>
      //       </li>
      //    </ul>
      //    <div className="nav-toggle" onClick={toggleMenu}>
      //     <span className="bar"></span>
      //     <span className="bar"></span>
      //     <span className="bar"></span>
      // </div>
      //   </div>
         
      // </nav>
      <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <img className='navbar-logo' src={logo} alt='Sirket Logosu'/>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#" className="active">Anasayfa</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Hizmetlerimiz</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </div>
    </nav>
    )
  
}

export default Navbar
