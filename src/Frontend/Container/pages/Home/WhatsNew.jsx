import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const WhatsNew = () => {
  const [playPause, setPlayPause] = useState(false);
  const slider = useRef();
  //slider settings
  const settings = {
    arrows: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0,
  };

  const HandlePlayPause = () => {
    setPlayPause(!playPause);
    if (playPause) {
      slider.current.slickPlay();
    }
    if (!playPause) {
      slider.current.slickPause();
    }
  };

  const next = () => {
    slider.current.slickNext();
  };
  const prev = () => {
    slider.current.slickPrev();
  };
  return (
    <>
      <div className="news-area graybg">
        <div className="container drk-gray-bg">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-0 mob-ver-pad">
              <div className="news-inner drk-gray-bg">
                <div className="news-control-sec">
                  <div className="news-control">
                    <div className="news-left-right">
                      <h5>
                        Dharma <span className="ht-light"> News</span>
                      </h5>
                      <a type="button" onClick={prev} className="prev-btn">
                        <i className="fas fa-chevron-left"></i>
                      </a>
                      <a
                        className="pause-btn"
                        type="button"
                        onClick={HandlePlayPause}
                      >
                        {!playPause ? (
                          <i className="fas fa-pause"></i>
                        ) : (
                          <i className="fas fa-play"></i>
                        )}
                      </a>
                      <a type="button" onClick={next} className="next-btn">
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="whhats-new-slider">
                    <div
                    // id="whtnew"
                    // className="carousel slide"
                    // data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <Slider {...settings} ref={slider}>
                          <div className="carousel-item">
                            <a href="#">
                              <span className="pink-txt">
                                July 30 - 31 st , 2019
                              </span>
                              &nbsp; A Training Programme on DHARMA
                              Implementation at , Rajasthan
                            </a>
                          </div>
                          <div className="carousel-item">
                            <a href="#">
                              <span className="pink-txt">
                                July 30 - 31 st , 2019
                              </span>
                              &nbsp; A Training Programme on DHARMA
                              Implementation at , Rajasthan
                            </a>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="read-more-sec">
                  <a href="#" className="blue-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
