import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import Uber from "./Projects/uber";
import Flickr from "./Projects/flickr";
import Flux from "./Projects/flux";
import NavBar from "./Components/Navbar";
import ReactGA from "react-ga";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-133724421-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects/uber" component={Uber} />
          <Route path="/projects/flickr" component={Flickr} />
          <Route path="/projects/flux" component={Flux} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

// export const App = () => (
//   <div className="App">
//     <NavBar />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/projects/uber" component={Uber} />
//       <Route path="/projects/flickr" component={Flickr} />
//       <Route path="/projects/flux" component={Flux} />
//       <Route path="/about" component={About} />
//     </Switch>
//   </div>
// );

export default App;
