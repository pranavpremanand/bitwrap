import React from "react";
import bannerImg from "../assets/images/banner.webp";
import { Link } from "react-router-dom";

const ConnectWithUs = () => {
  return (
    <div className="py-[5rem] relative bg-primary/40 min-h-[50vh]">
      <div className="absolute top-0 w-full h-full bg-background/80"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl overflow-hidden bg-center bg-cover relative shadow-inner shadow-primary/40"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full bg-primary/15"></div>
          <div className="py-[3rem] px-5 bg-white/40 rounded-xl backdrop-blur-sm text-primary_text relative z-10">
            <h1 className="heading-2_1 max-w-[60rem] mx-auto text-center">
              Let’s Create Something Extraordinary Together! Reach Out to Us
              Today!
            </h1>
            <p className="font-light max-w-[50rem] text-center mx-auto mt-3">
              Embark on a journey to the future of business, where innovation
              blends with responsibility, and success is rooted in trust. Let’s
              harness the power of AI together and turn your vision into
              reality.
            </p>
            <Link to="/contact-us" className="secondary-btn mt-5 w-fit mx-auto">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
