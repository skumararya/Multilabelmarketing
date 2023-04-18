import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchBanner } from "../../../../redux/slice/homeSlice/sliceHome";
import Spinner from "../../Components/Spinner";

const MainSlider = () => {
  const { REACT_APP_IMAGE_URL } = process.env;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanner("get-banner"));
  }, [dispatch]);

  const { banners, loading } = useSelector((state) => state.sliceHome);
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

  const getBannerTitle = (bannerName) => {
    return bannerName
      .split(" ")
      .filter((item) => item.toUpperCase() !== "DAM")
      .join(" ")
      .toUpperCase();
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="banner-area">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner-sec">
            <Slider {...settings} ref={slider}>
              {banners.data ? (
                banners.data.map((banner, index) => (
                  <div className="carousel-item active" key={index}>
                    <img
                      src={REACT_APP_IMAGE_URL + banner.slider_image}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        {banner.title && getBannerTitle(banner.title)}
                        <span className="ht-2"> DAM</span>
                      </h5>
                      <div className="underline"></div>
                      <p>{banner.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div>No Data Found</div>
              )}
            </Slider>
          </div>
          <a
            className="carousel-control-prev"
            type="button"
            role="button"
            onClick={prev}
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            role="button"
            type="button"
            onClick={next}
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
