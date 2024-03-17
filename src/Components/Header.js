import React, { useState } from "react";
//import logo from "../logo.svg";
import PropTypes from "prop-types";
//import { useState } from "react";
import { Link } from "react-router-dom";
function Header(props) {
  // const redbBg = () => {};

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-${props.moode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} alt="Logo" className="w-100" /> */}
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <label className="me-5 pe-2">
            <input
              className="form-check-input"
              type="checkbox"
              id=""
              onClick={props.darkRedMode}
            />{" "}
            Dark Red Mode
          </label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="modebtn"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
              htmlFor="flexSwitchCheckChecked"
            >
              {props.btnText}
            </label>
          </div>

          {/* <form className="d-flex ms-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;

Header.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Set Logo title here",
  aboutText: "About Custom Link here",
};
