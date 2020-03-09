import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at Darkspede{" "}
                          <span>Nov 2019 - Feb 2020</span>
                        </h2>
                        <p>
                          I finished an internship in Darkspede which is a
                          startup company in Melbourne as a Web system
                          developer.
                        </p>
                        <p>
                          During the internship, I utilized Wix to design and
                          create websites and connected the websites to the AWS
                          DynamoDB, built membership system API on AWS platform
                          by using AWS Lambda, DynamoDB and API Gateway and also
                          implemented file uploading function by using
                          Javascript, AWS Lambda and S3 bucket.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Master of Engineering(Software) at University of
                          Melbourne <span>Jul 2018 - expected Jul 2020</span>
                        </h2>
                        <p>
                          I am pursuing my postgraduation studies with major in
                          Software Engineering. I have taken courses like
                          Software Process and Management, Software Requirements
                          Analysis, Software Architecture and Design, AI
                          Planning for Autonomy and have better understanding of
                          these subjects. During my time at the University, I
                          have learned how to collaborate with other teammates
                          to complete a software project.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Bachelor of Computer Science and Technology at
                          Shanghai University <span>Aug 2014 - Jul 2018</span>
                        </h2>
                        <p>
                          I have completed my Bachelor degreee with major in
                          Computer Science and Technology. I have taken courses
                          like Database System Management, Object-Oriented
                          Programming, Computer Networks and Data Structure over
                          the years. During my time at school, I have developed
                          interest in solving complex problems which helped me
                          to improve my understanding of complex problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
