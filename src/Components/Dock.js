import React, { Component } from "react";
import Dock from "react-dock";
import WorkButton from "../Components/WorkButton";
import EmailButton from "./EmailButton";

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="topbar clearfix">
          <a href="/" className="topbar-logo">
            <img
              alt="logo"
              className="fit-parent"
              src={require("../assets/img/icons/logo.png")}
            />
          </a>
          <div className="topbar-menu" onClick={this.props.toggleNavigation} />
        </div>
        <Dock
          position="top"
          defaultSize={1.0}
          fluid={true}
          isVisible={this.props.isVisible}
          zIndex="10"
        >
          <div className="nav">
            <a href="/" className="nav-logo">
              <img
                alt="nav-logo"
                className="fit-parent"
                src={require("../assets/img/icons/logo.png")}
              />
            </a>
            <h2>
              <a href="/">Home</a>
            </h2>
            <h2>Projects</h2>
            <ul className="nav-project-titles">
              <li>
                <h4 className="home-feature-item-title gray">
                  <a href="/projects/uber">Uber Redesign</a>
                </h4>
              </li>
              <li>
                <h4 className="home-feature-item-title gray">
                  <a href="/projects/uber">Flux</a>
                </h4>
              </li>
              <li>
                <h4 className="home-feature-item-title gray">
                  <a href="/projects/uber">Flickr Design System</a>
                </h4>
              </li>
            </ul>
            <h2>
              <a href="/about">About</a>
            </h2>
          </div>
          <div className="nav-social-links clearfix original-blue">
            <a
              href="https://www.linkedin.com/in/jasonjyun/"
              className="nav-social-links-item"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jasonxyun"
              className="nav-social-links-item"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/jasonxyun/"
              className="nav-social-links-item"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </Dock>
      </React.Fragment>
    );
  }
}

export default Navigation;
