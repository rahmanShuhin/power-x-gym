import React from "react";
import "./Navigation.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  
  const add=()=>{
    const hamburger=document.querySelector(".hamburger-menu");
    const open=document.querySelector(".links__for__mobile");
    const body=document.querySelector("body");
    hamburger.classList.toggle("animate")
    open.classList.toggle("open");
    body.classList.toggle("no-scroll");
  }
  return (
    <div className="navigation__container">
      <nav className="nav">
        <Link className="nav__brand" to="/">POWER</Link>
        <div className="nav__links">
          <Link to="/">Home</Link>
          <Link>Services</Link>
          <Link>Our Classes</Link>
          <Link>About us</Link>
          <Link>Blog</Link>
          <Link>Pricing</Link>
          <Link>Contact Us</Link>
        </div>
        <div class="menu-wrapper" onClick={add}>
          <div class="hamburger-menu"></div>	  
        </div>
      </nav>
      <div className="links__for__mobile">
          <Link>Home</Link>
          <Link>Services</Link>
          <Link>Our Classes</Link>
          <Link>About us</Link>
          <Link>Blog</Link>
          <Link>Pricing</Link>
          <Link>Contact Us</Link>
      </div>
    </div>
  );
};

export default Navigation;
