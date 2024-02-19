import React, { useEffect } from "react";
import "./Footer.css";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Footer = () => {
  useEffect(() => {
        AOS.init({duration: 2000});
  }, [])
  return (
    <>
      <div className="footer-part" data-aos="zoom-in">
        <h1>🐼</h1>
        <h1 className="aherd">ahead</h1>
        <div className="two"></div>
        <div className="text-center flex">
          <IoLocation className="icon" />
          <p className="para1"> Aurangabad 24, 107</p>
          <div className="email">
            <MdOutlineMessage className="icon" />

            <p>hr@keshav.yahoo.com</p>
          </div>
        </div>
        <button className="sugn-up bottom">
          <FaApple className="apple" /> DownLoad On The <br /> <b>App store</b>
        </button>
      </div>
    </>
  );
};

export default Footer;
