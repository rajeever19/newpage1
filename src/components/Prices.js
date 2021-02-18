import React from "react";

const Prices = () => {
  const prod = [
    {
      id: 1,
      name: "formal ",
      desc:
        "The shoes are designed to take you through the work week and into the weekend revelries with style.The Footwear That Suits Your Personality. Our Footwear Are Made With Good Material And The It Offers You Trendy Design With Long Lasting Performance.",
      img: "/image/img1.jpg",
      stock: 25,
      price: 256,
      rating: 4.4,
    },
    {
      id: 2,
      name: "formal ",
      desc:
        "The shoes are designed to take you through the work week and into the weekend revelries with style.The Footwear That Suits Your Personality. Our Footwear Are Made With Good Material And The It Offers You Trendy Design With Long Lasting Performance.",
      img: "/image/img1.jpg",
      price: 256,
      stock: 25,
      rating: 4.4,
    },
    {
      id: 3,
      price: 256,

      name: "formal ",
      desc:
        "The shoes are designed to take you through the work week and into the weekend revelries with style.The Footwear That Suits Your Personality. Our Footwear Are Made With Good Material And The It Offers You Trendy Design With Long Lasting Performance.",
      img: "/image/img3.jpg",
      stock: 25,
      rating: 4.4,
    },
    {
      price: 256,
      id: 4,
      name: "formal ",
      desc:
        "The shoes are designed to take you through the work week and into the weekend revelries with style.The Footwear That Suits Your Personality. Our Footwear Are Made With Good Material And The It Offers You Trendy Design With Long Lasting Performance.",
      img: "/image/img1.jpg",
      stock: 25,
      rating: 4.4,
    },
    {
      price: 256,
      id: 5,
      name: "formal ",
      desc:
        "The shoes are designed to take you through the work week and into the weekend revelries with style.The Footwear That Suits Your Personality. Our Footwear Are Made With Good Material And The It Offers You Trendy Design With Long Lasting Performance.",
      img: "/image/img2.jpg",
      stock: 25,
      rating: 4.4,
    },
    {
      price: 256,
      id: 6,
      name: "formal ",
      desc:
        "The shoes are designed to take you through the work week and into the weekend revelries with style.The Footwear That Suits Your Personality. Our Footwear Are Made With Good Material And The It Offers You Trendy Design With Long Lasting Performance.",
      img: "/image/img3.jpg",
      stock: 25,
      rating: 4.4,
    },
  ];
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          {prod.map((p, i) => (
            <div className="col-4" key={i}>
              <div className="price">
                <div className="price__img">
                  <img src={p.img} alt={p.name || "shoe"} />
                </div>
                <h1 className="price__heading">{p.name} Shoes</h1>
                <p className="price__text">{p.desc}</p>
                <p className="price_rs">Rs. {p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
