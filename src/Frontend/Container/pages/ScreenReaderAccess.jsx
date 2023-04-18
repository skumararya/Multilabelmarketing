import React from "react";
import InnerBanner from "../Components/InnerBanner";

const ScreenReaderAccess = () => {
  return (
    <>
      <div className="inner-pg">
        <InnerBanner title={"Screen Reader Access"} />
        <div className="main-content-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-static wow fadeInRight">
                <div className="bg-shade"></div>
                <div className="right-menu">
                  {/* <h3>Screen Reader Access</h3> */}
                  <div className="table-responsive mt-2">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Sr. No.</th>
                          <th>Screen Reader</th>
                          <th>Website</th>
                          <th>Free/ Commercial</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Screen Access For All (SAFA)</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://www.nabdelhi.org/NAB_SAFA.htm"
                            >
                              http://www.nabdelhi.org/NAB_SAFA.htm
                            </a>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Non Visual Desktop Access (NVDA)</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://www.nvda-project.org"
                            >
                              http://www.nvda-project.org
                            </a>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>System Access To Go</td>
                          <td>
                            <a target="_blank" href="http://www.satogo.com">
                              http://www.satogo.com
                            </a>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Thunder</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://www.screenreader.net/index.php?pageid=4"
                            >
                              http://www.screenreader.net/index.php?pageid=4
                            </a>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>WebAnywhere</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://webanywhere.cs.washington.edu/wa.php"
                            >
                              http://webanywhere.cs.washington.edu/wa.php
                            </a>
                          </td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>JAWS</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://www.freedomscientific.com/jaws-hq.asp"
                            >
                              http://www.freedomscientific.com/jaws-hq.asp
                            </a>
                          </td>
                          <td>Commercial</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Supernova</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://www.yourdolphin.co.uk/productdetail.asp?id=169"
                            >
                              http://www.yourdolphin.co.uk/productdetail.asp?id=169
                            </a>
                          </td>
                          <td>Commercial</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Window-Eyes</td>
                          <td>
                            <a
                              target="_blank"
                              href="http://www.gwmicro.com/Window-Eyes"
                            >
                              http://www.gwmicro.com/Window-Eyes
                            </a>
                          </td>
                          <td>Commercial</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenReaderAccess;
