import React from "react";
import Slider from "react-slick";

const FooterSlider = () => {
  const settings = {
    //dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="gray-bg">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div
                id="gov_bottom_slider"
                className="owl-carousel owl-theme wow fadeInRight"
              >
                <Slider {...settings}>
                  <a href="#">
                    <img src="images/f1.png" />
                  </a>
                  <a href="#">
                    <img src="images/f2.png" />
                  </a>
                  <a href="#">
                    <img src="images/f3.png" />
                  </a>
                  <a href="#">
                    <img src="images/f4.png" />
                  </a>
                  <a href="#">
                    <img src="images/f5.png" />
                  </a>
                  <a href="#">
                    <img src="images/f6.png" />
                  </a>
                  <a href="#">
                    <img src="images/f1.png" />
                  </a>
                  <a href="#">
                    <img src="images/f2.png" />
                  </a>
                  <a href="#">
                    <img src="images/f3.png" />
                  </a>
                  <a href="#">
                    <img src="images/f4.png" />
                  </a>
                  <a href="#">
                    <img src="images/f5.png" />
                  </a>
                  <a href="#">
                    <img src="images/f6.png" />
                  </a>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSlider;
