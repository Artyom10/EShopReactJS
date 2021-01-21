import React from "react";
import NavAdminPanel from "./NavAdminPanel/NavAdminPanel";
import NavClientPanel from "./NavClientPanel/NavClientPanel";
import NavStartPanel from "./NavStartPanel/NavStartPanel";
import stylesFor from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Nav = (props) => {
  return (
    <nav className={` ${stylesFor.myNav} navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <div className={stylesFor.logo}>
            <span className={stylesFor.spanLogo}>E</span>Shop
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                Main page
              </NavLink>
            </li>
          </ul>
          {props.auth.uid ? (
            props.isWho === "admin" ? (
              <>
                <NavAdminPanel />
              </>
            ) : (
              <NavClientPanel />
            )
          ) : (
            <NavStartPanel />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
