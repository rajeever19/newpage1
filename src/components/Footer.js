import React from "react";
import './style/footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="container1">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            tempora rerum! Facilis fugiat cumque soluta ipsa, vel maxime velit
            deleniti illum! Totam labore fugiat numquam, nemo possimus voluptate
            dolor maiores?
          </p>
          <ul className="sci">
            <li>
              <a href="#" className="facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sec quickLinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="">Term and conditions</a>
            </li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <span>
                647 Linda Street
                <br />
                Bairgania, Sitamarhi 843313
                <br />
                India
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <p>
                <a href="tel:8541849528">+918541849528</a>
                <br />
                <a href="tel:8541849528">+918541849528</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <p>
                <a href="mailto:rajeevranjan54545@gmail.com">
                  rajeevranjan54545@gmail.com
                </a>
              </p>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyrightText">
        <p>
          Copyright{" "}
          <i className="fa fa-copyright" aria-hidden="true">
            {" "}
            2021.All Right Reserved.
          </i>
        </p>
      </div>
    </div>
  );
};
export default Footer;
