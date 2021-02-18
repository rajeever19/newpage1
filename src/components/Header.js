import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="container">
          <div className="banner_text">
            <h1>B.D.S. Shopping Mall</h1>
            <h3>shivalya mandir road bairgania, sitamarhi 843313</h3>
            <p>
              Our wide variety of sports footwear is made keeping you in mind.
              Available in a plethora of colours, shapes and materials,
              symactive shoes have been crafted with the single-minded objective
              of comfort, style and longevity. All of this at a price you simple
              can’t say no to.
            </p>
            <div className="banner_btn">
              <a href="#" className="btn btn_smart">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
