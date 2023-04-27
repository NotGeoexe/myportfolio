import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/discord.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon4 from '../assets/img/youtube.svg';
import 'animate.css';
import navIcon5 from '../assets/img/instagram.svg';
import navIcon6 from '../assets/img/snapchat.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://instagram.com/geo_17727?igshid=ODM2MWFjZDg=" target="_blank"><img src={navIcon5} alt="Instagram" /></a>
                <a href="https://github.com/NotGeoexe"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://twitter.com/GeoThomas17727?t=iQk5VQNw0aZeTW7iWI0zJA&s=09" target="_blank"><img src={navIcon1} alt="Twitter" /></a>
                <a href="https://youtube.com/@geo17727" target="_blank"><img src={navIcon4} alt="Youtube" /></a>
                <a href="https://www.snapchat.com/add/geothomas17727?share_id=ANVCkUkT4lU&locale=en-IN " target="_blank"><img src={navIcon6} alt="Snapchat" /></a>
                </div>
            <p>Made with | @ Geo Thomas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
