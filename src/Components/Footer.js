import React, { Component } from "react";
import EmailButton from "./EmailButton";
import Icon from "react-icons-kit";
import { linkedin } from "react-icons-kit/entypo/linkedin";
import { instagram } from "react-icons-kit/entypo/instagram";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
// import WorkButton from "./WorkButton";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="prefooter">
          <div className="home-section-title">
            <div className="home-section-title-wrap">
              <span className="home-section-title-label">About</span>
            </div>
          </div>
          <div className="prefooter-content">
            <div className="prefooter-quote">
              “If the path be beautiful, let us not ask where it leads.” ―
              Anatole France
            </div>
          </div>
          <div className="prefooter-padding" />
        </div>

        <div className="footer">
          <div className="footer-about">
            <h3>I'm glad you're here.</h3>
            <p>
              Got a question in mind? While I try to make this website the best
              representation of myself, there is only so much I can put on here!
              If you'd like to learn more about me personally, please drop me a
              line. I'm happy to talk about all things design, development, and
              photography!
            </p>
            <p>For the meantime, check out some of my other pages!</p>
            <EmailButton color={"white"}>
              <div
                className="button footer-email-button"
                title="Click to copy email to clipboard."
              >
                Get in touch
              </div>
            </EmailButton>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-location">Made in Berkeley, CA</div>
            <div className="footer-bottom-social">
              <a
                href="https://www.linkedin.com/in/jasonjyun/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Icon icon={linkedin} />
              </a>
              <a
                href="https://www.instagram.com/jasonxyun/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Icon icon={instagram} />
              </a>
              <a
                href="https://github.com/jasonxyun"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Icon icon={socialGithub} />
              </a>
            </div>
          </div>

          <a href="/" className="footer-bottom-logo">
            <img
              className="footer-logo"
              alt="topbar-logo"
              src={require("../assets/img/icons/logo.png")}
            />
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
