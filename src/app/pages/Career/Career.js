"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/app/components/footer/Footer";
import PageHeader from "@/app/components/pagesheader/PageHeader";
import Career_form from "@/app/components/Career_form/Career_form";

function Career() {
  return (
    <div>
      <PageHeader />
      <div className="AboutUspage-img">
        <Image unoptimized={true}
          unselectable={true}
          src="/banner/applynow2.png"
          layout="responsive"
          width={1000}
          height={500}
          style={{height:"50%",width:"100%"}}
          alt="Image"
        />
      </div>
      <Career_form />
      <Footer />
    </div>
  );
}

export default Career;
