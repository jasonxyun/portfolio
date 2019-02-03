import React, { Component } from "react";
import Scroll from "react-scroll";

class WorkButton extends Component {
  constructor(props) {
    super(props);
    this.goToPos = this.goToPos.bind(this);
  }
  goToPos() {
    var scroller = Scroll.scroller;
    scroller.scrollTo(this.props.elementName, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: this.props.offset // Scrolls to element + 50 pixels down the page
    });
  }
  render() {
    return <div onClick={this.goToPos}>{this.props.children}</div>;
  }
}

export default WorkButton;
