import React from "react";
import "./Session.css";
import Vacancy from "../Vacancy/Vacancy";

const Session = () => {
  return (
    <>
      <div className="paragraph">
        <div className="parts">
          <p data-aos="fade-right">build out the frustresion</p>
          <h1 className=" head" data-aos="fade-right">Meet the ahead app</h1>
        </div>
        <div className="images">
          <div className="item">
            {/* <h1 className="emoji fade-in-fwd">👨‍💻</h1> */}
            <div data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" className="emoji">👨‍💻
</div>
          </div>
          <div className="item1">
            <h3 className="para" data-aos="fade-left">
              Lorem, ipsum dolor sit amet sent <br /> adipisicing elit. Tenetur
              ad facilis <br /> odio?
            </h3>
          </div>
        </div>
      </div>
      <div className="second-part">
        <p>Wrong with self improvment & how we are fixing it.</p>
        <h1 className="head" data-aos="fade-right">Self improvement.Ugh 🐱</h1>
        <div className="list ">
          <p className="" data-aos="fade-right">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
          <p className="" data-aos="fade-left">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
          <p className="" data-aos="fade-right">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
          <p className="" data-aos="fade-left">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
        </div>
      </div>
      <div className="three-section">
        <div className="three">
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, sint!</h3>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, sint!</h3>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, sint!</h3>
        </div>
      </div>
      <div className="parts">
      <p>lets your friends family and co-workers(anonymous)rate your social kids</p>
      <h1 className="heading1">Ever wondered what other things of you.</h1>
      
      <div className="session " data-aos="zoom-in">
        <div className="row-section">
          <h1 className="one">1</h1>
          <p>Answer Question on your social skill</p>
        </div>
        <div className="row-section">
          <h1 className="one">2</h1>
          <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Illo, laborum!</p>
        </div>
        <div className="row-section">
          <h1 className="one">3</h1>
          <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Praesentium!</p>
        </div>
        </div>
        <div className="button-section " data-aos="zoom-in-up">
          <p className="you ">You</p>
          <p className="ano-1">Anonimous 1</p>
          <p className="ano-2">Anonimous 2</p>
          <p className="ano-3">Anonimous 3</p>
        </div>
      </div>
      <div className="paragraph-section">
        <p>We take privacy seriousally</p>
        <h1>Before you get started</h1>
        <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Earum (voluptatibus) sed suscipit."</p>
        <br />
        <p>With love, <i className="" data-aos="fade-right">keshav patil</i></p>
        <button className="btn " data-aos="zoom-in">Start a text</button> <br />
        <p  data-aos="fade-right">Take only 5 minites</p>
      </div>
        <div className="sub-head">
          <h1 className="name " data-aos="fade-right">Work with us</h1>
          <h1 className="ahead " data-aos="fade-left">ahead</h1>
        </div>
      <div className="work-with-us">
        <div className="sub-head-2">
          <h1>🐨</h1>
            <h3>About</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus repellendus illo nemo eaque?</p>
            <h3 className="product">Product</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus repellendus illo nemo eaque?</p>
        </div>
        <div className="scroll">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
            <div className="top">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
              </div>
            <div className="top">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
              </div>
            <div className="top">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
              </div>
            <div className="top">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
              </div>
            <div className="top">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
              </div>
            <div className="top">
              <h3 className="name">Lorem ipsum dolor </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id.</p>
              </div>
            
            </div>
      </div>
      <Vacancy />
    </>
  );
};

export default Session;
