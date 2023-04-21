import React from "react";

const InnerBanner = ({ title, action, action2 }) => {
  return (
    <>
      <div className="breadcrumbarea breadcrumb-bg">
        <div className="container">
          <div className="row m-0">
            <div className="col-12 col-sm-12 col-md-12 p-0 mob-ver-p">
              <div className="headingtitle">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    {/* <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>
                {/* {action()}
                {action2} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerBanner;
