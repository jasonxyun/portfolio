import React, { Component } from "react";
import "./App.css";
// import classnames from "classnames";
import Route from "./routes";
//import { Link } from "react-router-dom";
// import Topbar from "./Components/Topbar";
import Dock from "./Components/WorkNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //for navbar testing purposes
      navActive: false
    };
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ navActive: !this.state.navActive });
    console.log(this.state.navActive);
  }

  render() {
    return (
      <div className={`${this.state.navActive ? "work-nav-active" : null}`}>
        {/* <Topbar toggleWorkNavActive={this.toggleWorkNavActive} /> */}
        <Dock
          toggleNavigation={this.toggleNavigation}
          isVisible={this.state.navActive}
        />
        <div className="content">
          <Route />
        </div>
      </div>
    );
  }
}

export default App;
