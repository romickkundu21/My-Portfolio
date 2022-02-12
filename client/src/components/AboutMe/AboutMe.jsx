import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return;
    Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "A student pursuing Computer Science and Engineering, I chose this field of study because I’ve always been interested in computers, how the different applications work and how they manage things to work perfectly, and it leads to great career options, too., Front-end web developer, DSA enthusiast and bodybuilder with background knowledge of designing beautiful sites along with a knack of building websites with almost efficiency. ",
    highlights: {
      bullets: [
        "Front end Development",
        "Interactive front end as per the design",
        "React",
      ],
      heading: "Here are a few highlights:"
    }
  }
  const renderHighlight = () => {
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      ))
    )
  }
  return (
    <div className="about-me-container screen-container fade-In" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile">
          </div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                Hire Me
              </button>
              <a href="resume.pdf" download="Romick Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


