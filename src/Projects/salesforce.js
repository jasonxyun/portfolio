import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import EmailButton from "../Components/EmailButton";
import WorkButton from "../Components/WorkButton";
var Element = Scroll.Element;

class Salesforce extends Component {
  render() {
    return (
      <div className="project">
        <ul className="pagination" style={{ display: "unset" }}>
          <li className="pagination-visible">
            <WorkButton elementName={"one"}>
              <scrollbutton className="pagination-visible">
                Context
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"two"}>
              <scrollbutton className="pagination-visible">
                1. Restructing The Content
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"three"}>
              <scrollbutton className="pagination-visible">
                2. Flexibility Through Personalization
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"four"}>
              <scrollbutton className="pagination-visible">
                3. Applying The Lightning Design System
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"five"}>
              <scrollbutton className="pagination-visible">
                Final Design
              </scrollbutton>
            </WorkButton>
          </li>
          <li className="pagination-visible">
            <WorkButton elementName={"six"}>
              <scrollbutton className="pagination-visible">
                The End!
              </scrollbutton>
            </WorkButton>
          </li>
        </ul>

        <div className="project-title vertical">
          <div className="col-6 xm-top mobile-xm-top adjust-title-width">
            <h2 className="xm-bottom adjust-left">
              Salesforce –&nbsp; <br />{" "}
              <span className="light">Redesigning the Suite</span>
            </h2>
          </div>
        </div>

        <div className="project-header">
          <div className="flex center vertical salesforce-banner-blue">
            <div className="xl-top l-bottom m-pad-around">
              <img
                src={require("../assets/img/images/Salesforce/banner.png")}
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
                  For the summer of 2017, I've had the privilege to be a part of
                  the Salesforce family of designers. Out of the many projects I
                  was assigned to, this one in particular stuck out because it
                  required me to holistically think about all factors of the
                  user experience. From the ground up, our creative studio team
                  restructured the content, visual cues, and user journeys for
                  the Salesforce Customer Success Suite.
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Role</h5>
                <p className="light">UX Design Intern</p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Mission</h5>
                <p className="light">
                  Redesign suite to meet modern design standards
                </p>
              </div>
            </div>
            <div className="project-overview center white">
              <div className="col-3 half-tab-width s-bottom">
                <h5>Deliverables</h5>
                <p className="light">Redesign</p>
              </div>
              <div className="col-3 half-tab-width s-bottom">
                <h5>Timeframe</h5>
                <p className="light">Summer 2017</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-body ">
          <div className="scroll-container">
            <Element name="one" className="scroll-element" />
          </div>
          <h3 className="col-6 centered xm-top m-bottom">Context</h3>
          <p className="col-6 centered s-bottom">
            When I first joined the Salesforce team, I was assigned under the
            Customer Success arm of the company. Although I knew little as to
            what their design process looked like, I soon learned their core
            values were rarely seen in other companies of its kind. With any
            purchase of their product, they strived to create a relationship
            with customer to help drive their growth and success. Even their
            website states:
          </p>
          <div className="col-6 centered s-bottom quote-border">
            <p className="quote">
              "We are a team of trusted advisors, partners, and experts crucial
              to the success of our customers. We help customers unleash the
              full power of Salesforce, find and implement technical solutions,
              and provide guidance on how to build new products for our clients’
              needs."
            </p>
          </div>
          <p className="col-6 centered s-bottom">
            As part of the post-sale customer onboarding process, my specific
            team, <i>Experience Studio at Scale</i>, was an interdisciplinary
            melting pot of talented designers and creatives that curated this
            very experience. However, it did have its shortcomings. As their
            Customer Success hub was nearing the end of its life cycle, it
            needed to be fully revamped from the bottom-up.
          </p>
          <h4 className="col-6 centered s-bottom">At Salesforce</h4>
          <p className="col-6 centered xs-bottom">
            Within the scope of my internship, my team and I were asked to
            tackle three main challenges:
          </p>
          <ul className="col-6 centered article-font article-list s-bottom">
            <li>Restructure the content architecture</li>
            <li>Integrate personalization through personas</li>
            <li>Incorporate the Salesforce Lightning Design System (SLDS)</li>
          </ul>
        </div>

        <div className="title-section centered salesforce-pink white">
          <div className="scroll-container">
            <Element name="two" className="scroll-element" />
          </div>
          <h3 className="col-8 centered">1. RESTRUCTURING THE CONTENT</h3>
        </div>
        <div className="project-body ">
          <h4 className="col-6 centered xm-top m-bottom">The Vision</h4>
          <p className="col-6 centered s-bottom">
            The Customer Success Suite primarily functioned as a one-stop portal
            for all the Salesforce product resources. It introduced user guides,
            first steps, and tools required to start using the system. This was
            done through linking various end-user portals like{" "}
            <a
              href="https://trailhead.salesforce.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link original-blue"
            >
              Trailhead
            </a>{" "}
            (Salesforce's proprietary learning platform). However, that only
            meant the suite existed as a directory of directories. From a
            customer standpoint, it only redirected them elsewhere. In our
            preliminary meetings, we starting asking questions like:
          </p>
          <div className="col-6 centered s-bottom quote-border">
            <p className="quote">
              "What are the observable bottlenecks or roadblocks in our system
              currently?"
              <br />
              "Based on page clicks, where does it seem like customers are
              getting lost?"
            </p>
          </div>
          <p className="col-6 centered s-bottom">
            The new vision for the suite was to incorporate every Salesforce
            product along with curated reference guides. Given the various types
            of customers (administrator, business analyst, sales manager,
            developer, and so on), this setup required an architecture that
            comprehensively targeted all the different use cases. It was not an
            easy task, but our team was up for the challenge.
          </p>
        </div>

        <div className="bordure">
          <div
            className="project-body xl-top gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <h4 className="col-10 centered m-bottom">
              Evaluating The Current Schema
            </h4>
            <div className="scroll-container col-10 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/current.png")}
                alt="current"
              />
            </div>
          </div>
        </div>

        <div className="project-body ">
          <p className="col-6 centered xm-top s-bottom">
            Prior to my addition to the team, the current design architecture
            was akin to the 2010 era of Salesforce branding. Products were
            separated by tabs and each section was arranged in a accordion-style
            layout. Visually, it was divergent from the new Lightning Design
            System, which had a much more modern look and appeal.
          </p>
          <p className="col-6 centered">
            As for the content arrangement, some resources were buried 4 levels
            down and made the overall experience hard to navigate. It gave users
            zero sense of direction and was put user's in a roundabout cycle of
            hopping between different pages. For myself, I found that it made a
            frustrating first impression and did not reflect the capabilities of
            the Salesforce product line. It definitely needed some love.
          </p>
          <h4 className="col-6 centered xm-top m-bottom">Brainstorming</h4>
          <div className="scroll-container col-7 s-bottom centered ">
            <img
              className="fit-width"
              src={require("../assets/img/images/Salesforce/ideation.png")}
              alt="ideation"
            />
          </div>
          <p className="col-7 centered project-note italic caption-dark l-bottom">
            Preliminary thinktank with content managers, where we discussed and
            mapped out all the various user journeys for Salesforce customers
          </p>
          <p className="col-6 centered s-bottom">
            Thanks to our team's interdisciplinary background of content
            management, experience design, and copy writing, we were able to
            quickly recognize our course of action. We started jotting down the
            points we liked, and those that needed to be scrapped altogether. We
            then mapped out the types of content that were critical and those
            that were secondary or not as important.
          </p>
          <p className="col-6 centered">
            From there, we began to sort out the various products and their
            relations to specific personas. For example, Marketing Cloud was
            closely tied to those under marketing, social media, product
            marketing, and digital marketing roles. With this system in place,
            we were better able to assess the lay of the land.
          </p>
        </div>

        <div className="bordure">
          <div
            className="project-body xl-top gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <h4 className="col-8 centered m-bottom">Creating The Funnels</h4>
            <div className="scroll-container col-8 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/architecture.png")}
                alt="architecture"
              />
            </div>
          </div>
        </div>

        <div className="project-body">
          <h6 className="col-6 centered xm-top m-bottom">USER PIPELINE</h6>
          <p className="col-6 centered">
            After a full in-depth review of the various types of content, we had
            a pretty good understanding of the user journey. Ideally, we wanted
            customers to be navigating throughout our funnel and discovering
            more about the onboarding process. This then had to be translated
            into a design that was able to display all the necessary pipelines.
            To accommodate this, we decided to incorporate a two column
            approach: one for sections and the other for content. Unlike the
            previous interface, this new approach created consistent "guard
            rail" that let the users know exactly where they were, but also what
            was up ahead.
          </p>
          <h6 className="col-6 centered xm-top m-bottom">Design Research</h6>
          <p className="col-6 centered">
            Building off of the architecture, my mentor Ben (Lead UX Designer)
            and I were tasked with realizing our vision. Given that we knew we
            wanted a columnar layout, we looked at different sources of
            inspiration which included sources such as e-commerce, and B2B
            corporations. We found an overarching trend for a distinct side menu
            that allowed users to jump to section headings. Additionally, page
            contents were arranged in a vertical order and condensed into long
            pages. While this was not scalable as pages got increasingly long,
            if was something we took note of as we were going to make more
            improvements down the road.
          </p>

          <h4 className="col-6 centered xm-top m-bottom">Mockup</h4>
          <p className="col-6 centered s-bottom">
            Based on what we've gathered this far, our cohort of designers
            created the first rough mockup. Of course, this was not indicative
            of what our final solution was going to look like. Despite this, we
            made sure to incorporate some key architectural features:
          </p>
          <ul className="col-6 centered article-font article-list s-bottom">
            <li>Headers and corresponding subheaders with section titles</li>
            <li>A fixed side menu and pages with scrollable content</li>
            <li>A search feature to narrow down relevant results</li>
          </ul>
        </div>
        <div className="bordure">
          <div
            className="project-body xl-top gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <div className="scroll-container col-10 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/mockup.png")}
                alt="mockup"
              />
            </div>
          </div>
        </div>
        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">
            Review &amp; Next Steps
          </h4>
          <p className="col-6 centered s-bottom">
            We presented this iteration to our internal creative team and upper
            managers. They were thoroughly delighted with the arrangement and
            our methodology for doing so. For our next milestones, we were asked
            to improve upon our design even further and to really create
            something that would captivate users.
          </p>
          <p className="col-6 centered">
            Based on this constructive feedback, we knew we were headed in the
            right direction. Now with a general working framework, it was time
            to dive into the specifics.
          </p>
        </div>

        <div className="title-section salesforce-yellow white">
          <div className="scroll-container">
            <Element name="three" className="scroll-element" />
          </div>
          <h3 className="col-8 centered">
            2. FLEXIBILITY THROUGH PERSONALIZATION
          </h3>
        </div>
        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">The Task</h4>
          <p className="col-6 centered s-bottom">
            For the second leg of the project, I was personally tasked with
            designing a component that added personalization into the home page
            while still making it scalable based on new user roles.
          </p>
          <p className="col-6 centered">
            Using on what was incorporated within the{" "}
            <a
              href="https://www.salesforce.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link original-blue"
            >
              salesforce.com
            </a>{" "}
            homepage, we also wanted to follow a similar design language. It was
            a comprehensive aesthetic that described the various functions of
            the role. For my design, I honed in on the top 3 user personas,
            which included the administrator, developer, and business analyst.
          </p>
        </div>

        <div className="bordure">
          <div
            className="project-body xl-top gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <div className="scroll-container col-10 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/persona.png")}
                alt="persona"
              />
            </div>
          </div>
        </div>

        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">Requirements</h4>
          <p className="col-6 centered s-bottom">
            In a weekly meeting with the stakeholders (my manager Michelle, and
            our design director, David), we put together a simple requirements
            list for what they were looking for. Some of their needs covered
            attributes such as color coding relevant products, creating sections
            based on role types, and distinguishing the section from other
            content on the page. Some precautions included staying away from
            using too many images or colors.
          </p>
          <p className="col-6 centered s-bottom">
            Again, they emphasized the need for flexibility, as the end goal was
            to contininue reaching new markets and to target more types of
            customers.
          </p>
          <p className="col-6 centered">
            After a few brainstorming sessions and discussions, my team liked my
            idea of an interactive section with a mutli-part persona card. It
            was visually different from the rest of the page and added a bit
            more flair to the page.
          </p>
        </div>

        <div className="bordure salesforce-yellow">
          <div
            className="project-body xl-top gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <div className="scroll-container col-10 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/personalization.png")}
                alt="personalization"
              />
            </div>
          </div>
        </div>

        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">Conclusion</h4>
          <p className="col-6 centered s-bottom">
            Although I was the only one assigned to this portion of the project,
            I was excited to see my individual contribution be blended into the
            Salesforce identity.
          </p>
          <p className="col-6 centered">
            Looking back, my only wish was that I had more time to expand my
            reach towards more users. This assignment taught me a lot about
            designing with the individual customer in mind and I hope that the
            next designer to fill my role will express that same vision.
          </p>
        </div>

        <div className="title-section salesforce-dark-blue white">
          <div className="scroll-container">
            <Element name="four" className="scroll-element" />
          </div>
          <h3 className="col-8 centered">
            3. APPLYING THE LIGHTNING DESIGN SYSTEM
          </h3>
        </div>
        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">The Problem</h4>
          <p className="col-6 centered">
            The final segment of the assignment was the most observable change
            for customers and thus required us to be more hands-on during the
            design process. With the recent introduction of the{" "}
            <a
              href="https://www.lightningdesignsystem.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link original-blue"
            >
              Lightning Design System
            </a>{" "}
            prior to me joining the company, it was only a matter of time before
            the Customer Success Suite also had to meet the same consistency
            guidelines. Our two main targets for our redesign was the layout of
            content, color, and incorporation of component elements.
          </p>

          <h4 className="col-6 centered xm-top m-bottom">
            The Iterative Process
          </h4>
          <p className="col-6 centered">
            Along with the product and experience designers in our organization,
            we first created a list of all the possible design components we
            were allowed to choose from. We first thought big and began to
            narrow down our approach.
          </p>

          <h6 className="col-6 centered xm-top m-bottom">
            ACCORDIONS VS TABS VS CARDS
          </h6>
          <p className="col-6 centered s-bottom">
            Our first pathway lead us to using the same accordion layout as the
            original design. However, as mentioned before, a large drawback and
            bottleneck of using accordions was their tendency to lose the user.
            We then looked to tabs as the possible solution. Tabs seemed to be
            particularly good at sectioning off content within a static page.
            For our third option, we researched the possibility of using cards.
            Frameworks such as{" "}
            <a
              href="https://getbootstrap.com/docs/4.0/components/card/"
              target="_blank"
              rel="noopener noreferrer"
              className="link original-blue"
            >
              Bootstrap
            </a>{" "}
            have proven that cards and tabs work well when designed properly.
            They made consistency easy and also allowed us to make global
            changes on the fly. Additionally, questions we sought to answer in
            our discovery process followed the lines of:
          </p>
          <div className="col-6 centered s-bottom quote-border">
            <p className="quote">
              What specific use cases does each component do well in?
              <br />
              What does a combination of a tabular and card layout look like?
              <br />
              Under what circumstances do cards or tabs not work well?
            </p>
          </div>
          <h6 className="col-6 centered xm-top m-bottom">
            A TABLE OF CONTENTS
          </h6>
          <p className="col-6 centered s-bottom">
            In terms of how we were going to organize the side bar, only two
            contenders really stuck out. The first being a dynamic list and the
            second a collapsible folder. For this portion of research, we
            thought outside of the box and started asking questions like:
          </p>
          <div className="col-6 centered l-bottom quote-border">
            <p className="quote">
              How do e-commerce industries organize their offerings?
              <br />
              If you could buy CRM products from an online retail store, what
              would that deisgn look like?
            </p>
          </div>
          <p className="col-6 centered s-bottom">
            In my product design courses at school, I've learned that asking
            these sorts of questions helped spur creativity and team ideation.
            No idea was considered too silly or too ridiculous. They helped us
            look at our problem from a different angle and let us explore
            multiple pathways for our research.
          </p>
          <p className="col-6 centered s-bottom">
            With all of our brainstorming put together we created two possible
            iterations for our suite. The first was composed of tabs in a linear
            fashion. The second contained resizable card that were organized in
            a Mondrion style layout. The typeface was globally changed to
            Salesforce Sans and we used new margins and paddings as recommended
            by the SLDS.
          </p>
        </div>

        <div className="bordure">
          <div className="project-body gather-img-bottom-pad">
            <h4 className=" col-10 centered xm-top l-top xs-bottom">
              Iteration 1: Tabs
            </h4>
            <h5 className="col-10 centered m-bottom">
              Tabs are color-coded and contain section headers.
            </h5>
            <div className="scroll-container col-10 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/iteration1.png")}
                alt="iteration 1"
              />
            </div>

            <h4 className="col-10 centered xm-top xs-bottom">
              Iteration 2: Cards
            </h4>
            <h5 className="col-10 centered m-bottom">
              Pages are sectioned off using color-coded cards, which are
              expandable and collapsible
            </h5>
            <div className="scroll-container col-10 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/iteration2.png")}
                alt="iteration 2"
              />
            </div>
          </div>
        </div>

        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">
            Stakeholder Feedback
          </h4>
          <p className="col-6 centered s-bottom">
            Towards the end of our project cycle, we were asked to present our
            final design to our various stakeholders. This included several
            Design Directors, and the President of Customer Success.
            Fortunately, we were met great excitement! They particularly enjoyed
            the refreshing layout and the organization of Iteration 1.
          </p>
          <p className="col-6 centered">
            At the end of the day, our proposal always kept scalability in mind
            and our stakeholders appreciated this aspect. We then went on to
            create the final design of the project.
          </p>
        </div>

        <div className="bordure salesforce-dark-blue white">
          <div
            className="project-body gather-img-bottom-pad"
            style={{ marginBottom: "0px" }}
          >
            <div className="scroll-container">
              <Element name="five" className="scroll-element" />
            </div>
            <h3 className=" col-9 centered xl-top l-top m-bottom">
              Final Design
            </h3>
            <div className="scroll-container col-9 centered ">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/final.png")}
                alt="final"
              />
            </div>
          </div>
        </div>

        <div className="project-body">
          <h4 className="col-6 centered xm-top m-bottom">Conclusion</h4>
          <p className="col-6 centered s-bottom">
            Because my time was limited to a short 12 weeks, I had to go back to
            school before I was able to see our design solution fully installed.
            However, before my departure, I made sure that all my design assets
            and files were labeled and organized. I wanted the next intern or
            designer who filled my role to know exactly where I left off. I
            created a standardized component library and red-lined the margins
            and paddings where necessary. 
          </p>
          <p className="col-6 centered">
            My role asked for creativity but also communication with those in
            our organization. While we occasionally encountered some missteps
            and confusions, coming together as a team and voicing our concerns
            really solidified our ability to collaborate as a whole, and I'm
            proud of how far we've come along!
          </p>

          <div className="scroll-container">
            <Element name="six" className="scroll-element" />
          </div>
          <h3 className="col-6 centered xm-top m-bottom">The end!</h3>
          <p className="col-6 centered s-bottom">
            My time at Salesforce was a special one. Along with my coworkers,
            fellow interns, and mentors, I've learned a lot about the Ohana
            spirit and hope to carry it wherever my career leads me. I realized
            that my interests align strongly with Salesforce's commitment to
            people-centered design. It was through my managers Michelle and
            James, where I learned the qualities that make a good designer:
            analytical, focused, interdisciplinary, but most importantly,
            interpersonal. It is these foundations (and more) that push me
            become a better designer, developer, and team player. 
          </p>
          <p className="col-6 centered m-bottom">
            If you're curious to learn more about my experience or have any
            questions in general, feel free to contact me! I'd be happy to
            assist.
          </p>

          <div className="s-bottom" style={{ marginBottom: "0px" }}>
            <div className="scroll-container col-7 centered s-bottom">
              <img
                className="fit-width"
                src={require("../assets/img/images/Salesforce/photos.png")}
                alt="photos"
              />
            </div>
            <p className="col-7 centered project-note italic caption-dark l-bottom">
              Intern Luncheon with COO Keith Block / Salesforce East Lobby /
              Futureforce Intern Day
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
                <h3 className="regular super-top">Next Project</h3>
                <div className="flex m-top xl-bottom">
                  <div className="uber-blue col-6 flex vertical center s-pad-around card-min-width">
                    <img
                      src={require("../assets/img/thumbnails/uber_home.png")}
                      style={{ width: "100%" }}
                      alt="Project Thumbnail"
                    />
                  </div>
                  <div className="s-left bottom-left-mobile-readjust">
                    <h3 className="xs-bottom bold ">Uber</h3>
                    <p className="xs-bottom">
                      Creating an enjoyable ride experience.
                    </p>
                    <Link
                      to="/projects/uber"
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

export default Salesforce;
