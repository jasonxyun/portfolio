import React, { Component } from "react";
import { Route } from "react-router-dom";
import Uber from "./uber";
import Flickr from "./flickr";
import Flux from "./flux";

class Projects extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path={this.props.match.path} component={Projects} /> */}
        <Route path={`${this.props.match.path}/uber`} component={Uber} />
        <Route path={`${this.props.match.path}/flickr`} component={Flickr} />
        <Route path={`${this.props.match.path}/flux`} component={Flux} />
      </div>
    );
  }
}

export default Projects;
