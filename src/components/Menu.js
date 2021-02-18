import React from "react";
import img from "../assets/img3.jpg";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src={img} alt="shoe" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Shoes type</h3>
            <a href="#">Chuck Taylor</a>
            <a href="#" className="shoe_type">
              Golf shoes
            </a>
            <a href="#" className="shoe_type">
              Hiking boots
            </a>
            <a href="#" className="shoe_type">
              High-tops Running shoes
            </a>
            <a href="#" className="shoe_type">
              Climbing shoes
            </a>
            <a href="#" className="shoe_type">
              Soccer shoes Sneakers
            </a>
            <div className="about_btn">
              <a href="" className="btn btn_smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
