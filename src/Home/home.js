import React, { Component } from "react";
import Scroll from "react-scroll";
import "./home.css";
import EmailButton from "../Components/EmailButton";
import WorkButton from "../Components/WorkButton";
import Footer from "../Components/Footer";
import Particles from "../Components/Particles";
var Element = Scroll.Element;

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <div className="home-header-intro">
            <div className="home-header-name">
              Jason Yun - <br /> Product Designer
            </div>
            <div className="home-header-description">
              I study <strong>today's</strong> design principles to set{" "}
              <strong>tomorrow's </strong>
              standards.
            </div>
            <div className="home-header-button">
              <li>
                <EmailButton>
                  <div
                    className="button home-email-button"
                    title="Click to copy email to clipboard."
                  >
                    Get in touch
                  </div>
                </EmailButton>
              </li>
              <li>
                <WorkButton elementName={"featuredProjects"}>
                  <div
                    className="button home-work-button"
                    title="Click to view my projects."
                  >
                    Explore my projects
                  </div>
                </WorkButton>
              </li>
            </div>
          </div>

          <div className="home-header-hero-cover">
            <WorkButton elementName={"home-header-welcome"}>
              <div className="home-header-arrow-wrap">
                <div className="home-header-arrow">
                  <span />
                </div>
              </div>
            </WorkButton>
            <div className="home-header-hero clearfix">
              <img
                alt="home-hero"
                className="fit-width"
                src={require("../assets/img/thumbnails/home-cover.jpg")}
              />
            </div>
            <Element name="home-header-welcome" />
          </div>
        </div>

        <div className="home-welcome">
          <div className="home-section-title">
            <div className="home-section-title-wrap">
              <span className="home-section-title-label">Welcome</span>
            </div>
          </div>
          <div className="home-welcome-content">
            <p>Hey There!</p>
            <p>
              I'm a product designer and a senior at Cal studying Cognitive
              Science. I specialize in creating intuitive designs with the goal
              of making technology both accessible and easier to use.
            </p>
            <a href="/about">Learn More</a>
          </div>
        </div>

        <div className="home-content">
          <div className="home-featured">
            <Element name="featuredProjects" />
            <div className="home-featured-title">Design Projects</div>
            <div className="home-section-title">
              <div className="home-section-title-wrap">
                <span className="home-section-title-label">Projects</span>
              </div>
            </div>

            <div className="home-project-wrap project-UBER">
              <div className="home-project-item">
                <a href="/projects/uber" className="home-project-link">
                  <div className="home-project-image-wrap">
                    <img
                      alt="Uber Redesign"
                      className="fit-width"
                      src={require("../assets/img/shots/Uber/uber_home3.png")}
                    />
                  </div>
                  <div className="home-project-info">
                    <p className="home-project-title">Uber Feature Design</p>
                    <p className="home-project-category">
                      UI & UX Design, Redesign
                    </p>
                    <p className="home-project-description">
                      Gone are the days of switching between apps for in-ride
                      recreation. My Uber redesign takes form in creating a
                      satisfying ride experience.
                    </p>
                  </div>
                </a>
              </div>

              <div className="home-project-item project-FLUX">
                <a href="/projects/uber" className="home-project-link">
                  <div className="home-project-image-wrap">
                    <img
                      alt="Uber Redesign"
                      className="fit-width"
                      src={require("../assets/img/shots/Flux/flux_home3.png")}
                    />
                  </div>
                  <div className="home-project-info">
                    <p className="home-project-title">Flux</p>
                    <p className="home-project-category">UX Study</p>
                    <p className="home-project-description">
                      In this project, I focus on common user interface
                      animations used in the industry and the mechanisms behind
                      their operations.
                    </p>
                  </div>
                </a>
              </div>

              <div className="home-project-item project-FLICKR">
                <a href="/projects/uber" className="home-project-link">
                  <div className="home-project-image-wrap">
                    <img
                      alt="Flickr"
                      className="fit-width"
                      src={require("../assets/img/shots/Flickr/flickr_home3.png")}
                    />
                  </div>
                  <div className="home-project-info">
                    <p className="home-project-title">Flickr</p>
                    <p className="home-project-category">
                      Product Design, Branding
                    </p>
                    <p className="home-project-description">
                      I believe Flickr has what it takes to slingshot back into
                      recognition as a creative space for photographers,
                      designers, and everyday users.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* <div className="home-featured-item home-featured-uber flex">
              <div className="home-featured-item-content flex vertical">
                <div className="home-featured-item-info">
                  <h2 className="home-feature-item-title">
                    <a href="/projects/uber">Uber Redesign</a>
                  </h2>
                  <h4 className="home-featured-item-caption">
                    Discovery, in motion.
                  </h4>
                  <div className="home-featured-item-category clearfix">
                    <div className="home-featured-item-metadata-category">
                      UI & UX Design, Redesign
                    </div>
                  </div>
                  <div className="home-featured-item-description">
                    <p>
                      Gone are the days of switching between apps for in-ride
                      recreation. My Uber redesign takes form in satisfying the
                      ride experience.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/projects/uber" className="home-featured-item-thumbnail">
                <img
                  alt="Uber Redesign"
                  className="fit-width"
                  src={require("../assets/img/shots/Uber/uber_home.png")}
                />
              </a>
            </div> */}

            {/* <div className="home-featured-item home-featured-uber flex">
              <div className="home-featured-item-content flex vertical">
                <div className="home-featured-item-info">
                  <h2 className="home-feature-item-title">
                    <a href="/projects/uber">Flux</a>
                  </h2>
                  <h4 className="home-featured-item-caption">
                    Continous change and movement.
                  </h4>
                  <div className="home-featured-item-category clearfix">
                    <div className="home-featured-item-metadata-category">
                      UX Study
                    </div>
                  </div>
                  <div className="home-featured-item-description">
                    <p>
                      In this project, I focus on common UI animations used in
                      the industry today and the mechanisms behind their
                      operations.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/projects/uber" className="home-featured-item-thumbnail">
                <img
                  alt="Uber Redesign"
                  className="fit-width"
                  src={require("../assets/img/shots/Uber/uber_home.png")}
                />
              </a>
            </div> */}

            {/* <div className="home-featured-item home-featured-uber flex">
              <div className="home-featured-item-content flex vertical">
                <div className="home-featured-item-info">
                  <h2 className="home-feature-item-title">
                    <a href="/projects/uber">Flickr</a>
                  </h2>
                  <h4 className="home-featured-item-caption">
                    By designers, for designers.
                  </h4>
                  <div className="home-featured-item-category clearfix">
                    <div className="home-featured-item-metadata-category">
                      Product Design, Branding
                    </div>
                  </div>
                  <div className="home-featured-item-description">
                    <p>
                      I believe Flickr has what it takes to slingshot back into
                      recognition as a creative space for photographers,
                      designers, and everyday users.
                    </p>
                  </div>
                </div>
              </div>

              <a href="/projects/uber" className="home-featured-item-thumbnail">
                <img
                  alt="Uber Redesign"
                  className="fit-width"
                  src={require("../assets/img/shots/Uber/uber_home.png")}
                />
              </a>
            </div> */}

            <span className="home-featured-background" />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
