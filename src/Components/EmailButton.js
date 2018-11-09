import React, { Component } from "react";
import classnames from "classnames";
import Clipboard from "react-clipboard.js";
import PropTypes from "prop-types";

class EmailButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      clipboardCaption: false
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.showClipboardCaption = this.showClipboardCaption.bind(this);
    this.hideClipboardCaption = this.hideClipboardCaption.bind(this);
    this.linkOverride = this.linkOverride.bind(this);
  }

  onSuccess() {
    if (this.state.clipboardCaption) {
      return false;
    }
    this.showClipboardCaption();
  }

  showClipboardCaption = () => {
    this.setState({
      clipboardCaption: true
    });
    setTimeout(() => this.hideClipboardCaption(), 2000);
  };

  hideClipboardCaption = () => {
    this.setState({
      clipboardCaption: false
    });
  };

  linkOverride = e => {
    e.stopPropagation();
    return false;
  };

  render() {
    return (
      <Clipboard
        className={classnames("clipboard-button")}
        data-clipboard-text="jasonyun@berkeley.edu"
        onSuccess={this.onSuccess}
      >
        <div>
          {this.props.children}
          <div
            className={classnames(
              this.props.color,
              "clipboard-caption",
              "transition-whoosh",

              `${
                this.state.clipboardCaption ? "clipboard-caption-active" : null
              }`
            )}
          >
            My email has been copied to your clipboard!
          </div>
        </div>
      </Clipboard>
    );
  }
}

export default EmailButton;
