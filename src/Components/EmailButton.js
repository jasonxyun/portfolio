import React, { Component } from "react";
import classnames from "classnames";
import Clipboard from "react-clipboard.js";

class EmailButton extends Component {
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
      <React.Fragment>
        <Clipboard
          className="clipboard-button"
          data-clipboard-text="jasonyun@berkeley.edu"
          onSuccess={this.onSuccess}
        >
          {this.props.children}
          <div
            className={classnames(
              "clipboard-caption",
              "transition-whoosh",
              `${
                this.state.clipboardCaption ? "clipboard-caption-active" : null
              }`
            )}
          >
            My email has been copied to your clipboard!
          </div>
        </Clipboard>
      </React.Fragment>
    );
  }
}

export default EmailButton;
