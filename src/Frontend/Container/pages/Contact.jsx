import React, { useEffect } from "react";
import InnerBanner from "../Components/InnerBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPageData,
  resetMenuData,
} from "../../../redux/slice/homeSlice/sliceHome";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";

const Contact = ({ title, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPageData(`get-page-details/${id}`));
    return () => {
      dispatch(resetMenuData());
    };
  }, [dispatch, id]);

  const { pageData, loading } = useSelector((state) => state.sliceHome);
  return (
    <>
      <div className="inner-pg">
        <InnerBanner
          title={title}
          action={() => (
            <button onClick={() => alert("Button Clicked")}>Some Action</button>
          )}
          action2={
            <button onClick={() => alert("Button Clicked")}>Some Action</button>
          }
        />

        <div className="main-content-area">
          <div className="container">
            <div className="row">
              {pageData && (
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="title-area">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="page-title">{title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-area">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: pageData.data && pageData.data.content,
                        }}
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
                          <fieldset>
                            <legend>For Development</legend>
                            <p>
                              <b>
                                Director, DSR Directorate, Central Water
                                Commission
                              </b>
                            </p>
                            <p>
                              6th Floor, Sewa Bhawan, R.K. Puram, New Delhi -
                              110066
                            </p>
                            <p>Telefax: +91-11-29583480</p>
                            <p>
                              <b>Email:</b>
                              <a>dir-drip-cwc@nic.in</a>
                              &nbsp;<b>Website:</b>
                              <a
                                href="https://www.damsafety.in"
                                target="_blank"
                              >
                                https://www.damsafety.in
                              </a>
                            </p>
                          </fieldset>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
                          <fieldset>
                            <legend>For Content</legend>
                            <p>
                              <b>
                                Project Director, DSM directorate, Central Water
                                Commission
                              </b>
                            </p>
                            <p>
                              8th Floor, Sewa Bhawan, R.K. Puram, Sector-1, New
                              Delhi - 110066
                            </p>
                            <p>Telefax: +91-11-29583703</p>
                            <p>
                              <b>Email:</b>
                              <a>dsmdte-cwc@nic.in</a>
                              &nbsp;<b>Website:</b>
                              <a href="http://cwc.gov.in/" target="_blank">
                                http://cwc.gov.in/
                              </a>
                            </p>
                          </fieldset>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
                          <fieldset>
                            <legend>For Escalation</legend>
                            <p>
                              <b>
                                Chief Engineer, Dam Safety Organisation, Central
                                Water Commission
                              </b>
                            </p>
                            <p>
                              8th Floor, Sewa Bhawan (N), R.K. Puram, Sector-1,
                              New Delhi - 110066
                            </p>
                            <p>Telefax: +91-11-26106848</p>
                            <p>
                              <b>Email:</b>
                              <a>cedams@nic.in</a>
                              &nbsp;<b>Website:</b>
                              <a
                                href="https://www.damsafety.in"
                                target="_blank"
                              >
                                https://www.damsafety.in
                              </a>
                            </p>
                          </fieldset>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-3">
                          <fieldset>
                            <legend>For Escalation</legend>
                            <p>
                              <b>
                                Member, Designs and Research (D&amp;R) Wing,
                                Central Water Commission
                              </b>
                            </p>
                            <p>
                              Member (D&amp;R), 6th Floor, Sewa Bhawan (S), R.K.
                              Puram, New Delhi 110066
                            </p>
                            <p>Telefax: +91-11-26108150</p>
                            <p>
                              <b>Email:</b>
                              <a>memberdr-cwc@nic.in</a>
                              &nbsp;<b>Website:</b>
                              <a href="http://www.cwc.gov.in" target="_blank">
                                http://www.cwc.gov.in
                              </a>
                            </p>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
