import React from 'react';
import "./ScreenHeading.css";
import 'animate.css';

export default function ScreenHeading(props) {
  return(
    <div className="heading-container">
        <div className="screen-heading">
            <span>{props.title}</span>
        </div>

        {
            (props.subHeading)?(
                <div className="screen-sub-heading">
                    <span>{props.subHeading}</span>
                </div>
            ):<div></div>
        }
        <div className="heading-seperator">
            <div className="seperator-line ">
                <div className="seperator-blob animate__animated animate__rubberBand">
                    <div></div>
                </div>
                <div className="seperator-blob animate__animated animate__rubberBand">
                    <div></div>
                </div>
                <div className="seperator-blob animate__animated animate__rubberBand">
                    <div></div>
                </div>
            </div>
        </div>
    </div>)
}
