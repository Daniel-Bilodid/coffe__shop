import React from "react";
import "./footer.scss";
import logo from "../../assets/shared/desktop/logoWhite.png";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo-wrapper">
          <img src={logo} alt="logo" className="footer__logo" />

          <div className="footer__list-wrapper">
            <ul>
              <li className="footer__list-item">Home</li>
              <li className="footer__list-item">About us</li>
              <li className="footer__list-item">Create your plan</li>
            </ul>
          </div>
        </div>

        <ul className="footer__social-list">
          <li className="footer__social-item">
            <img src={facebook} alt="facebook" />
          </li>
          <li className="footer__social-item">
            <img src={twitter} alt="twitter" />
          </li>
          <li className="footer__social-item">
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
