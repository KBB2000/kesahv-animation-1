import React from "react";
import "./Header.css";
import { IoIosStar } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import Card from "../Cards/Card";

const Header = () => {


  return (
    <>
      <div className="col">
        <div className="division">
          <p>Ahead App</p>
          <h1 className="main-heading"  data-aos="fade-right">
            Master Your Life by mastering emostion
          </h1>
          <div className="flex">
            <button className="sugn-up flex">
              <FaApple className="apple" /> Download on the <b>App Store</b>
            </button>
            <div className="start-icon flex">
            <IoIosStar className="start" />
            <IoIosStar className="start" />
            <IoIosStar className="start" />
            <IoIosStar className="start" />
            </div>
          </div>
          <p>100+ App Store Review</p>
        </div>
        <div className="image">
          <img className=""  data-aos="fade-left" 
            src="https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
<div className="around">

      <div className="row mb-10">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">EQ Beats IQ</h2>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-text">
                people with emostion inteligent  live more fulfilled lives they tend to be happeir and healthoies relanship
              </h4>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-text">
                they are more successfull i their pursuite and make for inspiration leaders.according to science they earned $29k year.
              </h4>
            </div>
          </div>
        </div>
      </div>
      </div>
      <h1 className="minor-heading " data-aos="fade-right">Does This Sound Familiar... 🤗</h1> 
      <Card />
    </>
  );
};

export default Header;
