import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1 className="h1">Sebastian Rodriguez</h1>
        <p>Buenos Aires -  Argentina </p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by"></div>
        <div className="sns-links">
          <a href="https://linkedin.com/in/sebastianrodriguez1495" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href=" mailto: seba.-14@hotmail.com" target="_blank" rel="noreferrer">
            <i className="fa fa-envelope twitter"></i>
          </a>
          <a href="https://www.instagram.com/sebitacasa" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a href="https://github.com/sebitacasa" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100006514925945" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
