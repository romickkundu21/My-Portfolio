import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./MyDesigns.css";

export default function Design(props) {
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
    mouseDrag: true,
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
    
    <div className="Design-Top">
      <ScreenHeading
        title={"My Designs"}
        subHeading={"Love to do this!"}
      />
      <section className="design-section fade-In" id={props.id || ""}>

        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel  owl-theme owl-loaded " id="design-carousel" 
            {...options}>

              {/* <div class="owl-stage-outer">
                <div class="owl-stage">

                  <div class="owl-item">
                    <img src={require('../../assets/Designs/1.png')} alt="No Internet"></img>
                  </div>
                  <div class="owl-item">
                    <img src={require('../../assets/Designs/7.png')} alt="No Internet"></img>
                  </div>
                  <div class="owl-item">
                    <img src={require('../../assets/Designs/3.png')} alt="No Internet"></img>
                  </div>
                  <div class="owl-item">
                    <img src={require('../../assets/Designs/1.png')} alt="No Internet"></img>
                  </div>
                  <div class="owl-item">
                    <img src={require('../../assets/Designs/7.png')} alt="No Internet"></img>
                  </div>
                  <div class="owl-item">
                    <img src={require('../../assets/Designs/3.png')} alt="No Internet"></img>
                  </div>

                </div>
              </div> */}
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/1.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/7.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/3.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/4.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/5.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/2.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/8.png')} alt="No Internet"></img>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="testi-item">
                  <img src={require('../../assets/Designs/6.png')} alt="No Internet"></img>
                </div>
              </div>

              {/* <div class="owl-nav">
                <div class="owl-prev">prev</div>
                <div class="owl-next">next</div>
              </div>
              <div class="owl-dots">
                <div class="owl-dot active"><span></span></div>
                <div class="owl-dot"><span></span></div>
                <div class="owl-dot"><span></span></div>
              </div> */}

            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

