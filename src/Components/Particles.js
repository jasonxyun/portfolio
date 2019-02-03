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
                enable: true,
                value_area: this.props.valueArea
              }
            },
            color: {
              value: "#ffffff"
              // value: [
              //   //orange
              //   "#FF9800",
              //   //green
              //   "#4CAF50",
              //   //blue
              //   "#2196F3",
              //   //purple
              //   "#9C27B0",
              //   //light green
              //   "#8BC34A",
              //   //red
              //   "#FF5252",
              //   //light blue
              //   "#03A9F4",
              //   //light purple
              //   "#536DFE",
              //   //pink
              //   "#FF8C94",
              //   //blue grey
              //   "#607D8B",
              //   //jade
              //   "#83Af98"
              // ]
            },
            line_linked: {
              enable: false
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: false,
                speed: 0.8,
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
              speed: 1,
              direction: "bottom",
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
        className=""
        width={this.props.width}
        height={this.props.height}
        canvasClassName=""
      />
    );
  }
}

export default App;
