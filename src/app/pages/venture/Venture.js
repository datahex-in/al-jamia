/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Venture.css";
import Link from "next/link";
import { getventures } from "@/app/hooks/UseApi";
import Image from "next/image";
const Venture = () => {
  const [ventures, setVentures] = useState([]);

  useEffect(() => {
    const fetchVentures = async () => {
      try {
        const data = await getventures();
        setVentures(data?.response);
        console.log(data);
      } catch (error) {
        console.error("Error fetching ventures:", error);
        console.log(data);
      }
    };
    fetchVentures();
  }, []);

  return (
    <div>
      <PageHeader />
      <Container>
        <div className="venture-section">
          <div className="venture-title">
            <h1>Our ventures</h1>
          </div>

          <div className="ventures-cards">
            {ventures.map((venture, index) => (
              <>
                <div className="card" key={index}>
                  <div className="image">
                    <Image unoptimized={true}
          unselectable={true}
                      src={`https://event-manager.syd1.cdn.digitaloceanspaces.com/${venture.image}`}
                      alt="image"
                    />
                  </div>
                  <div className="content">
                    <h2>{venture.title}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla iste laudantium et rem asperiores aut!
                    </p>
                    <button className="btn-explore">
                      {" "}
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.4451 6.62511C13.8581 6.97744 14.2209 7.39511 14.4998 7.86294C14.7786 7.39511 15.1414 6.97744 15.5544 6.62511C16.5064 5.81311 17.7723 5.30444 19.0369 5.30444C19.9213 5.30444 20.8686 5.55411 21.6853 5.97644C22.4996 6.39761 23.2416 7.02061 23.6476 7.81044C23.6576 7.82979 23.6665 7.84965 23.6744 7.86994L26.1594 14.4033C26.6319 15.1813 26.923 16.0558 27.0112 16.9619C27.0993 17.8679 26.9822 18.7821 26.6686 19.6366C26.3549 20.4912 25.8527 21.2641 25.1994 21.8979C24.546 22.5317 23.7583 23.0102 22.8946 23.2978C22.031 23.5855 21.1136 23.6748 20.2107 23.5592C19.3078 23.4437 18.4425 23.1262 17.6791 22.6303C16.9157 22.1344 16.2739 21.473 15.8012 20.695C15.3286 19.917 15.0373 19.0426 14.9489 18.1366H14.0506C13.963 19.0433 13.6721 19.9185 13.1996 20.6973C12.7271 21.4761 12.0852 22.1383 11.3215 22.6349C10.5579 23.1314 9.69209 23.4494 8.78859 23.5652C7.88509 23.681 6.96711 23.5917 6.10288 23.3039C5.23865 23.0161 4.45041 22.5372 3.79675 21.9028C3.1431 21.2684 2.64084 20.4948 2.32733 19.6396C2.01382 18.7844 1.89711 17.8695 1.98588 16.9629C2.07466 16.0563 2.36663 15.1815 2.84009 14.4033L5.32509 7.86994C5.33297 7.85002 5.34192 7.83055 5.35192 7.81161C5.75909 7.02061 6.49992 6.39761 7.31309 5.97644C8.13092 5.55411 9.07826 5.30444 9.96259 5.30444C11.2273 5.30444 12.4931 5.81311 13.4451 6.62511ZM3.70809 17.5544C3.70809 16.4113 4.1622 15.315 4.97053 14.5066C5.77886 13.6983 6.87519 13.2442 8.01834 13.2442C9.16149 13.2442 10.2578 13.6983 11.0661 14.5066C11.8745 15.315 12.3286 16.4113 12.3286 17.5544C12.3286 18.6976 11.8745 19.7939 11.0661 20.6022C10.2578 21.4106 9.16149 21.8647 8.01834 21.8647C6.87519 21.8647 5.77886 21.4106 4.97053 20.6022C4.1622 19.7939 3.70809 18.6976 3.70809 17.5544ZM16.6709 17.5544C16.6709 16.4113 17.125 15.315 17.9334 14.5066C18.7417 13.6983 19.838 13.2442 20.9812 13.2442C22.1243 13.2442 23.2207 13.6983 24.029 14.5066C24.8373 15.315 25.2914 16.4113 25.2914 17.5544C25.2914 18.6976 24.8373 19.7939 24.029 20.6022C23.2207 21.4106 22.1243 21.8647 20.9812 21.8647C19.838 21.8647 18.7417 21.4106 17.9334 20.6022C17.125 19.7939 16.6709 18.6976 16.6709 17.5544Z"
                            fill="#fff"
                          />
                        </svg>
                      </span>{" "}
                      Explore
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Venture;
