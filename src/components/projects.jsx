import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://github.com/Abbyyuan01/FamilyTree-WebApp"
                    className="blog-img"
                  >
                    <img
                      src="images/img-1.jpg"
                      className="img-responsive"
                      alt="HTML5 Bootstrap Template by colorlib.com"
                    />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/Abbyyuan01/FamilyTree-WebApp">
                        FamilyTree-WebApp
                      </a>
                    </h3>
                    <p>
                      A web application which helps family members to save and
                      share family artifacts online.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://github.com/twlevelup/mel-2019-sem2-dragons"
                    className="blog-img"
                  >
                    <img
                      src="images/img-1.jpg"
                      className="img-responsive"
                      alt="HTML5 Bootstrap Template by colorlib.com"
                    />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/twlevelup/mel-2019-sem2-dragons">
                        LevelUp Watch
                      </a>
                    </h3>
                    <p>
                      A watch game to help kindergarten children learn numbers
                      with fun.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a
                    href="https://github.com/Abbyyuan01/SWEN90007-Online-Blog"
                    className="blog-img"
                  >
                    <img
                      src="images/img-1.jpg"
                      className="img-responsive"
                      alt="HTML5 Bootstrap Template by colorlib.com"
                    />
                  </a>
                  <div className="desc">
                    <h3>
                      <a href="https://github.com/Abbyyuan01/SWEN90007-Online-Blog">
                        Online Blog
                      </a>
                    </h3>
                    <p>A simple online blog system.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="#" className="btn btn-primary btn-lg btn-load-more">
                    Load more <i className="icon-reload" />
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}
