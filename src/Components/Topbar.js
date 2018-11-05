import React, { Component } from "react";

class Tobar extends Component {
  render() {
    return (
      <div className="topbar clearfix">
        <a href="/" className="topbar-logo">
          <img
            alt="logo"
            className="fit-parent"
            src={require("../assets/img/icons/logo.png")}
          />
        </a>
        <div className="topbar-menu" onClick={this.props.toggleWorkNavActive} />
      </div>
    );
  }
}

export default Tobar;
