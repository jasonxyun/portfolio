import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import EmailButton from "../Components/EmailButton";
import Particles from "../Components/Particles";
import WorkButton from "../Components/WorkButton";
var Element = Scroll.Element;

class Flux extends Component {
  render() {
    return (
      <div class="project">
        <ul className="pagination" style={{ display: "unset" }}>
          <li className="pagination-visible">
            <WorkButton elementName={"one"}>
              <scrollbutton className="pagination-visible">
                History
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"two"}>
              <scrollbutton className="pagination-visible">
                Symbolism
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"three"}>
              <scrollbutton className="pagination-visible">
                Popping
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"four"}>
              <scrollbutton className="pagination-visible">
                Shaders
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"five"}>
              <scrollbutton className="pagination-visible">
                Shape Shifter
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"six"}>
              <scrollbutton className="pagination-visible">
                Final Thoughts
              </scrollbutton>
            </WorkButton>
          </li>
        </ul>

        <div className="project-title vertical">
          <div className="col-6 xm-top mobile-xm-top adjust-title-width">
            <h2 className="xm-bottom adjust-left">
              Flux –&nbsp; <br />{" "}
              <span className="light">
                Continuous change, passage, or movement.
              </span>
            </h2>
          </div>
        </div>

        <div className="project-header">
          <div className="flex center vertical flux-green">
            <Particles width="100vw" height="40vw" valueArea="175" />
          </div>
          <div id="top" />
          <div className="very-dark xm-pad-bottom">
            <div className="project-overview center white xl-top">
              <div className="col-6 xm-bottom">
                <h5>Overview</h5>
                <p className="light">
                  From the very start to the finish of the design process,
                  animations are primarily introduced towards the end of the
                  project. Needless to say, it does not take away from its
                  significance. They are the crucial chapters of an interface
                  that determines its overall <i>look</i> and <i>feel</i>. In
                  this project, I dive into a handful of the popular animations
                  that designers utilize in the industry today.
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Disciplines</h5>
                <p className="light">UI Research</p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Mission</h5>
                <p className="light">
                  Study the popular animations used in the industry
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Deliverables</h5>
                <p className="light">Report</p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Tools</h5>
                <p className="light">
                  Sketch + InVision
                  <br />
                  Principle
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-body">
          <div className="col-6 centered flux-history">
            <div className="scroll-container">
              <Element name="one" className="scroll-element" />
            </div>
            <h2 className=" xm-top m-bottom">History</h2>
            <p className=" article-font s-bottom">
              Since the dawn of web design, the early stages of the user
              experience interactions were mainly dealt with how a user
              physically interacted with a keyboard and mouse. Today, this has
              extended to areas such as intuitive user interfaces, tailored
              content, and adaptable interactions. What these have in common is
              that they all work together to better our digital experience. With
              technology so ingrained into the world, it is essential for the
              experience to be both personalized, and universally ergonomic.
            </p>
            <p className=" article-font xl-bottom">
              Animations play a key role in this vision for the digital future.
              The harmony between humans and technology can be achieved through
              methods that seek to streamline and therefore "humanize" the
              process. By removing the robotic-like nature of technology,
              animations bring about natural flow into the system.
            </p>
          </div>

          <div className="col-6 centered flux-symbolism">
            <div className="scroll-container">
              <Element name="two" className="scroll-element" />
            </div>
            <h2 className="l-top m-bottom">Symbolism</h2>
            <div className="s-bottom centered flux-gif">
              <img
                src={require("../assets/img/images/Flux/symbolism.gif")}
                alt="Symbolism.gif"
              />
            </div>
            <p className="project-note italic caption-dark s-top l-bottom">
              An example of an animation that switches between a menu and cancel
              icon.
            </p>
            <p className="article-font s-bottom">
              Possibly the rarest of the 4 listed on this page is the animation
              of symbols. They often take the form of navigation buttons, cancel
              buttons, and arrows. These animations let the user undo actions,
              proceed with actions, or switch between tasks.
            </p>
            <p className="article-font s-bottom">
              In its essence, symbol animations are fast and effective ways to
              provide visual feedback on events. For example, when opening a
              menu bar, the "onChange" event would change the menu icon into a
              close icon, therefore letting the user know that an event has
              occurred.
            </p>
            <p className="article-font s-bottom">
              In my opinion, seeing shapes morph into different symbols is
              really fascinating (and also oddly satisfying). The number of
              shapes you can use are limitless.
            </p>
            <p className="article-font m-bottom">
              I would hope that they would be implemented more in web pages, as
              well as phone applications for create fluid, smart transitions
              between distinct activities.
            </p>
          </div>

          <div className="col-6 centered flux-popping">
            <div className="scroll-container">
              <Element name="three" className="scroll-element" />
            </div>
            <h2 className="l-top m-bottom">Popping</h2>
            <div className="s-bottom centered flux-gif">
              <img
                src={require("../assets/img/images/Flux/popping.gif")}
                alt="Popping.gif"
              />
            </div>
            <p className="project-note italic caption-dark s-top l-bottom">
              Textbox popups can notify users of new alerts or messages they can
              read.
            </p>
            <p className=" article-font s-bottom">
              Most commonly seen in messenger apps such as iOS Messenger, the
              pop-up is a great way to display hidden information in a playful,
              lively manner.
            </p>
            <p className=" article-font s-bottom">
              Another well known industry example for popping is iPhone's 3D
              Touch, which uses a peek and pop mechanism to display hidden
              information in a new way. Until now, it has been a click to
              display system, but the introduction of 3D Touch has introduced a
              press to reveal interaction. This goes to show that new methods of
              interactions are continually emerging. Who knows what sort of
              animation we can see in the future.
            </p>
            <p className=" article-font m-bottom">
              Here in this demonstration, I've added a 'Spring' transition to
              the height of the square, giving this pop-up a lot more 'pop'. The
              result is a panel that seems to come alive, ready for the user to
              view.
            </p>
          </div>

          <div className="col-6 centered flux-shaders">
            <div className="scroll-container">
              <Element name="four" className="scroll-element" />
            </div>
            <h2 className="l-top m-bottom">Shaders</h2>
            <div className="s-bottom centered flux-gif">
              <img
                src={require("../assets/img/images/Flux/shaders.gif")}
                alt="Shaders.gif"
              />
            </div>
            <p className="project-note italic caption-dark s-top l-bottom">
              Colors can switch from light to dark (or vice versa), indicating
              that a cta button is available to press.
            </p>
            <p className="article-font s-bottom">
              The most subtle of the bunch, the shader is one of the most common
              forms of animations found within any website or application.
              Events such as the long press or the tap trigger changes in
              colors, but usually from light to dark within the same color
              scheme, or vice versa. Other forms of shaders include changing the
              opacity or fill of certain shapes.
            </p>
            <p className="article-font s-bottom">
              Shaders are a very clean and simple way for the user to get visual
              feedback on what they are selecting or what can be selected. For
              example, if you hover over a button and the color changes from
              light to dark, it probably means that it is selectable. On the
              other hand, if a button that was black changes into a light gray,
              it is most likely not clickable.
            </p>
            <p className="article-font m-bottom">
              Animations work, no matter how subtle, and shaders are testaments
              to this statement.
            </p>
          </div>

          <div className="col-6 centered flux-shape-shifter">
            <div className="scroll-container">
              <Element name="five" className="scroll-element" />
            </div>
            <h2 className="l-top m-bottom">Shape Shifter</h2>
            <div className="s-bottom centered flux-gif">
              <img
                src={require("../assets/img/images/Flux/shape-shifter.gif")}
                alt="Shape-Shifter.gif"
              />
            </div>
            <p className="project-note italic caption-dark s-top l-bottom">
              Confirmation animations signal to the user that the task is
              completed.
            </p>
            <p className=" article-font s-bottom">
              The most dynamic of them all, is the morphing of groups. This can
              be from circles to squares, rectangles to trapezoids. The
              possibilities are just endless.
            </p>
            <p className="article-font s-bottom">
              These are often utilized in post-selection menus when a user
              clicks 'yes' or any equivalent option. Operations such as sending
              money or processes that require a secondary confirmation regularly
              use this type of animation.
            </p>
            <p className="article-font l-bottom">
              Equally, there are many cases in which this is poorly executed.
              Animations with any sort of lag or staggering should not be used
              at all. Overall, I would say that shape shifting animations should
              be done in a straightforward way and be used moderately.
              Distorting too many objects too much can often strain load
              performance. Animations that are too recurrent also tend to
              clutter the sleekness of applications.
            </p>
          </div>

          <div className="col-6 centered super-bottom xl-top">
            <div className="scroll-container">
              <Element name="six" className="scroll-element" />
            </div>
            <h2 className=" xm-top m-bottom">Final Thoughts</h2>
            <p className=" article-font s-bottom">
              All in all, animations are excellent way to provide visual
              feedback for the user. When done meaningfully, they add a lot more
              elegance and refinement in otherwise mundane tasks. With new
              mediums and technologies introduced into the market, I am excited
              to see what the future of animations has in store.
            </p>
            <p className=" article-font">
              Although I have commonly overlooked UI animations in the past, I
              now appreciate their influence in shaping my understanding of what
              great design is really about. Thank you for reading!
            </p>
          </div>
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
                <h3 className="regular super-top">Next project</h3>
                <div className="flex m-top xl-bottom">
                  <div className="flickr-orange col-6 flex vertical center s-pad-around card-min-width">
                    <img
                      src={require("../assets/img/thumbnails/flickr_project_thumbnail.png")}
                      style={{ width: "100%" }}
                      alt="flickr project thumbnail"
                    />
                  </div>
                  <div className="s-left bottom-left-mobile-readjust">
                    <h3 className="xs-bottom bold ">Flickr Design System</h3>
                    <p className="xs-bottom">
                      I envisioned a redesign for the photo sharing platform,
                      Flickr
                    </p>
                    <Link
                      to="/projects/flickr"
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
