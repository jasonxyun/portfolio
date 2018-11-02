import React, { Component } from "react";
import "./home.css";
import EmailButton from "../Components/EmailButton";
import WorkButton from "../Components/WorkButton";
import Footer from "../Components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <div className="home-header-content container">
            <h1 className="home-header-hero">Jason Yun</h1>
            <h3 className="home-header-caption">
              Product Designer -<br />
              experienced with <br />
              UI & UX Design
              {/* I research <strong>today's</strong> <br />
              design principles to set <br /> <strong>tomorrow's </strong>
              standards. */}
            </h3>
            <div className="intro-button">
              <li>
                <EmailButton>
                  <div
                    className="button"
                    title="Click to copy email to clipboard"
                  >
                    Reach Out
                  </div>
                </EmailButton>
              </li>
              <li>
                <WorkButton />
              </li>
            </div>
          </div>
          <div className="home-header-cover">
            <img
              alt="Designed by Jason"
              className="home-header-cover-circles"
              src={require("../assets/img/thumbnails/circles.png")}
            />
            {/* <img
              alt="Korean Map"
              className="fit-width"
              src={require("../assets/img/thumbnails/banner3.jpg")}
            /> */}
            <div className="scroller home-header-cover-scroller" />
          </div>
          <div className="home-header-about clearfix">
            <p className="home-header-about-paragraph">
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
            </p>
          </div>
        </div>
        <div className="home-work">
          <div className="home-featured container">
            <div className="home-featured-item home-featured-uber flex">
              <div className="home-featured-item-content col-5 l-right flex vertical">
                <div className="home-featured-item-info">
                  <h2 className="home-feature-item-title">
                    <a href="/work/uber">Uber Redesign</a>
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
                      href="/work/uber"
                      className="button-text home-feature-item-link"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>
              <a href="/work/uber" className="home-featured-item-thumbnail">
                <img
                  alt="Uber Redesign"
                  className="fit-width"
                  src={require("../assets/img/shots/Uber/Banner 2.png")}
                />
              </a>
            </div>

            <div className="home-featured-item home-featured-flickr flex">
              <div className="home-featured-item-content clearfix col-5 l-right flex vertical">
                <div className="home-featured-item-info column">
                  <h2 className="home-feature-item-title">
                    <a href="/work/flickr">Flickr Design System</a>
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
                      href="/work/flickr"
                      className="button-text home-feature-item-link"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>
              <a href="/work/flickr" className="home-featured-item-thumbnail">
                <img
                  alt="Uber Redesign"
                  className="fit-width"
                  src={require("../assets/img/shots/Flickr/flickr_home.png")}
                />
              </a>
            </div>

            <div className="home-featured-item home-featured-flickr flex">
              <div className="home-featured-item-content clearfix col-5 l-right flex vertical">
                <div className="home-featured-item-info column">
                  <h2 className="home-feature-item-title">
                    <a href="/work/flux">Flux</a>
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
                      href="/work/flux"
                      className="button-text home-feature-item-link"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>
              <a href="/work/flux" className="home-featured-item-thumbnail">
                <img
                  alt="Uber Redesign"
                  className="fit-width"
                  src={require("../assets/img/shots/Uber/uber_home.png")}
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
