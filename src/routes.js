import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import Uber from "./Projects/uber";
import Flickr from "./Projects/flickr";
import Flux from "./Projects/flux";
import NavBar from "./Components/Navbar";

const routes = () => (
  <div>
    <NavBar />
    {/* <Switch> */}
    <Route exact path="/" component={Home} />
    <Route path="/uber" component={Uber} />
    <Route path="/flickr" component={Flickr} />
    <Route path="/flux" component={Flux} />
    <Route path="/about" component={About} />
    {/* </Switch> */}
  </div>
);

export default routes;
