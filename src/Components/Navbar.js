import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNormalNav: true
    };

    this.toggleColor = this.toggleColor.bind(this);
    this.setAboutStyle = this.setAboutStyle.bind(this);
    this.setNormalStyle = this.setNormalStyle.bind(this);
    this.getColor = this.getColor.bind(this);
    this.getFx = this.getFx.bind(this);
  }

  toggleColor = () => {
    this.setState(prevState => ({
      isNormalNav: !prevState.isNormalNav
    }));
    console.log(this.state);
  };

  setAboutStyle = () => {
    if (this.state.isNormalNav === true) {
      this.setState({ isNormalNav: false });
    }
  };

  setNormalStyle = () => {
    if (this.state.isNormalNav === false) {
      this.setState({ isNormalNav: true });
    }
  };

  getColor() {
    if (this.state.isNormalNav) {
      return "classic-black";
    }
    return "white";
  }

  getFx() {
    if (this.state.isNormalNav) {
      return "nav-fx";
    }
    return "reverse-nav-fx";
  }

  render() {
    const Normal = () => (
      <div className="navbar clearfix">
        <a href="/" className="navbar-logo">
          <img
            alt="logo"
            className="fit-parent"
            src={require("../assets/img/icons/logo.png")}
          />
        </a>
        <ul className="navbar-menu classic-black">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="original-blue"
              className="nav-fx"
              onClick={this.setNormalStyle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              activeClassName="original-blue"
              className="nav-fx"
              onClick={this.setAboutStyle}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/11mQFDOUMwL7Pv7RiL19O8fgbmoy7B2Ta/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="classic-black nav-fx"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    );
    const About = () => (
      <div className="navbar clearfix">
        <a href="/" className="navbar-logo">
          <img
            alt="logo"
            className="fit-parent"
            src={require("../assets/img/icons/logo.png")}
          />
        </a>
        <ul className="navbar-menu white">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="original-blue"
              className="reverse-nav-fx"
              onClick={this.setNormalStyle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              activeClassName="original-blue"
              className="reverse-nav-fx"
              onClick={this.setAboutStyle}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/11mQFDOUMwL7Pv7RiL19O8fgbmoy7B2Ta/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="white reverse-nav-fx"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        <Route exact path="/" component={Normal} />
        <Route exact path="/projects/uber" component={Normal} />
        <Route exact path="/projects/flickr" component={Normal} />
        <Route exact path="/projects/flux" component={Normal} />
        <Route exact path="/projects/gather" component={Normal} />
        <Route exact path="/projects/salesforce" component={Normal} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default NavBar;
