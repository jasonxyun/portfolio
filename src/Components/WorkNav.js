import React, { Component } from "react";
import Dock from "react-dock";
// import classnames from "classnames";
// import EmailButton from "./EmailButton";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipe: false,
      activeClass: ""
    };
    this.setActiveClass = this.setActiveClass.bind(this);
  }

  setActiveClass = activeClass => () => {
    this.setState({
      activeClass: activeClass
    });
  };

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
          zIndex={10}
        >
          {/*
          <div className="nav-social-links clearfix original-blue">
            <a
              href="https://www.linkedin.com/in/jasonjyun/"
              className="nav-social-links-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jasonxyun"
              className="nav-social-links-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/jasonxyun/"
              className="nav-social-links-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div> */}
          <div className="work-nav transition-woosh">
            <a href="/" className="work-nav-logo">
              <img
                alt="work-nav-logo"
                className="fit-parent"
                src={require("../assets/img/icons/logo.png")}
              />
            </a>
            <div className="container">
              <div className="work-nav-content clearfix desktop">
                <div className="work-nav-column column col-4">
                  <div className="work-nav-header">Explore Work</div>
                  <div className="work-nav-item-container">
                    <a
                      href="/projects/Uber"
                      className="work-nav-item work-nav-item-featured"
                      onMouseEnter={this.setActiveClass("Uber")}
                      onMouseLeave={this.setActiveClass("")}
                    >
                      <h3 className="work-nav-item-featured-title">Uber</h3>
                      <h4 className="work-nav-item-featured-caption">
                        Discovery, In Motion.
                      </h4>
                    </a>
                    <a
                      href="/projects/Flux"
                      className="work-nav-item work-nav-item-featured"
                      onMouseEnter={this.setActiveClass("Flux")}
                      onMouseLeave={this.setActiveClass("")}
                    >
                      <h3 className="work-nav-item-featured-title">Flux</h3>
                      <h4 className="work-nav-item-featured-caption">
                        Continuous Change, or Movement.
                      </h4>
                    </a>
                    <a
                      href="/projects/Flickr"
                      className="work-nav-item work-nav-item-featured"
                      onMouseEnter={this.setActiveClass("Flickr")}
                      onMouseLeave={this.setActiveClass("")}
                    >
                      <h3 className="work-nav-item-featured-title">Flickr</h3>
                      <h4 className="work-nav-item-featured-caption">
                        By Designers, For Designers.
                      </h4>
                    </a>
                  </div>
                  <div className="work-nav-header">Learn More</div>
                  <div className="work-nav-item-container">
                    <a href="/about" className="work-nav-item">
                      About
                    </a>
                    <a
                      href="https://medium.com/@rokaiam"
                      target="_blank"
                      className="work-nav-item"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
                    <div className="work-nav-item">
                      <button
                        type="button"
                        className="clipboard-button"
                        data-clipboard-text="roka371@gmail.com"
                      >
                        <div className="work-nav-item-email">Get in Touch</div>
                        <div className="clipboard-caption transition-whoosh null">
                          My email has been copied to your clipboard!
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-nav-link clearfix">
                <a
                  href="https://www.linkedin.com/in/jasonjyun/"
                  target="_blank"
                  className="work-nav-link-item"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/jasonxyun/"
                  target="_blank"
                  className="work-nav-link-item"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/rokadreamer/"
                  target="_blank"
                  className="work-nav-link-item"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </Dock>
      </React.Fragment>
    );
  }
}

export default Navigation;

// WEBPACK FOOTER //
// ./src/Components/WorkNav.js
