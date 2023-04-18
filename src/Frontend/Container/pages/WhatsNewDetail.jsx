import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import InnerBanner from "../Components/InnerBanner";

const WhatsNewDetail = () => {
  return (
    <>
      <InnerBanner title="Latest News" />
      <BreadCrumb title="Latest News" />
      <div className="about-bg inner-page-section">
        <div className="container">
          <div className="table-responsive mt-4">
            <table className="table table-bordered whatsnew-tble">
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>News 1</td>
                  <td>
                    <p>
                      Amendment to Rule-8 of RCT(Procedure) Rules 1989 regarding
                      places for filing claim application
                    </p>
                  </td>
                  <td>
                    <a className="" href="#">
                      Read&nbsp;More
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNewDetail;
