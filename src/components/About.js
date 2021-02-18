import React from "react";
import img from "../assets/img2.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO B.D.S. SHOPPING</h1>
            <p>
              We love seasons as it's an excuse to invest in a pair of slippers
              These wear-with-everything heels get a yearly update and the 2018
              crop has not disappointed taking the lead from the walks, there
              are the usual suspect we love seasons as it's an excuse to invest
              in a pair of slippers. These wear-with-everything heels get a
              yearly update and the 2018 crop has not disappointed. Taking the
              lead from the zerol, there are the usual suspects. There are also
              shapes. You will find those on this list, among the styles from
              the London.
            </p>
            <div className="about_btn">
              <a href="" className="btn btn_smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about_img">
              <img src={img} alt="shoe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
