import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/twitter.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';
import navIcon4 from '../assets/img/youtube.svg';
import navIcon5 from '../assets/img/instagram.svg';
import navIcon6 from '../assets/img/snapchat.svg';
import { HashLink } from 'react-router-hash-link';

import headerImg from "../assets/img/header-img.svg";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={headerImg} alt="Header Img"/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              {/* <Nav.Link href="https://blog.nodexcapital.com" target="_blank" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>
              <Nav.Link href="https://stake.nodexcapital.com" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Stake</Nav.Link>
              <Nav.Link href="https://explorer.nodexcapital.com" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Explorer</Nav.Link>               */}
              <Nav.Link href="#testnet" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Games</Nav.Link>
              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Team</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://instagram.com/geo_17727?igshid=ODM2MWFjZDg=" target="_blank"><img src={navIcon5} alt="Instagram" /></a>
                <a href="https://github.com/NotGeoexe"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://twitter.com/GeoThomas17727?t=iQk5VQNw0aZeTW7iWI0zJA&s=09" target="_blank"><img src={navIcon1} alt="Twitter" /></a>
                <a href="https://youtube.com/@geo17727" target="_blank"><img src={navIcon4} alt="Youtube" /></a>
                <a href="https://www.snapchat.com/add/geothomas17727?share_id=ANVCkUkT4lU&locale=en-IN " target="_blank"><img src={navIcon6} alt="Snapchat" /></a>
                </div>
                </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
