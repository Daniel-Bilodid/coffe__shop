import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__wrapper">
        <img src={logo} alt="logo" className="nav__logo" />

        <div className="nav__list-wrapper">
          <ul>
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
