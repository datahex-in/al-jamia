"use client";
import React, { useEffect, useState } from "react";
import { getAboutUs } from "@/app/hooks/UseApi";

import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFootball,
  FaMicrophoneLines,
  FaPeopleGroup,
  FaVolleyball,
} from "react-icons/fa6";
import {
  FaBlog,
  FaBookOpen,
  FaCamera,
  FaCameraRetro,
  FaChild,
  FaEarlybirds,
  FaFirstAid,
  FaGrinAlt,
  FaGripVertical,
  FaHandHoldingHeart,
  FaHardHat,
  FaMarker,
  FaPalette,
  FaRecordVinyl,
  FaSeedling,
  FaStar,
} from "react-icons/fa";

function Activities_Centre() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const data = await getAboutUs();
      setAbout(data?.response);
    };

    fetchAbout();
  }, []);
  {
    return (
      <div>
        <PageHeader />
        <div className="AboutUspage-img">
          <Image unoptimized={true}
          unselectable={true}
            src="/banner/Activities_Centre.png"
            layout="responsive"
            width={1000}
            height={500}
            alt="Image"
          />
        </div>

        <div className="AboutUspage-items">
          <div className="AboutUspage-ourMission">
            <Container>
              <Row>
                <Col xl={6} lg={6} xs={12}>
                  <div className="AboutUspage-mission-img">
                    <Image unoptimized={true}
          unselectable={true}
                      src="/banner/Video_conference.JPG"
                      layout="responsive" // Use layout="responsive" for responsiveness
                      width={500} // Provide the width of the image
                      height={800} // Adjust the height as needed to make it taller
                      alt="Image"
                      objectFit="cover"
                      className="AboutUspage-vision-img2"
                    />
                  </div>
                </Col>

                <Col xl={6} lg={6} xs={12}>
                  <div
                    className="AboutUspage-mission-title"
                    id="our-mission-header"
                  >
                    Al Jamia Students’ Activities Centre
                  </div>
                  <p className="AboutUspage-mission-desc">
                    The Al Jamia Students’ Activities Centre strives to maximize
                    personal growth and development in students by providing a
                    variety of opportunities for involvement, service, and
                    leadership in co-curricular activities. The centre supports
                    the academic mission of Al Jamia by working to create
                    experiential learning options outside the classroom and
                    encouraging students to actively participate in the greater
                    educational community. It is committed to achieving a
                    pluralistic community and to assisting the student in
                    developing rational, critical and creative capabilities.
                    More specifically, the Centre seeks to engage students in
                    active learning, assist them in establishing a meaningful
                    value system and ethical standards, and set high
                    expectations for each student. <br /> <br />
                    By offering effective programs and participation in all
                    venues, and by encouraging and supporting activities that
                    include athletics, recreation, student clubs and
                    organizations, performing arts, and social awareness
                    programs, the Students’ Activities Centre provides
                    opportunities for students to achieve a better understanding
                    and appreciation not only for their culture, but also for
                    the cultures of others. This fosters educational
                    collaborations throughout the campus and builds supportive
                    and inclusive communities.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div className="AboutUspage-ourMission pb-5">
            <Container>
              <Row>
                <h1 className="TitleStyle center_aln p-4">Major Activities</h1>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaPeopleGroup />
                      </i>
                    </div>
                    <h3>Student Parliament</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaVolleyball />
                      </i>
                    </div>
                    <h3>Club activities</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaChild />
                      </i>
                    </div>
                    <h3>Literary associations</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaFootball />
                      </i>
                    </div>
                    <h3>Sports and Games</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaBookOpen />
                      </i>
                    </div>
                    <h3>Tarbiyah</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaEarlybirds />
                      </i>
                    </div>
                    <h3>Khutba Training</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaMicrophoneLines />
                      </i>
                    </div>
                    <h3>Public Speaking and Performance</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaHardHat />
                      </i>
                    </div>
                    <h3>Social activism</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaBlog />
                      </i>
                    </div>
                    <h3>Blogging</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaCamera />
                      </i>
                    </div>
                    <h3>Media</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaGrinAlt />
                      </i>
                    </div>
                    <h3>Public Relations</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaCameraRetro />
                      </i>
                    </div>
                    <h3>Photography</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaHandHoldingHeart />
                      </i>
                    </div>
                    <h3>Health and fitness</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaMarker />
                      </i>
                    </div>
                    <h3>Writings and Publications</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaPalette />
                      </i>
                    </div>
                    <h3>Arts & Crafts</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaSeedling />
                      </i>
                    </div>
                    <h3>Social Awareness programs</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaRecordVinyl />
                      </i>
                    </div>
                    <h3>Social Service Wing</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaFirstAid />
                      </i>
                    </div>
                    <h3>Health Service Centre</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaGripVertical />
                      </i>
                    </div>
                    <h3>Career Guidance</h3>
                  </div>
                </Col>
                <Col sm={6} md={4} lg={3}>
                  <div className="card">
                    <div className="icon-wrapper">
                      <i>
                        <FaStar />
                      </i>
                    </div>
                    <h3>Soft-Skill development</h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Activities_Centre;
