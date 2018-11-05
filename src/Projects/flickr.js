import React, { Component } from "react";

class Flickr extends Component {
  render() {
    return (
      <div className="work">
        <h1>Flickr</h1>
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Challenges.png")}
          alt="Challenges"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Blueprints.png")}
          alt="Blueprints"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Design Components.png")}
          alt="Design Components"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Typography.png")}
          alt="Typography"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Photography.png")}
          alt="Photography"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Color.png")}
          alt="Color"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Implementation.png")}
          alt="Implementation"
        />
        <img
          className="fit-width"
          src={require("../assets/img/shots/Flickr/exports/Closing.png")}
          alt="Closing"
        />
      </div>
    );
  }
}

export default Flickr;
