import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  fetchBanner,
  fetchGallery,
} from "../../../../redux/slice/homeSlice/sliceHome";
import Spinner from "../../Components/Spinner";

const DamSlider = () => {
  const { REACT_APP_IMAGE_URL } = process.env;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGallery("get-gallery"));
  }, [dispatch]);

  const { gallery, loading } = useSelector((state) => state.sliceHome);

  const slider = useRef();
  //slider settings
  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
  };
  const next = () => {
    slider.current.slickNext();
  };
  const prev = () => {
    slider.current.slickPrev();
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 dam-gallery">
        <div
          id="data-img-slider"
          className="owl-carousel owl-theme wow fadeInRight right-sec owl-loaded owl-drag"
        >
          <Slider {...settings} ref={slider} className="dam-slider">
            {gallery.data ? (
              gallery.data.map((image, index) => (
                <div className="item" key={index}>
                  <img src={REACT_APP_IMAGE_URL + image.slider_image} alt="" />
                  <div className="img-title">
                    <h6>{image.title}</h6>
                  </div>
                </div>
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </Slider>
          <div className="gallery-slider-controls">
            <a
              className="gallery-control-prev"
              type="button"
              onClick={prev}
              //   data-slide="prev"
            >
              {/* <span className="sr-only">Previous</span> */}
            </a>
            <a
              className="gallery-control-next"
              type="button"
              //   data-slide="next"
              onClick={next}
            >
              {/* <span className="sr-only">Next</span> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DamSlider;
