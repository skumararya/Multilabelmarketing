import React, { useEffect } from "react";
import MainSlider from "./MainSlider";
import MapMediaSection from "./MapMediaSection";
import Welcome from "./Welcome";
import WhatsNew from "./WhatsNew";
import { fetchemployee } from "../../../../redux/slice/adminSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchemployee(`ManageEmployee`)); 
//   }, [dispatch]);

//   const { employeelist, loading } = useSelector((state) => state.userSlice);
// console.log(employeelist)
  return (
    <>
    <hr/>
      {/* <MainSlider /> */}
      <Welcome />
      {/* <WhatsNew />
      <MapMediaSection /> */}

      <div id="social-sidebar">
        <div className="social facebook">
          <a href="https://www.facebook.com/InAgrisearch/" target="_blank">
            <p>
              Like on Facebook <i className="fab fa-facebook-f"></i>
            </p>{" "}
          </a>
        </div>
        <div className="social youtube">
          <a href="https://www.youtube.com/user/icarindia" target="_blank">
            <p>
              Subscribe on Youtube <i className="fab fa-youtube"></i>
            </p>{" "}
          </a>
        </div>
        <div className="social twitter">
          <a href="https://twitter.com/icarindia" target="_blank">
            <p>
              Follow on Twitter <i className="fab fa-twitter"></i>
            </p>{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
