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
          <div className="home-header-content">
            <div className="home-header-name">
              Jason Yun - <br /> Product Designer
            </div>
            <div className="home-header-description">
              I enjoy researching <strong>today's</strong> design principles to
              set <strong>tomorrow's </strong>
              standards.
            </div>
            <div className="intro-button">
              <li>
                <EmailButton>
                  <div
                    className="button home-email-button"
                    title="Click to copy email to clipboard."
                  >
                    Contact Me
                  </div>
                </EmailButton>
              </li>
              <li>
                <WorkButton elementName={"featuredProjects"}>
                  <div
                    className="button home-work-button"
                    title="Click to view my projects."
                  >
                    Discover my projects
                  </div>
                </WorkButton>
              </li>
            </div>
          </div>

          <div className="home-header-hero-cover">
            <WorkButton elementName={"hero-banner"}>
              <div className="home-header-arrow-wrap">
                <div className="home-header-arrow">
                  <span />
                </div>
              </div>
            </WorkButton>
            <div className="home-header-hero clearfix">
              {/* <p className="home-header-about-paragraph">
              <strong>
                I am a product designer and student based in Berkeley, CA.
              </strong>{" "}
              My passions lie within creating efficient and intuitive designs
              that aim to make technology acceessible and easier to use.
            </p>
            <p className="home-header-about-paragraph">
              <strong>
                I find pride in pursuing projects that matter to people.{" "}
              </strong>
              I hope to apply this mentality as I am constantly looking to learn
              and develop insights through a personal lens.
            </p> */}

              <img
                alt="home-hero"
                className="fit-width"
                src={require("../assets/img/thumbnails/home-cover.jpg")}
              />
            </div>
            <Element name="hero-banner" />
            <div className="home-header-about">
              <p className="home-header-about-paragraph">
                Welcome! <br /> I am a product designer and Cal student based in
                Berkeley, CA. I specialize in creating intuitive designs that
                aim to make technology both accessible and easier to use.
              </p>
            </div>
          </div>
        </div>

        <div className="home">
          <Element name="featuredProjects" />
          <div className="home-featured container">
            <div className="home-featured-item home-featured-uber flex">
              <div className="home-featured-item-content col-5 l-right flex vertical">
                <div className="home-featured-item-info">
                  <h2 className="home-feature-item-title">
                    <a href="/projects/uber">Uber Redesign</a>
                  </h2>
                  <h4 className="home-featured-item-caption">
                    Discovery, In Motion.
                  </h4>
                  <div className="home-featured-item-metadata clearfix">
                    <div className="home-featured-item-metadata-category">
                      UI & UX Design, Redesign
                    </div>
                  </div>
                  <div className="home-featured-item-description col-10">
                    <p>
                      Gone are the days of switching between apps for in-ride
                      recreation. My Uber redesign takes form in satisfying the
                      ride experience.
                    </p>
                    <a
                      href="/projects/uber"
                      className="button-text home-feature-item-link"
                    >
                      Read Case Study
                    </a>
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
            </div>

            <div className="home-featured-item home-featured-flux flex">
              <div className="home-featured-item-content clearfix l-right flex vertical">
                <div className="home-featured-item-info column">
                  <h2 className="home-feature-item-title">
                    <a href="/projects/flux">Flux</a>
                  </h2>
                  <h4 className="home-featured-item-caption">
                    Continous change, or movement.
                  </h4>
                  <div className="home-featured-item-metadata clearfix">
                    <div className="home-featured-item-metadata-category">
                      UX Study
                    </div>
                  </div>
                  <div className="home-featured-item-description col-10">
                    <p>
                      In this project, I focus on common UI animations used in
                      the industry today and the mechanisms behind their
                      operations.
                    </p>
                    <a
                      href="/projects/flux"
                      className="button-text home-feature-item-link"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/projects/flux"
                className="home-featured-item-thumbnail fit-width"
              >
                <Particles />
              </a>
            </div>

            <div className="home-featured-item home-featured-flickr flex">
              <div className="home-featured-item-content clearfix col-5 l-right flex vertical">
                <div className="home-featured-item-info column">
                  <h2 className="home-feature-item-title">
                    <a href="/projects/flickr">Flickr Design System</a>
                  </h2>
                  <h4 className="home-featured-item-caption">
                    By designers, for designers.
                  </h4>
                  <div className="home-featured-item-metadata clearfix">
                    <div className="home-featured-item-metadata-category">
                      Product Design, Visual Design
                    </div>
                  </div>
                  <div className="home-featured-item-description col-10">
                    <p>
                      I believe Flickr has what it takes to slingshot back into
                      recognition as a creative space for photographers,
                      designers, and everyday users.
                    </p>
                    <a
                      href="/projects/flickr"
                      className="button-text home-feature-item-link"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="/projects/flickr"
                className="home-featured-item-thumbnail"
              >
                <img
                  alt="Flickr Design System"
                  className="fit-width"
                  src={require("../assets/img/shots/Flickr/flickr_home.png")}
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
