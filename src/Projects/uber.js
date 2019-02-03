import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import EmailButton from "../Components/EmailButton";
import Particles from "../Components/Particles";
import WorkButton from "../Components/WorkButton";
var Element = Scroll.Element;

class Uber extends Component {
  render() {
    const pieChartOptions = {
      title: "",
      pieHole: 0.6,
      slices: [
        {
          color: "#BEBEBE"
        },
        {
          color: "#7eb1f2"
        },
        {
          color: "#83CBB5"
        },
        {
          color: "#506AB0"
        },
        {
          color: "#232F6B"
        },
        {
          color: "#282828"
        }
      ],
      legend: {
        alignment: "center",
        textStyle: {
          fontSize: 15,
          fontName: "inherit"
        }
      },
      tooltip: {
        showColorCode: true,
        trigger: "inherit"
      },
      chartArea: {
        width: "100%",
        height: "100%"
      },
      fontName: "inherit"
    };
    const barChartOptions = {
      title: "",
      colors: ["#7eb1f2", "#282828"],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "#000000",
          fontSize: 15,
          fontName: "inherit"
        }
      },
      bar: { opacity: "0.5" },
      chartArea: {
        width: "100%",
        height: "100%"
      },
      fontName: "inherit"
    };
    return (
      <div>
        <ul className="pagination" style={{ display: "unset" }}>
          <li className="pagination-visible">
            <WorkButton elementName={"one"}>
              <scrollbutton className="pagination-visible">
                Case study
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"two"}>
              <scrollbutton className="pagination-visible">
                Defining the problem
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"three"}>
              <scrollbutton className="pagination-visible">
                The proposal
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"four"}>
              <scrollbutton className="pagination-visible">Music</scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"five"}>
              <scrollbutton className="pagination-visible">Social</scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"six"}>
              <scrollbutton className="pagination-visible">
                Data &amp; recommendations
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"seven"}>
              <scrollbutton className="pagination-visible">
                Moving forward
              </scrollbutton>
            </WorkButton>
          </li>
        </ul>

        <div className="project-title vertical">
          <div className="col-6 xm-top mobile-xm-top adjust-title-width">
            <h2 className="xm-bottom adjust-left">
              Uber - <br /> <span className="light">Discovery in motion.</span>
            </h2>
          </div>
        </div>

        <div className="project-header">
          <div className="flex center vertical uber-blue">
            <div className="xxl-top xxl-bottom m-pad-around">
              <img
                src={require("../assets/img/images/Uber/banner.png")}
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
                  The KPCB Fellows program is a three month summer internship
                  that pairs students with portfolio companies in order to
                  develop their technical acumen and design skills. Part of the
                  application process was to create a redesign for a portfolio
                  company of my choice. I chose to focus on the User Experience
                  and Interface of Uber as my working platform for this
                  redesign. In this project, I document my process as I
                  researched, strategized, and designed a creative solution to a
                  common problem.
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Disciplines</h5>
                <p className="light">
                  User Research
                  <br />
                  Interface Design
                </p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Mission</h5>
                <p className="light">Feature Design Integration</p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Deliverables</h5>
                <p className="light">
                  Design Proposal
                  <br />
                  Implementation
                </p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Tools</h5>
                <p className="light">
                  Sketch + InVision
                  <br />
                  Principle
                  <br />
                  Photoshop
                  <br />
                  Google Charts
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="one" />
        <div className="project-body">
          <div className="case-study">
            <div className="scroll-container">
              <Element name="one" className="scroll-element" />
            </div>
            <h2 className="col-6 xm-top m-bottom centered">Case study: Uber</h2>
            <p className="col-6 article-font centered s-bottom">
              As an avid fan and frequent user of Uber, I often found it
              challenging to stay connected during the ride. Not the connection
              between a driver and a passenger, but rather the connection
              between myself and the ride experience. In most cases, rides would
              consist of casually scrolling through my phone or an occasional
              chit chat with the driver. Nothing too special here. But what if
              there was a way to really get connected? Deviating from the
              average ride, what could be done to create an entertaining
              environment? When rides should be about exploring culture,
              hotspots, and local fun, my overall experience with Uber was
              uninteresting, mundane.
            </p>
            <p className="col-6 article-font centered s-bottom">
              The siloed nature of Spotify, Snapchat, and Google Maps
              particularly contributes to the difficulty behind finding new
              locations, communicating with others, and enjoying an entertaining
              ride experience. The disintegration of these parts make the
              process of riding rather dry one. Any experience that requires
              users to constantly switching between apps and to manually carry
              over information between such apps should be avoided.
            </p>
            <p className="col-6 article-font centered s-bottom">
              As an app, Uber contains only the bare <i>minimum</i> needed to
              get from point A to B, without tailoring the journey of traveling.
              I believe the future of Uber is dependent not only on its
              relationship with people, but also with its strategic partnerships
              with various industries.
            </p>
            <p className="col-6 article-font centered xl-bottom">
              Realizing this problem, I developed the idea of location-aware
              curated content for riders. My design for Uber centralizes the
              theme of digital exploration by uniting the ride-sharing concept
              with a carefully crafted experience for both newcomers and local
              residents alike. Considering the possibility of joint partnerships
              between Spotify, Snapchat, Google, as well as many other potential
              companies I've listed on this project, this is what I envision the
              relationship to look and feel like.
            </p>
          </div>

          <img
            src={require("../assets/img/images/Uber/intro2.jpg")}
            style={{ width: "100%" }}
            alt="intro"
          />

          <div className="project-research">
            <div className="user-research">
              <div className="scroll-container">
                <Element name="two" className="scroll-element" />
              </div>
              <h2 className="col-6 l-top m-bottom centered">
                Defining the problem
              </h2>
              <p className="col-6 article-font centered s-bottom">
                Before I dove into the chunk of the design process, I declared
                several high-level goals:
              </p>
              <ul
                className="col-6 centered article-font half-black"
                style={{
                  listStyleType: "disc",
                  listStylePosition: "outside",
                  lineHeight: "30px"
                }}
              >
                <li className="xs-bottom">
                  Sustain a customizable experience to give users control of
                  their personalized content.
                </li>
                <li className="xs-bottom">
                  Construct a solution around Uber’s already existing ecosystem
                  not only to incorporate preexisting customers, but to also
                  introduce new users onto the platform.
                </li>
                <li className="xs-bottom">
                  Build accordingly for the long-term value and not just the
                  initial product concepts.
                </li>
              </ul>
              <h3 className="col-6 m-top ss-bottom centered">User research</h3>
              <p className="col-6 centered article-font s-bottom">
                In order to assess the distribution of the app space, I first
                had to take a count of the most popular platforms in order to
                understand which curators to incorporate and which users to
                target. So, I established a few goals for my user surveys:
                explore the possible user journeys during the ride experience,
                discover popular app categories and their user interaction, and
                to find specific curators within those categories.
              </p>
              <p className="col-6 centered article-font l-bottom">
                To generate this data, I created a Google Survey that contained
                several questions regarding the Uber ride experience. The graph
                below indicates the most popular app categories that amongst
                users.
              </p>

              <div className="uber-graphs">
                <div className="graph1">
                  <h4
                    className="col-6 m-top xs-bottom centered"
                    style={{ fontSize: "1.3em", fontWeight: "500" }}
                  >
                    Popular App Categories During Rides
                  </h4>
                  <div className="col-6 centered xs-bottom">
                    <Chart
                      chartType="PieChart"
                      graph_id="PieChart"
                      data={[
                        ["Genres", "Hours per Day"],
                        ["Social Networking", 11],
                        ["Entertainment", 9],
                        ["Navigation", 5],
                        ["Mobile Games", 3],
                        ["News", 1],
                        ["Other", 3]
                      ]}
                      options={pieChartOptions}
                      width="100%"
                      height="400px"
                    />
                  </div>
                  <p className="col-6 centered project-note italic caption-dark l-bottom">
                    Rider's app of choice were social networking apps &ndash; by
                    34%, which was then followed by the entertainment, and
                    navigation categories.
                  </p>
                </div>

                <div className="graph2">
                  <h4
                    className="col-6 s-bottom centered"
                    style={{ fontSize: "1.3em", fontWeight: "500" }}
                  >
                    Ride Experience Rating
                  </h4>
                  <div className="col-6 centered xs-bottom">
                    <Chart
                      chartType="Bar"
                      graph_id="Bar"
                      data={[
                        [
                          "Ride Type",
                          "Overall Satisfaction",
                          "Entertainment Rating"
                        ],
                        ["Solo", 8.6, 7.5],
                        ["Friends & Family", 7.5, 6.9],
                        ["Pool", 5.4, 3.2]
                      ]}
                      options={barChartOptions}
                      width="100%"
                      height="300px"
                    />
                  </div>
                  <p className="col-6 centered project-note italic caption-dark l-bottom">
                    Solo riders tended to have to most overall satifaction of
                    their ride, while pool riders had the least overall and
                    entertainment satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="user-interviews">
              <h3 className="col-6 m-top ss-bottom centered">
                User interviews
              </h3>
              <p className="col-6 centered article-font s-bottom">
                After finishing my initial surveying, I set out to conduct
                several user interviews. I personally believe that individual
                interviews can reveal the thinking processes and give me greater
                insight around the user’s habits. Since I already had
                constructed a general understanding of where the problem was
                arising, this time, I based my questions around not only
                validating those points but also uncovering what happens behind
                the scenes.
              </p>
              <p className="col-6 centered article-font m-bottom">
                In order to remove any heuristics, I took on a neutral position
                in my questioning. I made sure to incorporate a more objective
                role to avoid the common interview pitfalls. I was able to do
                this through open ended questions and refraining from using
                certain keywords that created confirmation biases. Some of the
                questions I asked included:
              </p>
              <ul
                className="col-6 centered article-font half-black"
                style={{
                  listStyleType: "disc",
                  listStylePosition: "outside",
                  lineHeight: "30px"
                }}
              >
                <li className="xs-bottom">
                  What are the average length of your rides?
                </li>
                <li className="xs-bottom">
                  How would you make the ride experience more enjoyable? More
                  entertaining?
                </li>
                <li className="xs-bottom">
                  How familiar are you with the 3rd Party apps available on the
                  Uber app?
                </li>
                <li className="xs-bottom">
                  What kind of information do you generally receive during a
                  ride?
                </li>
                <li className="xs-bottom">
                  On a scale of 1 to 10, how important do you see music playing
                  a role in making the ride a good one?
                </li>
              </ul>
              <p className="col-6 centered article-font m-top l-bottom">
                In total, I interviewed eight individuals: six college students
                and six working professionals. Using their responses, I took
                note of a few reoccurring themes.
              </p>
              <div className="flex tab-center tab-wrap m-bottom">
                <div className="col-3 tab-spacing spacing" />
                <div className="col-3 tab-width m-right very-dark rounded m-bottom image-shadow">
                  <div className="s-pad">
                    <p className="white bold">#1</p>
                    <p className="tall white s-bottom">Preference</p>
                    <p className="white light">
                      Users prefer apps like Yelp and Google Maps as a source to
                      find new destinations.
                    </p>
                  </div>
                </div>
                <div className="col-3 tab-width m-right very-dark rounded m-bottom image-shadow">
                  <div className="s-pad">
                    <p className="white bold">#2</p>
                    <p className="tall white s-bottom">Awareness</p>
                    <p className="white light">
                      Most riders are not aware of the 3rd party features
                      avaiable on Uber.
                    </p>
                  </div>
                </div>
                <div className="col-3 tab-width very-dark rounded m-bottom image-shadow">
                  <div className="s-pad">
                    <p className="white bold">#3</p>
                    <p className="tall white s-bottom">Context</p>
                    <p className="white light">
                      Social interaction and in-ride entertainment are aspects
                      users are looking for during a ride.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-architecture">
              <h3 className="col-6 m-top ss-bottom centered">
                Current architecture
              </h3>
              <p className="col-6 centered article-font l-bottom">
                After completing all my people research, I performed a content
                analysis and user flow around the existing experience.
                Considering the complexity of the pre-boarding process, it was
                not hard to imagine why the user base was getting weary of the
                ride experience.
              </p>
              <img
                src={require("../assets/img/images/Uber/flow.png")}
                style={{ width: "100%" }}
                alt="flow"
                className="s-bottom"
              />
              <p className="col-6 centered italic half-black project-note">
                A map of the funnels, categorized by attraction search, location
                search, map view, and ride request.
              </p>
            </div>
          </div>
        </div>

        <div className="project-body">
          <div className="project-proposal centered vertical very-dark">
            <div className="project-proposal-section">
              <div className="scroll-container">
                <Element name="three" className="scroll-element" />
              </div>
              <h2 className="col-6 xl-top ss-bottom centered white super-top ">
                The proposal
              </h2>
              <p className="col-6 article-font centered xl-pad-bottom white l-bottom">
                A fully integrated entertainment suite for an enjoyable,
                non-stop experience.
              </p>
            </div>
          </div>

          <h3 className="col-6 l-top s-bottom centered">App lineup</h3>
          <p className="col-6 article-font centered bottom s-bottom">
            A homage to Uber's familiar Messages screen, I relied on the
            preexisting stack layout, but with each card ordered in a non-linear
            fashion. Cards without fixed positions allow for us to curate each
            experience depending on the user's needs and preferences. If users
            indicated that good music was an important factor in an enjoyable
            ride experience, their Spotify card would be pushed to the top of
            the stack, therefore making it within a convenient distance.
          </p>
          <p className="col-6 article-font centered l-bottom">
            Using the data I gathered from my market research, I was able to
            generalize the market’s needs into <strong>three </strong>
            categories, each of which highlights a different aspect of the ride.
            By designating the information architecture into conceptually
            distinct classes, we can simplify the end user experience.
          </p>

          <div className="col-6 project-fake-white classic-black rounded hyp-pad centered l-bottom">
            <div className="mobile-hyp l-bottom">
              <p className="bold s-bottom centered ">App frameworks</p>
              <p className="hyp-top">Music</p>
              <p className="tall s-bottom">
                Location aware <span className="hyp-light">music curation</span>
              </p>
              <p className="hyp-top">Social</p>
              <p className="tall s-bottom">
                Exclusive <span className="hyp-light">social content</span>
              </p>
              <p className="hyp-top">Data &amp; Information</p>
              <p className="tall">
                Personalized{" "}
                <span className="hyp-light">local recommendations</span>
              </p>
            </div>
            <div className="mobile-uber-apps centered">
              <img
                src={require("../assets/img/images/Uber/uber-apps.png")}
                style={{ width: "100%" }}
                alt="uber apps"
              />
            </div>
          </div>
          <p className="col-6 article-font centered bottom s-bottom">
            Using these basic labels, I then outlined the map of the new
            interface as a whole, to make sure each one was it its proper place.
          </p>
          <p className="col-6 article-font centered bottom s-bottom">
            When it came to choosing an application that best fit the needs of
            the situations, I saw degree of curation and cultural relevancy as
            the two biggest factors. Eventually, I found that{" "}
            <strong>Spotify</strong>, <strong>Snapchat</strong>, and{" "}
            <strong>Google Maps </strong> best matched all the points I was
            looking for, as all three apps consist of a high level of content
            flexibility that is unmatched by any of its competitors. From
            playlists, photo filters, and recommendations, each application
            provides a endless number of experiences just waiting to be
            discovered.
          </p>
          <p className="col-6 article-font centered bottom xl-bottom">
            By listening to the needs of the end user, Uber can create a
            personalized and authentic ride experience. My hope is that as Uber
            continues to cover more cities and countries, people can expect each
            area to have its own unique categories, depending on what
            experiences they have to offer.
          </p>
        </div>

        <div className="bordure">
          <div className="project-fake-white project-body">
            <div className="scroll-container">
              <Element name="four" className="scroll-element" />
            </div>
            <h3 className="col-6 l-top m-bottom centered">Music</h3>
            <p className="col-6 article-font centered xl-bottom half-black">
              Continuing with the city example, I chose to delve into the unique
              sound of San Francisco. Generally when people think of the Bay
              Area, most do not consider its relevance within today's music
              industry. That's where playlists come into play.
            </p>
            <div className="uber-music-section flex wrap">
              <div className="half right">
                <div className="uber-music-text col-9 centered">
                  <p className="bold ss-bottom">Playlists</p>
                  <p className="article-font s-bottom">
                    When it comes to creating and sharing playlists, Spotify is
                    undoubtedly a leader in this field. From algorithmically
                    generated recommendations to professionally curated music
                    fit for nearly any type of setting or mood, Spotify is the
                    perfect medium where people can create and discover new
                    sounds. So, I implemented an architecture that reflects this
                    ideology.
                  </p>
                  <p className="article-font l-bottom">
                    Taking cues and adding onto the Spotify design language,
                    user's can play whatever their heart desires or listen to
                    the popular music in their area. Recognized Bay Area artists
                    include <i>G-Eazy</i>, <i>Marc E. Bassy</i>, <i>Kehlani</i>,
                    and this customized playlist contains everything you need to
                    get accustomed.
                  </p>

                  <p className="bold m-top ss-bottom">Smart curation</p>
                  <p className="article-font l-bottom">
                    The best way to execute this integration would be to create
                    "smart" content. As different countries and regions produce
                    a wide variety of music, users can experience the full
                    musical breadth based on their location. For example, I can
                    imagine Spotify promoting K-Pop for users in South Korea.
                    The possibilities moving forward are endless.
                  </p>
                </div>
              </div>
              <div className="half">
                <div className="uber-gif centered col-9">
                  <img
                    src={require("../assets/img/images/Uber/Spotify.gif")}
                    alt="Spotify.gif"
                    className="image-shadow"
                  />
                  <p className="centered project-note italic caption-dark s-top l-bottom">
                    The resizable Spotify card will gives users access to smart
                    playlists depending on their location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-body l-pad-bottom">
          <div className="scroll-container">
            <Element name="five" className="scroll-element" />
          </div>
          <h3 className="col-6 l-top m-bottom centered">Social</h3>
          <p className="col-6 article-font centered half-black xl-bottom">
            As far as in-ride social entertainment, users resort to messaging,
            videos, and social media feeds outside of the Uber app. The reality
            is that these form of online interaction happen exclusively outside
            of the ride context. As we want to tailor a discovery experience,
            integrating social media into Uber is a key factor.
          </p>
          <div className="uber-music-section flex wrap">
            <div className="half right">
              <p className="col-9 article-font centered m-bottom">
                Snapchat is well recognized as a social media platform that
                personalizes your messages and stories that you can share with
                friends. At any point during the ride should the user want to
                share their location or simply message their friends, Uber
                exclusive filters and Bitjomi stickers create incentives for
                riders to take part in the fun. While location-specific filters
                already exist for Snapchat, adding another layer of unlockable
                content through Uber greatly increases the brand's visibility
                within social media. Stories and snaps would essentially
                function like ads, thus giving Uber free marketing and word of
                mouth.
              </p>
              <p className="col-9 bold m-top ss-bottom centered">
                Branching out
              </p>
              <p className="col-9 article-font centered l-bottom">
                While I relied on Snapchat as a primary example, we are not
                limited when we consider other 3rd party integration. Moving
                forward, I envision apps such as <strong>WeChat</strong>,{" "}
                <strong>KakaoTalk</strong>, and <strong>LINE</strong> to join
                the mix, thus giving the user even greater flexibility to choose
                the platform of their choice. By streamlining the process of
                online interaction during rides, we are effectively keeping the
                user within the same application. Reducing confusion while still
                creating a fun environment is the objective of the Snapchat
                card.
              </p>
            </div>
            <div className="half">
              <div className="uber-gif centered col-9">
                <img
                  src={require("../assets/img/images/Uber/Snapchat.gif")}
                  alt="Snapchat.gif"
                  className="image-shadow"
                />
                <p className="centered project-note italic caption-dark s-top l-bottom">
                  The Snapchat card no longer requires you to move to the
                  Snapchat app. All the exclusive unlockable filters would be
                  accessible within the Uber app.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="four" />

        <div className="bordure">
          <div className="project-fake-white project-body">
            <div className="scroll-container">
              <Element name="six" className="scroll-element" />
            </div>
            <h3 className="col-6 l-top m-bottom centered">
              Data &amp; recommendations
            </h3>
            <p className="col-6 article-font centered xl-bottom half-black">
              One very important aspect in all of this, is keeping the rider
              updated on their journey. Without a reference of where the you
              going or what your destination has in store, riders are
              potentially risking getting lost or having to call for a new ride.
              Google Maps has already cemented itself as a information
              powerhouse for these very situations.
            </p>

            <div className="uber-music-section flex wrap">
              <div className="half right">
                <p className="col-9 article-font centered s-bottom">
                  That's why the Google Maps card displays information such as:
                  Popular Times &amp; Live View, Open Hours, Phone Number, and
                  Website. This data is ergonomically designed to only display
                  what is necessary and therefore removes the clutter seen in
                  other ridesharing platforms.
                </p>
                <p className="col-9 article-font centered m-bottom">
                  By having this knowledge, users can find answers to many of
                  the questions that may arise during the ride. This card makes
                  accessing all the information you need easy and
                  confusion-preventative. Like the previous two cards I've
                  designed, the Google Maps card element is complemented with
                  the same Google material design that people are familiar with.
                </p>
                <p className="col-9 bold ss-bottom centered">Recommendations</p>
                <p className="col-9 article-font centered l-bottom">
                  Just like Yelp, Google Maps also has built in features that
                  curate popular destinations and restaurants based on your
                  search history. Adding this component into the ride experience
                  would reinforce user's long term values into Uber as a hub for
                  discovering information about the area around you. This data
                  would then feed back into Google, therefore making
                  recommendations even more smarter.
                </p>
              </div>
              <div className="half">
                <div className="uber-gif centered col-9">
                  <img
                    src={require("../assets/img/images/Uber/Google.gif")}
                    alt="Google.gif"
                    className="image-shadow"
                  />
                  <p className="centered project-note italic caption-dark s-top l-bottom">
                    The expandable Google Card contains more information about
                    the Location &ndash; including hours, phone number, and
                    website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="five" />

        <div className="project-body super-bottom xl-top">
          <div className="moving-forward">
            <div className="scroll-container">
              <Element name="seven" className="scroll-element" />
            </div>
            <h2 className="col-6 centered xm-top m-bottom">Moving forward</h2>
            <p className="col-6 article-font centered m-bottom">
              As I continue to research the validities of my proposal, I need to
              perform additional usability tests to close any assumptions I may
              have made during my design process. A few areas of concern I have
              include:
            </p>
            <ul
              className="col-6 centered article-font half-black m-bottom"
              style={{
                listStyleType: "disc",
                listStylePosition: "outside",
                lineHeight: "30px"
              }}
            >
              <li className="xs-bottom">
                Exploring new content categories outside of the western sphere
              </li>
              <li className="xs-bottom">
                Alternatives for users who are not registered for 3rd party
                applications
              </li>
              <li>
                Data privacy, given that we are interconnecting several app
                suites under one umbrella
              </li>
            </ul>
            <p className="col-6 bold ss-bottom centered">Final thoughts</p>
            <p className="col-6 centered article-font">
              While these issues may eventually take me back to the drawing
              board, I look forward to someday seeing these features I've
              described here. Developing a love for your city is capturing the
              beauty of its music, content, and local favorites. At the end of
              the day, the future of Uber lies in its ability to connect riders
              with the city. Getting involved in your local scene never sounded
              more fun and easy.
            </p>
          </div>
        </div>

        <div className="project-footer">
          <div className="flex wrap">
            <div className="half project-footer-gray flex right">
              <div className="bottom-width-left xl-right tab-centered">
                <h3 className="white regular super-top">Let's get in touch</h3>
                <p className="white light l-top s-bottom">
                  I am always available to chat! I am currently looking for a
                  full-time product designer positions in the San Francisco Bay
                  Area.
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
                <div className="flex m-top super-bottom">
                  <div className="flux-green col-6 flex vertical center s-pad-around particle-card-min-width">
                    <Particles width="160px" height="160px" valueArea="75" />
                  </div>
                  <div className="s-left bottom-left-mobile-readjust">
                    <h3 className="xs-bottom bold ">Flux</h3>
                    <p className="xs-bottom">
                      In this project, I focus on common user interface
                      animations used in the industry and the mechanisms behind
                      their operations.
                    </p>
                    <Link
                      to="/projects/flux"
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

export default Uber;
