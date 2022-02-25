import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import { Icon } from '@iconify/react';
import './Resume.css';

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return;
    Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate || props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Repositaries & Codes", logoSrc: "work-history.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React Js", ratingPercentage: 65 },
    { skill: "Java", ratingPercentage: 65 },
    { skill: "C++", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Building useful Web 3.0",
      duration: { fromDate: '', toDate: '' },
      description: "Web 3.0 networks will operate through decentralized protocols — the founding blocks of blockchain and cryptocurrency technology.",
      subHeading: "Technologies Using: React Js, Tailwind CSS, Soliditary",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: '', toDate: '' },
      description: "A personal Portfolio Website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
    {
      title: "NewsHonk",
      duration: { fromDate: '', toDate: '' },
      description: "NewsHonk is a news app which can be used to grab quick daily news bites. If you are interested in news, weather, politics and sports news, NewsHonk is for you!",
      subHeading: "Technologies Used: React Js, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"BACHELOR OF TECHNOLOGY (Computer Science Engineering)"}
        subHeading={"Vellore Institute of Technology, Bhopal"}
        fromDate={"2020"}
        toDate={"present"}
      />

      <ResumeHeading
        heading={"Senior Secondary School"}
        subHeading={"Kendriya Vidyalaya, Kashipur (Result: 90%)"}
        fromDate={""}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Kendriya Vidyalaya, Kashipur (Result: 87%)"}
        fromDate={""}
        toDate={"2018"}
      />
    </div>,


    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        {/* <ResumeHeading
             heading={""}
             subHeading={""}
             fromDate={""}
             toDate={""}
           /> */}
        <div className="experience-description">
          <span className="resume-description-text">

            <a href='https://leetcode.com/romickkundu21/' rel="noreferrer" target="_blank">
              <Icon className="ic" icon="simple-icons:leetcode" width="244" color="rgb(37 3 61)" style={{padding: "10px"}}/>
              <h4>LeetCode</h4>
            </a>
          </span>
          <br />
          <span className="resume-description-text">
            <a href='https://www.hackerrank.com/romickkundu5555' rel="noreferrer" target="_blank">
              <Icon className="ic" icon="fa-brands:hackerrank" color="rgb(0 49 46)" width="244" style={{padding: "10px"}} />
              <h4>HackerRank</h4>
            </a>

          </span>
          <br />
          <span className="resume-description-text">
            <a href='https://github.com/romickkundu21' rel="noreferrer" target="_blank">
              <Icon className="ic" icon="akar-icons:github-fill" width="244" color="Black" style={{padding: "10px"}} />
              <h4>GitHub</h4>
              {/* <i className='fa fa-github'></i> */}
            </a>
          </span>
        </div>

        {/* <div className="experience-description">

          <br />
          <span className="resume-description-text">


          </span>
          <br />
          <span className="resume-description-text">


          </span>
          <br />
        </div> */}
      </div>
    </div>,


    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Body Building"
        description="Apart from being a tech enthusiast and a code writer, I also love to train myself and others to attain a good physique and have a proper diet."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Designing Websites"
        description="I also love the UI/UX of different websites and most of the time excited to design them."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
        <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="No Internet" />
        <span class="bullet-label">{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  return (
    <div className="resume-container screen-container fade-In" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  )
}


