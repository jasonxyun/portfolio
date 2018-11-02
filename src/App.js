import React, { Component } from "react";
import "./App.css";
//import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Route from "./routes";
//import { Link } from "react-router-dom";
import Topbar from "./Components/Topbar";
//import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Topbar toggleWorkNavActive={this.toggleWorkNavActive} />
        <div className="content">
          <Route />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
