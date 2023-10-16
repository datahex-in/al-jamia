/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import "./About.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAboutUs } from "@/app/hooks/UseApi";

const About = () => {
  const [aboutdata, setAboutData] = useState({});

  useEffect(() => {
    const fetchAboutus = async () => {
      const data = await getAboutUs();
      setAboutData(data?.response);
    };

    fetchAboutus();
  }, []);

  return (
    <div>
      <motion.container
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="about-Title">
            <h1 className="pt-1">Welcome to Al Jamia Al Islamiya</h1>
          </div>
          <div className="about-description">
            <p>{aboutdata && aboutdata[0]?.shortDescription}</p>
          </div>
        </div>
      </motion.container>

      <div className="school-img">
        <div className="btn">
          {" "}
          <Link href="/https://aljamiaworldcampus.net/">
            <motion.button
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {" "}
              <div className="icon_arrow_abt">
                <span className="p-3">Read More</span>

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
            </motion.button>
          </Link>
        </div>
        <div className="image">
          <img src="banner/aljamia.png" alt="photo" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default About;
