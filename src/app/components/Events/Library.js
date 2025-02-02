/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Col, Container } from "react-bootstrap";
import "./Event.css";
import Link from "next/link";
import Image from "next/image";
const Library = () => {
  return (
    <div className="library-event">
      <div className="event-section-2">
        <div className="event-s-img ">
          <img unoptimized={true}
          unselectable={true} src="Mask group.png" alt="" width="100%" />
        </div>
        <Container className="headlibrary">
          <div className="row">
            <Col xl={6} lg={6} xs={12}>
              <div className="image pt-3">
                <video
                  id="banner-video"
                  className={`library_video`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%", // Set the width to 100% of its container
                    height: "auto", // Maintain the aspect ratio
                  }}
                >
                  <source src="banner/Library_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <Image unoptimized={true}
          unselectable={true} src="libraryHome.png" alt="photo" width="100%" /> */}
              </div>
            </Col>
            <Col xl={6} lg={6} xs={12}>
              <div className="library">
                <div className="director-heading ml-1">
                  <h1>Central Library</h1>
                </div>
                <div className="container">
                  <p>
                    Al Jamia Central Library is among the leading reference
                    libraries in India. This celebrated institution, located in
                    a three-story building on the campus of Santapuram al-Jamia,
                    houses over 50,500 books in different titles. Additionally,
                    it boasts a unique digital reference library with access to
                    millions of books. The collection mainly comprises books in
                    Arabic, English, Malayalam, and Urdu, but it also includes
                    separate shelves for books in Hindi, Bengali, Tamil, and
                    Kannada.
                  </p>
                </div>
              </div>
              <div className="learn-btn-lib">
                <div className="btn2">
                  <Link
                    href="/centralibrary"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <button className="icon_arrow_btn">
                      <div className="icon_arrow_abt">
                        <span className="p-1">More About</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 80 80"
                          fill="none"
                        >
                          <circle cx="40" cy="40" r="39.5" stroke="#619A46" />
                          <path
                            d="M52.7071 40.7071C53.0976 40.3166 53.0976 39.6834 52.7071 39.2929L46.3431 32.9289C45.9526 32.5384 45.3195 32.5384 44.9289 32.9289C44.5384 33.3195 44.5384 33.9526 44.9289 34.3431L50.5858 40L44.9289 45.6569C44.5384 46.0474 44.5384 46.6805 44.9289 47.0711C45.3195 47.4616 45.9526 47.4616 46.3431 47.0711L52.7071 40.7071ZM27 41L52 41L52 39L27 39L27 41Z"
                            fill="#619A46"
                          />
                        </svg>
                      </div>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Library;
