import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';
import 'animate.css';
import { Icon } from '@iconify/react';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon animate__animated animate__bounce">
              <a href='https://www.facebook.com/profile.php?id=100009033430915' rel="noreferrer" target="_blank">
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='https://www.instagram.com/romick_21/' rel="noreferrer" target="_blank">
                <i className='fa fa-instagram'></i>
              </a>
              <a href='https://www.linkedin.com/in/romick-kundu-725437207/' rel="noreferrer" target="_blank">
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href='https://twitter.com/kundu_romick' rel="noreferrer" target="_blank">
                <i className='fa fa-twitter'></i>
              </a>
              <a href='https://leetcode.com/romickkundu21/' rel="noreferrer" target="_blank">
                <Icon className="ip" icon="simple-icons:leetcode" color="rgb(0, 238, 255)" />
              </a>
              <a href='https://github.com/romickkundu21' rel="noreferrer" target="_blank">
                <i className='fa fa-github'></i>
              </a>
              <a href='https://www.hackerrank.com/romickkundu5555' rel="noreferrer" target="_blank">
                <Icon className="ip" icon="fa-brands:hackerrank" color="rgb(0, 238, 255)"/>
              </a>

            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Romick</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    1000,
                    "UI/UX Designer",
                    1000,
                    "Front-End Developer",
                    1000,
                    "React Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of designing applications with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options ">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{""}
            </button>
            <a href="resume.pdf" download="Romick's Resume.pdf">
              <button className="btn highlighted-btn ">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  )
}
