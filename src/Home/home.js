import React, { Component } from "react";
import Scroll from "react-scroll";
import EmailButton from "../Components/EmailButton";
import WorkButton from "../Components/WorkButton";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
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
                src={require("../assets/img/thumbnails/home_cover2.png")}
              />
            </div>
          </div>
        </div>

        <div className="home-welcome">
          <div className="home-section-title">
            <div className="home-section-title-wrap">
              <span className="home-section-title-label">Welcome</span>
              <Element name="home-header-welcome" />
            </div>
          </div>
          <div className="home-welcome-content">
            <p>Hey there!</p>
            <p>
              I'm a product designer and a senior at Cal studying Cognitive
              Science. I specialize in creating intuitive designs with the goal
              of making technology both accessible and easier to use.
            </p>
            <Link to="/about" className="home-welcome-about-link">
              More about me
            </Link>
          </div>
        </div>

        <div className="home-featured">
          <Element name="featuredProjects" />
          <div className="home-featured-title">Design Projects</div>
          <div className="home-section-title home-section-projects">
            <div className="home-section-title-wrap">
              <span className="home-section-title-label">Projects</span>
            </div>
          </div>

          <div className="home-project-wrap">
            <div className="home-project-item project-UBER">
              <Link to="/projects/uber" className="home-project-link">
                <div className="home-project-image-wrap">
                  <img
                    alt="Uber Redesign"
                    className="fit-width"
                    src={require("../assets/img/thumbnails/uber_home.png")}
                  />
                </div>
                <div className="home-project-info">
                  <p className="home-project-title">Uber</p>
                  <p className="home-project-category">
                    UX Design, Feature Design
                  </p>
                  <p className="home-project-description ss-bottom">
                    Gone are the days of switching between apps for in-ride
                    recreation. My Uber redesign takes form in creating a
                    enjoyable ride experience.
                  </p>
                </div>
              </Link>
            </div>

            <div className="home-project-item project-FLUX">
              <Link to="/projects/flux" className="home-project-link">
                <div className="home-project-image-wrap">
                  <img
                    alt="Uber Redesign"
                    className="fit-width"
                    src={require("../assets/img/thumbnails/flux_home.png")}
                  />
                </div>
                <div className="home-project-info">
                  <p className="home-project-title">Flux</p>
                  <p className="home-project-category">UX Study</p>
                  <p className="home-project-description ss-bottom">
                    In this project, I focus on common user interface animations
                    used in the industry and the mechanisms behind their
                    operations.
                  </p>
                </div>
              </Link>
            </div>

            <div className="home-project-item project-FLICKR">
              <Link to="/projects/flickr" className="home-project-link">
                <div className="home-project-image-wrap">
                  <img
                    alt="Flickr"
                    className="fit-width"
                    src={require("../assets/img/thumbnails/flickr_home.png")}
                  />
                </div>
                <div className="home-project-info">
                  <p className="home-project-title">Flickr</p>
                  <p className="home-project-category">
                    Product Design, Branding
                  </p>
                  <p className="home-project-description ss-bottom">
                    I believe Flickr has what it takes to slingshot back into
                    recognition as a creative space for photographers,
                    designers, and everyday users.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <span className="home-featured-background" />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
