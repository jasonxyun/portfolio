import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import Uber from "./Projects/uber";
import Flickr from "./Projects/flickr";
import Flux from "./Projects/flux";
//import Topbar from "./Components/Topbar";
//import Projects from "./Projects/projects";

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/projects" component={Projects} /> */}
    <Route path="/projects/uber" component={Uber} />
    <Route path="/projects/flickr" component={Flickr} />
    <Route path="/projects/flux" component={Flux} />
    <Route path="/about" component={About} />
  </Switch>
);

export default routes;
