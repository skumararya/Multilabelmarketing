import React from "react";
import Slider from "react-slick";
import DamSlider from "./DamSlider";
import MapAndInfo from "./MapAndInfo";

const MapMediaSection = () => {
  return (
    <>
      <div className="map-area">
        <div className="container">
          <div className="map-inner">
            <div className="row whitebg">
              <MapAndInfo />
              <DamSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapMediaSection;
