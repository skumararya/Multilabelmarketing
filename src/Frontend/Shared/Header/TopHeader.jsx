import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
import {
  fontSizeDecrease,
  fontSizeIncrease,
  fontSizeOriginal,
} from "../../../redux/slice/homeSlice/sliceHome";

const TopHeader = () => {
  const dispatch = useDispatch();

  // For Themes
  const blackTheme = () => {
    document.body.classList.add("black-theme");
  };

  const normalTheme = () => {
    document.body.classList.remove("black-theme");
  };

  //skip to main content
  const skipToMain = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 top-left-nav wow fadeInLeft">
              <ul>
                <li>
                  <a href="#">User Manual (version 1.7)</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 top-right-nav wow fadeInRight">
              <ul>
                <li>
                  <Link to="screen-reader-access" className="hide skiptomain">
                    Screen Reader Access
                  </Link>
                </li>
                <li>
                  <a className="hide" type="button" onClick={skipToMain}>
                    Skip Main Menu
                  </a>
                </li>
                <li className="text-size">
                  <a type="button" onClick={() => dispatch(fontSizeIncrease())}>
                    A+
                  </a>
                  <a type="button" onClick={() => dispatch(fontSizeOriginal())}>
                    A
                  </a>
                  <a type="button" onClick={() => dispatch(fontSizeDecrease())}>
                    A -
                  </a>
                </li>
                <li className="text-size">
                  <a type="button" onClick={normalTheme} className="whitebg">
                    A
                  </a>
                  <a type="button" onClick={blackTheme} className="blackbg">
                    A
                  </a>
                </li>
                <li>
                  <span id="google_translate_element"></span>
                  {/* <select name="Language" id="">
                    <option value="">Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                  </select> */}
                </li>
                <li className="register-btn">
                  {/* <a href="#">Register</a> */}
                </li>
                <li className="nav-item login-btn">
                  <a href="#" className="blue-btn">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
