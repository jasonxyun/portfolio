import React, { Component } from "react";
import EmailButton from "../Components/EmailButton";
import Fade from "react-reveal/Fade";

class About extends Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#020408";
    document.body.style.zIndex = "0";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "white";
  }

  render() {
    return (
      <div className="about">
        <Fade bottom cascade>
          <div className="about-content">
            <h2 className="col-8 l-bottom about-intro">
              Hello –&nbsp;
              <br />
              I’m Jason Yun
            </h2>

            <div className="col-8 about-description">
              <p className="light s-bottom">
                {/* As a product designer and a student, I find pride in pursuing work
              that matter to people. I apply this mentality as I'm constantly
              looking to learn and develop new insights through a{" "}
              <i>personal</i> lens. */}
                As a designer, I believe great products are beyond the sum of
                their parts. They tap into personal experiences, be it the
                uncontainable excitement before a concert opening or the
                nostalgia of reliving memories through old photos.
              </p>
              <p className="light s-bottom">
                {/* I currently focus on designing and developing a smart database
              application with a small team of developers at my school's{" "}
              <a
                href="https://ced.berkeley.edu/resources/computing/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                College of Environmental Design
              </a>
              . I've previously worked at companies like{" "}
              <a
                href="https://www.drop.ai/"
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                Drop
              </a>{" "}
              and{" "}
              <a
                href="https://www.salesforce.com/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Salesforce
              </a>
              , designing creative solutions to their complex problems. While my
              path to becoming a designer was not exactly straightforward, the
              user experience is constantly dynamic, and I hope to reflect this
              very nature. */}
                Having worked in various roles from user research, experience
                design, and product design, I have developed an
                interdisciplinary skillset that has allowed me to serve as a
                bridge across disciplines. In any setting, I hope to bring
                strong creative-thinking skills and cultural awareness to the
                table.
              </p>
              <p className="light s-bottom">
                {/* I developed this website after teaching myself React over the
                course of one summer, and hosted it on AWS. If you're a designer
                looking to learn more about the development space, feel free to
                contact me! */}
                In my spare time I enjoy taking photos with a film camera,
                learning new things on Medium, and keeping up to date with
                contemporary fashion trends.
                {/* I am
              also currently looking for full-time product design &amp; ux
              design opportunties in the San Francisco Bay Area. */}
              </p>
            </div>
            <div className="col-8 about-info">
              <div className="col-6 about-info-column-one">
                <h5 className="xs-top xs-bottom">Work Experience</h5>
                <p className="bold xxs-bottom">
                  <a
                    href="https://www.rga.com/"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    R/GA
                  </a>
                </p>
                <p className="light s-bottom">
                  Experience Design Intern{" "}
                  <span className="about-timeline gray">
                    &sdot; Jun 2019 - Present
                  </span>
                </p>

                <p className="bold xxs-bottom">
                  <a
                    href="https://ced.berkeley.edu/resources/computing/"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UC Berkeley CED
                  </a>
                </p>
                <p className="light s-bottom">
                  Product Designer{" "}
                  <span className="about-timeline gray">
                    &sdot; Nov 2016 - May 2019
                  </span>
                </p>

                <p className="bold xxs-bottom">
                  <a
                    href="https://www.salesforce.com/"
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Salesforce
                  </a>
                </p>
                <p className="light s-bottom">
                  UX Design Intern{" "}
                  <span className="about-timeline gray">
                    &sdot; Summer 2017
                  </span>
                </p>

                <p className="bold">
                  <a
                    href="https://www.drop.ai/"
                    target="_blank"
                    className="link"
                    rel="noopener noreferrer"
                  >
                    Drop Software Inc.
                  </a>
                </p>
                <p className="light s-bottom">
                  UX Researcher
                  <span className="about-timeline gray">
                    &sdot; 2016 - 2017
                  </span>
                </p>
              </div>
              <div className="col-5 about-info-column-two">
                <h5 className="col-2 xs-top xs-bottom">Education</h5>
                <p>University of California, Berkeley</p>
                <p className="light">B.A. Cognitive Science</p>
                <p className="gray s-bottom">Aug 2015 - May 2019</p>
                <h5 className="col-2 xs-top xs-bottom">Contact</h5>
                <p className="light xs-bottom">jasonyun@berkeley.edu</p>
              </div>
            </div>

            <div className="col-8 about-buttons">
              <li>
                <EmailButton color={"white"}>
                  <div
                    className="button footer-email-button"
                    title="Click to copy email to clipboard."
                  >
                    Get in touch
                  </div>
                </EmailButton>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/11mQFDOUMwL7Pv7RiL19O8fgbmoy7B2Ta/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="button white about-work-button"
                    title="Click to view my resume."
                  >
                    View My Resume
                  </div>
                </a>
              </li>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
