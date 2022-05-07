import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOut",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    }
  }
  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My friends Say About me"}
      />
      <section className="testimonial-section fade-In" id={props.id || ""}>
        <div className="footer-image" id="shape-1">
          <img src={require("../../assets/Testimonial/shape-bg1.png")} alt="not responding"></img>
        </div>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Will be adding soon!!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require('../../assets/Testimonial/lady.png')} alt="No Internet"></img>
                    <h5>Thomas</h5>
                    <p>CEO --</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Will be adding soon!!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require('../../assets/Testimonial/man.png')} alt="No Internet"></img>
                    <h5>John</h5>
                    <p>CEO ---</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Will be adding soon!!
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={require('../../assets/Testimonial/mike.png')} alt="No Internet"></img>
                    <h5>Rick</h5>
                    <p>CEO ---</p>
                  </div>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={require("../../assets/Testimonial/shape-bg.png")} alt="not responding"></img>
      </div>
    </div>
  );
}
