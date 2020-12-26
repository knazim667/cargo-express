import React, { Component } from "react";
import Icon from "react-icons-kit";
import { box } from "react-icons-kit/feather/box";
import { NavLink } from "react-router-dom";
import { MENU_ITEMS } from "../../data";
import "./navigation.css";

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light gd-color">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <Icon icon={box} className="mr-1" size={20} />
              Cargo Express
            </NavLink>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                {MENU_ITEMS.map((item, index) => (
                  <li key={index} className="nav-item">
                    <NavLink className="nav-link" to={item.path}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;
