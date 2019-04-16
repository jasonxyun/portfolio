import React, { Component } from "react";
import Scroll from "react-scroll";
import { Link } from "react-router-dom";
import EmailButton from "../Components/EmailButton";
import WorkButton from "../Components/WorkButton";
var Element = Scroll.Element;

class Flickr extends Component {
  render() {
    return (
      <div class="project">
        <ul className="pagination" style={{ display: "unset" }}>
          <li className="pagination-visible">
            <WorkButton elementName={"one"}>
              <scrollbutton className="pagination-visible">
                Challenges
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"two"}>
              <scrollbutton className="pagination-visible">
                Design Blueprints
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"three"}>
              <scrollbutton className="pagination-visible">
                Primary Design Components
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"four"}>
              <scrollbutton className="pagination-visible">
                Typography
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"five"}>
              <scrollbutton className="pagination-visible">
                Photography
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"six"}>
              <scrollbutton className="pagination-visible">
                Color Palette
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"seven"}>
              <scrollbutton className="pagination-visible">
                Implementation
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"eight"}>
              <scrollbutton className="pagination-visible">
                Closing
              </scrollbutton>
            </WorkButton>
          </li>
        </ul>

        <div className="project-title vertical">
          <div className="col-6 xm-top mobile-xm-top adjust-title-width">
            <h2 className="xm-bottom adjust-left">
              Flickr –&nbsp; <br />{" "}
              <span className="light">For designers, by designers.</span>
            </h2>
          </div>
        </div>

        <div className="project-header">
          <div className="flex center vertical flickr-orange">
            <div className="xl-top xl-bottom m-pad-around">
              <img
                src={require("../assets/img/images/Flickr/banner.png")}
                style={{ width: "100%" }}
                alt="banner"
              />
            </div>
          </div>
          <div className="very-dark xm-pad-bottom">
            <div className="project-overview center white xl-top">
              <div className="col-6 xm-bottom">
                <h5>Overview</h5>
                <p className="light s-bottom">
                  For my latest design project, I envisioned a redesign for the
                  photo sharing platform, <i>Flickr</i>. Because of Flickr's
                  decline in user base, along with an increasingly competitive
                  landscape, it was eventually time for a design and creative
                  overhaul. Starting from the ground up, this is what I see the
                  Flickr's future to look like.
                </p>
                <p className="light">
                  Covering the various aspects in which this would take effect,
                  I delve into primary and secondary components, typography,
                  photography, and color as the most strategic areas to
                  effectively meet the design standards of tomorrow.
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Disciplines</h5>
                <p className="light">
                  Branding Case Study <br />
                  Visual Design
                </p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Mission</h5>
                <p className="light">
                  Create a new consistent look and feel for the Flickr platform
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Deliverables</h5>
                <p className="light">
                  Brand Guidelines <br />
                  Redesign Concept
                </p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Tools</h5>
                <p className="light">
                  Sketch
                  <br />
                  Photoshop
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-body">
          <div className="col-9 centered xl-bottom xxl-top flickr-photo-bottom">
            {/* <Element name="one" /> */}
            <div className="scroll-container">
              <Element name="one" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Challenges.png")}
                alt="Challenges"
              />
            </div>

            <div className="scroll-container">
              <Element name="two" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Blueprints.png")}
                alt="Blueprints"
              />
            </div>

            <div className="scroll-container">
              <Element name="three" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Design Components.png")}
                alt="Design Components"
              />
            </div>

            <div className="scroll-container">
              <Element name="four" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Typography.png")}
                alt="Typography"
              />
            </div>

            <div className="scroll-container">
              <Element name="five" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Photography.png")}
                alt="Photography"
              />
            </div>

            <div className="scroll-container">
              <Element name="six" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Color.png")}
                alt="Color"
              />
            </div>

            <div className="scroll-container">
              <Element name="seven" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Implementation.png")}
                alt="Implementation"
              />
            </div>

            <div className="scroll-container">
              <Element name="eight" className="scroll-element" />
              <img
                className="fit-width"
                src={require("../assets/img/images/Flickr/exports/Closing.png")}
                alt="Closing"
              />
            </div>
          </div>
        </div>

        <div className="project-body xl-top xl-pad-bottom">
          <h2 className="col-6 centered xm-top m-bottom">Closing Thoughts</h2>
          <p className="col-6 article-font centered s-bottom">
            All in all, this entire project has been challenging in that it
            required me rethink Flickr's design system and company message as a
            whole. By adding customization tools and power editing
            functionalities integrated into their platform, I believe Flickr has
            what it takes to slingshot back into recognition as a creative space
            for photographers, designers, and everyday users.
          </p>
          <p className="col-6 centered article-font">Thanks for viewing!</p>
        </div>

        <div className="project-footer">
          <div className="flex wrap">
            <div className="half project-footer-gray flex right">
              <div className="bottom-width-left xl-right tab-centered">
                <h3 className="white regular super-top">Let's get in touch</h3>
                <p className="white light m-top s-bottom">
                  Tea or Coffee? I'm up for either!
                </p>
                <EmailButton
                  color={"white"}
                  buttonClass={"project-email-button"}
                >
                  <div
                    className="button"
                    title="Click to copy email to clipboard."
                  >
                    Get in touch
                  </div>
                </EmailButton>
              </div>
            </div>
            <div className="project-fake-white half flex">
              <div className="bottom-width-right xl-left">
                <h3 className="regular super-top">You've reached the end!</h3>
                <div className="flex m-top xl-bottom">
                  <div className="new-pink col-6 flex vertical center s-pad-around card-min-width">
                    <img
                      src={require("../assets/img/thumbnails/new-project.png")}
                      style={{ width: "100%" }}
                      alt="Project Thumbnail"
                    />
                  </div>
                  <div className="s-left bottom-left-mobile-readjust">
                    {/* <h3 className="xs-bottom bold ">Flickr Design System</h3> */}
                    <p className="xs-bottom">
                      Thanks for making it this far! Be on the lookout for new
                      projects coming soon.
                    </p>
                    <Link
                      to="/"
                      className="button black project-work-button project-fake-white"
                    >
                      Back home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flickr;
