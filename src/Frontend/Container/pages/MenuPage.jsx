import React, { useEffect } from "react";
import InnerBanner from "../Components/InnerBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPageData,
  resetMenuData,
} from "../../../redux/slice/homeSlice/sliceHome";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";

const MenuPage = ({ title, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPageData(`get-page-details/${id}`));
    return () => {
      dispatch(resetMenuData());
    };
  }, [dispatch, id]);

  const { pageData, loading } = useSelector((state) => state.sliceHome);
  // if (loading) {
  //   return <div className="related-link-loader">Loading...</div>;
  //   //return <Spinner />;
  // }
  return (
    <>
      <div className="inner-pg">
        {/* <InnerBanner title={title} /> */}
        <div className="breadcrumbarea breadcrumb-bg">
          <div className="container">
            <div className="row m-0">
              <div className="col-12 col-sm-12 col-md-12 p-0 mob-ver-p">
                <div className="headingtitle">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {title}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-area">
          <div className="container">
            <div className="row">
              {/* <div className="col-12 col-sm-12 col-md-12 col-lg-3 p-static wow fadeInRight">
                <div className="bg-shade"></div>
                <div className="right-menu">
                  <h3>Related Links</h3>
                  <ul>
                    <li>
                      <a
                        className={id === "1" ? "active" : ""}
                        onClick={() => navigate("/about-us")}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className={id === "2" ? "active" : ""}
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className={id === "3" ? "active" : ""}
                        onClick={() => navigate("/dams")}
                      >
                        Dams
                      </a>
                    </li>

                    <li>
                      <a
                        className={id === "4" ? "active" : ""}
                        onClick={() => navigate("/licensees")}
                      >
                        Licensees
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
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

                    {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="about-cards">
                      <div className="card text-center">
                        <div className="card-header">
                          1. Bring Stakeholders together
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            There are many stakeholders involved in any dam
                            project, including dam owners, operators,
                            consultants, contractors and suppliers. Often, in
                            the dec- ades following commissioning, the details
                            of these stakeholders can be mis- placed thus
                            denying access to valuable information, insights and
                            skills.
                          </p>
                          <p className="card-txt-2">
                            DHARMA will ensure that details of all stakeholders
                            are recorded and maintained. Such details may
                            pertain to individuals as well as organi- sational
                            entities associated with dam planning and design,
                            construc- tion, operation and maintenance, and
                            rehabilitation.
                          </p>
                        </div>
                      </div>
                      <div className="card text-center">
                        <div className="card-header">
                          2. Ensure Completeness of information
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            Today, local and State authorities maintain limited
                            information concerning their dam asses. This gap in
                            information not only affects routine operation and
                            maintenance but also decisions on policy, budgeting
                            and rehabilitation.
                          </p>
                          <p className="card-txt-2">
                            DHARMA will enable gathering and updating of dam
                            asset infor- mation in a centralised and structured
                            manner so as to overcome limi- tations of
                            multiplicity of agencies, wide geographical spread,
                            volumi- nous data, varied terminologies and units,
                            unknown and mismatched time reference and
                            inconsistent formats.
                          </p>
                        </div>
                      </div>
                      <div className="card text-center">
                        <div className="card-header">
                          3. Assess soundness of dam health
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            Well established procedures exist for periodical dam
                            health assessment through routine inspections and
                            detailed investigations wherever required. However,
                            dam asset information in its current form and format
                            often does not show the time dependent variations in
                            dam health condition.
                          </p>
                          <p className="card-txt-2">
                            DHARMA will ensure prompt capturing of inspection
                            and investigation data directly by the 'Dam Health
                            Engineers and provide tools for correct analysis and
                            interpretation of this timeline data.
                          </p>
                        </div>
                      </div>
                      <div className="card text-center">
                        <div className="card-header">
                          4. Effectively manage asset inventory
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            Effective asset management can only be achieved with
                            engagement of key stakeholders, completeness of
                            information and access to appropriate tools- a
                            requirement which is not being met for most of dams
                            in India.
                          </p>
                          <p className="card-txt-2">
                            DHARMA will provide a complete data collection and
                            management platform for assimilation of varied
                            information for every dam compo- nent across all dam
                            projects, also thereby benefiting from the insights
                            and learning curves of a wider stakeholder spectrum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
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

export default MenuPage;
