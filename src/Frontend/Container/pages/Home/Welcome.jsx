import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="intro-area light-graybg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="wecome-sec">
                <h2 className="httext">
                  Welcome <span className="ht-2"> Dharma</span>
                </h2>
                <p className="d-txt">
                  There are 5334 large dams in India and about 411 are under
                  construction. In addition, there are several thousands smaller
                  dams. All of these dams are vital for ensuring the water
                  security of the country in a sustainable manner and regulating
                  water during the rainy season to prevent floods.
                </p>
                <a href="" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="cards-sec">
                <a href="">
                  <div className="card cl-1">
                    <div className="c-head">
                      <h5>₹2,100 crores</h5>
                      <div className="img-p">
                        <img
                          src="images/c-1.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <h6>Estimated Cost for</h6>
                    <p>
                      Dam Rehabilitation and Improvement Project (DRIP)
                      <i className="fa fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </a>
                <a href="">
                  <div className="card cl-2">
                    <div className="c-head">
                      <h5>250 Dams</h5>
                      <div className="img-p">
                        <img
                          src="images/c-2.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <h6>Identified for Rehabilitation</h6>
                    <p>
                      Under Dam Rehabilitation and Improvement Project (DRIP)
                      <i className="fa fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </a>
                <a href="">
                  <div className="card cl-3">
                    <div className="c-head">
                      <h5>411 Dams</h5>
                      <div className="img-p">
                        <img
                          src="images/c-3.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <h6>Under Construction</h6>
                    <p>
                      In India<i className="fa fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </a>
                <a href="">
                  <div className="card cl-4">
                    <div className="c-head">
                      <h5>09 Agencies</h5>
                      <div className="img-p">
                        <img
                          src="images/c-4.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <h6>Participating from 07 States</h6>
                    <p>
                      In the project
                      <i className="fa fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
