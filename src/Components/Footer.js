import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content container">
          <h2 className="col-7 l-bottom tab-title mobile-full">
            Hello –&nbsp;
            <br />
            I’m Jason Yun
          </h2>
          <div className="col-7 footer-description">
            <p className="light s-bottom">
              As a product designer and senior studying Cognitive Science at UC
              Berkeley, I find pride in pursuing work that matter to people. I
              apply this mentality as I'm constantly looking to learn and
              develop new insights through a personal lens.
            </p>
            <p className="light s-bottom">
              I currently focus on designing and developing smart POS
              applications with a small group of developers at my school's
              College of Environmental Design, all of whom I consider to be
              family. I've previously worked at companies like Drop and
              Salesforce, designing creative solutions to their complex
              problems. While my path to becoming a designer has not been
              exactly straightforward, the user experience is constantly
              dynamic, and I hope to reflect this very nature.
            </p>
            <p className="light">
              If you'd like to talk, drop me a line! I'm happy to talk about
              design, development, and all things photography!
            </p>
          </div>
          <div className="flex tab-title mobile-full full xl-bottom wrap">
            <div className="col-4 tab-full">
              <h5 className="xs-top xs-bottom">Work Experience</h5>
              <p className="bold">UC Berkeley CED</p>
              <p className="light s-bottom">
                UI Developer{" "}
                <span className="footer-timeline gray">
                  &sdot; Nov 2016 - Present
                </span>
              </p>

              <p className="bold">Salesforce</p>
              <p className="light s-bottom">
                UX Design Intern{" "}
                <span className="footer-timeline gray">&sdot; Summer 2017</span>
              </p>

              <p className="bold">Drop.ai</p>
              <p className="light s-bottom">
                Product Designer, Co-Founder{" "}
                <span className="footer-timeline gray">&sdot; Summer 2016</span>
              </p>
            </div>
            <div className="col-4 tab-full">
              <h5 className="col-2 xs-top xs-bottom">Education</h5>
              <p>University of California, Berkeley</p>
              <p className="light">B.A. Cognitive Science</p>
              <p className="gray xm-bottom">Aug 2015 - May 2019</p>
              <h5 className="col-2 xs-top xs-bottom">Contact</h5>
              <p className="light xs-bottom">jasonyun@berkeley.edu</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
