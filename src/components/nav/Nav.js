import { React, useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import iconClose from "../../assets/shared/mobile/icon-close.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const burgerStyles = {
    display: isOpen ? "block" : "none",
    transition: "opacity 0.3s ease",
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <img src={logo} alt="logo" className="nav__logo" />

        <div className="nav__list-wrapper">
          <ul className="nav__list-ul">
            <li className="nav__list-item">
              {" "}
              <Link to={"/"} className="nav__list-link">
                Home
              </Link>{" "}
            </li>
            <li className="nav__list-item">
              {" "}
              <Link to={"/about"} className="nav__list-link">
                About us
              </Link>
            </li>
            <li className="nav__list-item">
              {" "}
              <Link to={"/plan"} className="nav__list-link">
                Create your plan
              </Link>
            </li>
          </ul>

          <div className="nav__list-burger">
            <img
              onClick={handleToggle}
              src={iconHamburger}
              alt="iconHamburger"
            />
          </div>
        </div>
      </div>

      <div className="nav__burger" style={burgerStyles}>
        <div className="nav__burger-wrapper">
          <div className="nav__burger-logo">
            <img src={logo} alt="logo" className="nav__logo" />
          </div>

          <div className="nav__burger-close">
            <img
              onClick={handleToggle}
              className="close"
              src={iconClose}
              alt="iconClose"
            />
          </div>
        </div>

        <ul className="burger__list-ul">
          <li className="burger__list-item">
            {" "}
            <Link to={"/"} className="burger__list-link">
              Home
            </Link>{" "}
          </li>
          <li className="burger__list-item">
            {" "}
            <Link to={"/about"} className="burger__list-link">
              About us
            </Link>
          </li>
          <li className="burger__list-item">
            {" "}
            <Link to={"/plan"} className="burger__list-link">
              Create your plan
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
