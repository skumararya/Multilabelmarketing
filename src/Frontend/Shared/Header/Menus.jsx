import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchMenus } from "../../../redux/slice/homeSlice/sliceHome";
import Spinner from "../../Container/Components/Spinner";

const Menus = () => {
  const [searchBoxState, setSearchBoxState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus("get-menu-list"));
  }, [dispatch]);

  const { menus, loading } = useSelector((state) => state.sliceHome);
  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <>
      <div className="logo-sec-wraper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 logo-sec wow fadeInLeft">
              <Link className="logo-align" to="/">
                <img src="images/logo.png" alt="emblem" />
                {/* <div className="brand-text">
                  <h4>
                    DHARMA
                    <span>
                      Dam Health And Rehabilitation Monitoring Application
                    </span>
                  </h4>
                </div> */}
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 loginbtn-sec wow fadeInRight">
              <div className="nav-wraper">
                <nav className="navbar navbar-expand-lg navbar-light custom-nav  w-100 wow fadeInUp">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      {/* <li className="nav-item">
                        <NavLink to="/" className="">
                          Home
                        </NavLink>
                      </li> */}
                      {menus.data ? (
                        menus.data.map((menu, index) => (
                          <li className="nav-item" key={index}>
                            <NavLink to={menu.slug} className="">
                              {menu.title}
                            </NavLink>
                          </li>
                        ))
                      ) : (
                        <div>No Data Found</div>
                      )}

                      <li className="nav-item login-btn">
                        <Link
                          to={"/login"}
                          // href="http://164.52.202.110/dharma/"
                          className="blue-btn"
                          // data-toggle="modal"
                          // data-target="#exampleModal"
                        >
                          Login
                        </Link>
                      </li>
                      {/* <li className="nav-item search-icon">
                        <a
                          className="nav-link togg-btn"
                          type="button"
                          onClick={() => setSearchBoxState(!searchBoxState)}
                        >
                          <i className="fas fa-search"></i>
                        </a>
                        {searchBoxState && (
                          <div className="togbx">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                            />
                          </div>
                        )}
                      </li> */}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
