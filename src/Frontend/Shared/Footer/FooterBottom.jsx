import React, { useEffect } from "react";
//import Spinner from "../../Container/Components/Spinner";

const FooterBottom = () => {
  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <>
      <footer>
        <div className="footer-bottom-sec">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="text-sec">
                  <p>
                    DHARMA is a tool developed and operated by Central Water
                    Commission, and is an intellectual property of Central Water
                    Commission.{" "}
                  </p>
                  <p>
                    {" "}
                    All authorised licensees are allowed to use DHARMA as per
                    terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBottom;
