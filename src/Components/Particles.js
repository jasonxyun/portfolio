import React, { Component } from "react";
import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: false,
                value_area: 500
              }
            },
            color: {
              //   value: "#000000"
              value: [
                //orange
                "#FF9800",
                //green
                "#4CAF50",
                //blue
                "#2196F3",
                //purple
                "#9C27B0",
                //light green
                "#8BC34A",
                //red
                "#FF5252",
                //light blue
                "#03A9F4",
                //light purple
                "#536DFE",
                //pink
                "#FF8C94",
                //blue grey
                "#607D8B",
                //jade
                "#83Af98"
              ]
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 15,
              random: true
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          retina_detect: true
        }}
        className="fit-parent"
      />
    );
  }
}

export default App;
