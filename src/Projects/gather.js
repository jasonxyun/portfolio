import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import EmailButton from "../Components/EmailButton";
import WorkButton from "../Components/WorkButton";
var Element = Scroll.Element;

class Flux extends Component {
  render() {
    return (
      <div className="project">
        <ul className="pagination" style={{ display: "unset" }}>
          <li className="pagination-visible">
            <WorkButton elementName={"one"}>
              <scrollbutton className="pagination-visible">
                Backstory
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"two"}>
              <scrollbutton className="pagination-visible">
                Preliminary Research
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"three"}>
              <scrollbutton className="pagination-visible">
                Creating The Blueprints
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"four"}>
              <scrollbutton className="pagination-visible">
                Identifying Utility
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"five"}>
              <scrollbutton className="pagination-visible">
                Low-Fi Mockups
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"six"}>
              <scrollbutton className="pagination-visible">
                Execution
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"seven"}>
              <scrollbutton className="pagination-visible">
                Final Design
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"eight"}>
              <scrollbutton className="pagination-visible">
                Conclusion
              </scrollbutton>
            </WorkButton>
          </li>
        </ul>

        <div className="project-title vertical">
          <div className="col-6 xm-top mobile-xm-top adjust-title-width">
            <h2 className="xm-bottom adjust-left">
              Gather –&nbsp; <br />{" "}
              <span className="light">Share the queue.</span>
            </h2>
          </div>
        </div>

        <div className="project-header">
          <div className="flex center vertical gather-blue">
            <div className="xl-top xl-bottom m-pad-around">
              <img
                src={require("../assets/img/images/Gather/banner.png")}
                style={{ width: "100%" }}
                alt="banner"
              />
            </div>
          </div>
          <div id="top" />
          <div className="very-dark xm-pad-bottom">
            <div className="project-overview center white xl-top">
              <div className="col-6 xm-bottom">
                <h5>Overview</h5>
                <p className="light">
                  We've all been in a situation where we've gotten frustrated
                  with listening to music with friends. Whether it's taking your
                  friend's phone to change a song or fiddling with setting up a
                  new bluetooth connection, controlling what plays is always a
                  difficult task. Luckily, in this project I design the solution
                  that removes this jumble.
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Disciplines</h5>
                <p className="light">Product Design</p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Mission</h5>
                <p className="light">
                  Create the experience for an emerging product idea
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Deliverables</h5>
                <p className="light">Proof of Concept</p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Tools</h5>
                <p className="light">Sketch + InVision</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-body ">
          <div className="scroll-container">
            <Element name="one" className="scroll-element" />
          </div>
          <h3 className="col-6 centered xm-top m-bottom">Backstory</h3>

          <p className="col-6 centered s-bottom">
            At the start of a road trip one weekend, my friends and I were
            looking to jam out in the car. However, the aux was connected to one
            phone and it was difficult to control what was playing. Each of us
            had our own requests and devices, but we were limited to a single
            source.
          </p>
          <p className="col-6 centered s-bottom">
            After a complicated back and forth of fiddling to get the aux cord
            across the car or verbally sharing obscure song names, the idea of
            shared streams had dawned on me. With this idea, there would be no
            more swapping the aux cord across phones. No more shoving your way
            past the party crowd to ask the DJ for a request. By joining a
            stream, people can easily pick and choose what songs be queued next.
          </p>
          <div className="flex tab-wrap">
            <div className="three s-right spacing tab-spacing" />
            <div className="three m-right tab-width m-bottom">
              <img
                src={require("../assets/img/images/Gather/2.png")}
                alt="Cachuma 1"
                style={{ width: "100%" }}
              />
            </div>
            <div className="four tab-width m-bottom">
              <img
                src={require("../assets/img/images/Gather/1.png")}
                alt="Cachuma 2"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="flex s-bottom">
            <div className="three s-right spacing tab-spacing" />
            <div className="seven tab-width">
              <img
                src={require("../assets/img/images/Gather/3.png")}
                style={{ width: "100%" }}
                alt="Cachuma 3"
              />
            </div>
          </div>
          <p className="col-6 centered project-note italic caption-dark l-bottom">
            Lake Cachuma Road Trip, Winter Break 2018
          </p>

          <div className="scroll-container">
            <Element name="two" className="scroll-element" />
          </div>
          <h3 className="col-6 centered xm-top m-bottom">
            Preliminary Research
          </h3>
          <p className="col-6 centered s-bottom">
            Before setting out to design the interface, I sought out to collect
            some initial user inputs, just so that I had a working requirements
            doc for this project. By prioritizing a list of needs versus wants,
            I was better able to address exactly what users were looking for.
          </p>
          <p className="col-6 centered s-bottom">
            Across the points I collected, I noticed an emerging theme of
            reproducing the style other music platforms on the market. They
            wished for a product with a similar modern design language like
            other apps. People noted that they liked apps such as <i>Spotify</i>
            , <i>Airbnb</i>, and <i>Robinhood</i>.
          </p>
          <p className="col-6 centered s-bottom">
            Some other notable comments and questions I jotted down included:
          </p>
          <div className="col-6 centered s-bottom quote-border">
            <p className="quote">
              "Can certain songs be bumped up based on its popularity?”
              <br />
              "What about the people who can take advantage of the system?”
              <br />
              "Will there be any protections against songs that are repeated
              over and over?"
            </p>
          </div>
          <p className="col-6 centered">
            What I had not expected in this process was a need for a system of
            voting. In our conversations, people had suggested to incorporate
            voting, looking out for possible breakpoints or problems. Cases
            where the same song would play over and over, or an inconsistent
            song is added to the steam can easily ruin the listening experience.
            With this in mind, I added the need for voting into my requirements
            list.
          </p>

          <div className="scroll-container">
            <Element name="three" className="scroll-element" />
          </div>
          <h3 className="col-6 centered xm-top m-bottom">
            Creating The Blueprints
          </h3>
          <div className="scroll-container">
            <Element name="four" className="scroll-element" />
          </div>
          <h4 className="col-6 centered xm-top s-bottom">
            Identifying Utility
          </h4>
          <p className="col-6 centered s-bottom">
            To determine the user flow for Gather, I created a user journey of
            the process to better get a sense of what interfaces to design for
            it to fulfill its intended functions. Out of many subfunctions and
            features, the main points boiled down to four:
          </p>
          <div className="flex tab-wrap">
            <div className="col-2-5 s-right spacing tab-spacing" />
            <div className="col-2-5 s-right gather-gray tab-width rounded m-bottom">
              <div className="s-pad">
                <p className="bold">#1</p>
                <p className="tall">Browse popular streams and artists</p>
              </div>
            </div>
            <div className="col-2-5 s-right tab-width gather-gray rounded m-bottom">
              <div className="s-pad">
                <p className="bold">#2</p>
                <p className="tall">Join a stream and add music</p>
              </div>
            </div>
          </div>
          <div className="flex tab-wrap">
            <div className="col-2-5 s-right spacing tab-spacing" />
            <div className="col-2-5 s-right tab-width gather-gray rounded m-bottom">
              <div className="s-pad">
                <p className="bold">#3</p>
                <p className="tall">Vote for music (ranking and removing)</p>
              </div>
            </div>
            <div className="col-2-5 s-right tab-width gather-gray rounded m-bottom">
              <div className="s-pad">
                <p className="bold">#4</p>
                <p className="tall">View your profile, history, and feed</p>
              </div>
            </div>
          </div>

          <p className="col-6 centered s-bottom">
            From the four points, I condensed the design into three main screens
            that met the needs of the different utilities. These included{" "}
            <b>Search</b>, <b>Stream</b>, and <b>Profile</b>. Doing so would
            help users be able to make conscious choices based on their intended
            utility.
          </p>
          <div className="scroll-container col-9 centered s-bottom">
            <img
              className="fit-width"
              src={require("../assets/img/images/Gather/Categories.png")}
              alt="Categories"
            />
          </div>

          <div className="scroll-container">
            <Element name="five" className="scroll-element" />
          </div>
          <h4 className="col-6 centered xm-top s-bottom">Low-Fi Mockups</h4>
          <p className="col-6 centered s-bottom">
            Given these different tasks, I wanted to create an interface that
            reflected these functions. My goal here was to create a natural
            experience that most people were already familiar with. By
            incorporating album art to highlight recognizable songs and making
            the voting process both fun and easy, I wanted the overall feel to
            be <i>light</i> and <i>intuitive</i>.
          </p>

          <p className="col-6 centered s-bottom">
            During my ideation process, I looked to various sources of
            inspiration for structuring my content. Again, I emphasized the need
            for a design that was able to highlight both the music and the
            occasion and made the entire experience lighthearted and fun.
          </p>
          <p className="col-6 centered l-bottom">
            I then translated my initial sketchs into a wireframe mockup to lay
            the foundations for what I had in mind in my final design.
          </p>
        </div>

        <div className="bordure">
          <div
            className="project-body xl-top gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <div className="scroll-container col-11 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Gather/Mockup.png")}
                alt="Mockup"
              />
            </div>
          </div>
        </div>

        <div className="project-body">
          <div className="scroll-container">
            <Element name="six" className="scroll-element" />
          </div>
          <h4 className="col-6 centered xm-top s-bottom">Execution</h4>
          <p className="col-6 centered s-bottom">
            Based on the mockup, I conducted a second study to hone in on how I
            wanted to iron out the kinks and details. Some questions I asked
            myself included:
          </p>
          <div className="col-6 centered m-bottom quote-border">
            <p className="quote">
              "What other apps in this space do this well?"
              <br />
              "What elements best fit the needs for this product?”
              <br />
              “What sort of design language will create the look and feel I want
              for this product?"
            </p>
          </div>

          <h6 className="col-6 centered xm-top s-bottom">Visual Design</h6>
          <p className="col-6 centered s-bottom">
            As uncovered from my initial research, users did not want to see an
            interface that deviated from existing norms. They were very much
            used to the look and functionality of apps within the music category
            and hoped that new products took similar approaches. A look that was
            practical, yet still functional.
          </p>
          <p className="col-6 centered xs-bottom">
            These design elements included:
          </p>
          <ul className="col-6 centered article-font article-list s-bottom">
            <li>Card Layouts for Categories</li>
            <li>Various color gradients</li>
            <li>Modern UI animations</li>
          </ul>
          <p className="col-6 centered">
            With this in mind, I created a visual aesthetic that took cues from
            that of Spotify and Apple Music. Elements such as highlight
            gradients and a dark scheme were at the forefront of the interface.
          </p>

          <h6 className="col-6 centered xm-top s-bottom">Streaming</h6>

          <p
            className="col-6 centered s-bottom"
            style={{ textJustify: "inter-character" }}
          >
            <img
              style={{ float: "right" }}
              src={require("../assets/img/images/Gather/Plus.png")}
              alt="Plus"
            />
            At the core of the app's functionality was the ability to stream and
            add music. To reflect this importance, I chose to incorporate a
            "universal plus sign" in any areas where it was possible to add
            music. Whether that was browing genres, viewing the song queue, or
            voting for songs, the plus symbol would represent the ability to
            search and add new music. This reminds the user of the core
            functionality but also makes for easy transitions between browsing
            new songs and adding them to your list.
          </p>

          <h6 className="col-6 centered xm-top s-bottom">Social Voting</h6>
          <p className="col-6 centered s-bottom">
            One component that users really wanted to see was a social, voting
            element that was incorporated into the design. In order to prevent
            some users from taking advantage of the system, people wanted to be
            able to remove certain songs, or rank them based on how popular they
            were.
          </p>
          <p className="col-6 centered s-bottom">
            Common examples that were mentioned were processes such as Instagram
            or Twitter Polls, Tinder Swipes, and Reddit votes. Out of these
            inspirations, I found that the swiping motion from Tinder best fit
            the visual design of Gather. It made the process friendly,
            lighthearted, and was an action that many were familiar with.
          </p>
          <p className="col-6 centered xs-bottom">
            An outline for the process is as follows:
          </p>
          <ul className="col-6 centered article-font article-list s-bottom">
            <li>
              <b>Swiping left:</b> downvotes the song.
            </li>
            <li>
              <b>Swiping right:</b> upvotes the song.
            </li>
            <li>
              <b>Swiping up:</b> bumps the song to the top (once per XX minutes)
            </li>
          </ul>
          <p className="col-6 centered xl-bottom">
            Depending on the number of people, enough votes for a song would be
            rank it higher and therefore move up the queue. On the flip side, if
            enough people were to downvote, the song would be removed from the
            stream. Allowing the colletive audience to take control over what
            plays next very much resembles a self-governing system. We all love
            democracy right?
          </p>
        </div>

        <div className="bordure">
          <div
            className="project-body gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <div className="scroll-container">
              <Element name="seven" className="scroll-element" />
            </div>
            <h3 className="col-11 centered xm-top l-top m-bottom">
              Final Design
            </h3>
            <div className="scroll-container col-11 centered">
              <img
                className="fit-width"
                src={require("../assets/img/images/Gather/Final.png")}
                alt="Final Design"
              />
            </div>
          </div>
        </div>

        <div
          className="bordure gather-light-blue"
          style={{ paddingBottom: "0px" }}
        >
          <div
            className=" project-body gather-img-bottom-pad"
            style={{
              marginBottom: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingBottom: "0px"
            }}
          >
            <img
              className="fit-width"
              src={require("../assets/img/images/Gather/iphone.png")}
              alt="Final Design"
            />
          </div>
        </div>

        <div className="project-body">
          <div className="scroll-container">
            <Element name="eight" className="scroll-element" />
          </div>
          <h3 className="col-6 centered xm-top m-bottom">Conclusion</h3>
          <p className="col-6 centered s-bottom">
            After having some friends interact with the final design, I observed
            that they were able to make conscious decisions. It was easy for
            them to navigate, create, and add songs to a stream. Some also noted
            that they enjoyed the aesthetic interface. Beyond the aesthetics, I
            wished for Gather to tap into the emotional experiences people share
            when they discover a common musical harmony with one another.
          </p>
          <p className="col-6 centered s-bottom">
            One of the users in the study expressed:
          </p>
          <div className="col-6 centered s-bottom quote-border">
            <p className="quote">
              "It really feels like an app I would get on board with. I would
              definitely share this with my friends."
            </p>
          </div>
          <p className="col-6 centered s-bottom">
            After hearing this, I felt that my goal to find a creative solution
            was validated.
          </p>
          <p className="col-6 centered">
            A big shoutout to the guys in my car (you know who you guys are) for
            giving me the inspiration and opportunity to work on a project like
            this. In the near future, I hope that Gather can solve those
            problems that we shared on our road trip. Perhaps someone may
            already be working on this concept, and I'm excited to see what they
            have in store. Until then, passing the aux will have to do.
          </p>
        </div>

        <div className="project-footer">
          <div className="flex wrap">
            <div className="half project-footer-gray flex right">
              <div className="bottom-width-left xl-right tab-centered">
                <h3 className="white regular super-top">Let's get in touch</h3>
                <p className="white light l-top s-bottom">
                  Tea or Coffee? I'm up for either!
                </p>
                <EmailButton
                  color={"white"}
                  buttonClass={"project-email-button"}
                >
                  <div
                    className="button footer-email-button"
                    title="Click to copy email to clipboard."
                  >
                    Get in touch
                  </div>
                </EmailButton>
              </div>
            </div>
            <div className="project-fake-white half flex">
              <div className="bottom-width-right xl-left">
                <h3 className="regular super-top">Next Project</h3>
                <div className="flex m-top xl-bottom">
                  <div className="salesforce-blue col-6 flex vertical center s-pad-around card-min-width">
                    <img
                      src={require("../assets/img/images/Salesforce/banner.png")}
                      style={{ width: "100%" }}
                      alt="Project Thumbnail"
                    />
                  </div>
                  <div className="s-left bottom-left-mobile-readjust">
                    <h3 className="xs-bottom bold ">Salesforce</h3>
                    <p className="xs-bottom">
                      Redesigning the Customer Success Suite.
                    </p>
                    <Link
                      to="/projects/salesforce"
                      className="button black project-work-button project-fake-white"
                    >
                      View Project
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

export default Flux;
