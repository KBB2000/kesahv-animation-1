import React from "react";
import "./Session.css";
import Vacancy from "../Vacancy/Vacancy";

const Session = () => {
  return (
    <>
      <div className="paragraph">
        <div className="parts">
          <p>build out the frustresion</p>
          <h1 className="fade-in-left head">Meet the ahead app</h1>
        </div>
        <div className="images">
          <div className="item">
            <h1 className="emoji fade-in-fwd">👨‍💻</h1>
          </div>
          <div className="item1">
            <h3 className="para fade-in-right">
              Lorem, ipsum dolor sit amet sent <br /> adipisicing elit. Tenetur
              ad facilis <br /> odio?
            </h3>
          </div>
        </div>
      </div>
      <div className="second-part">
        <p>Wrong with self improvment & how we are fixing it.</p>
        <h1 className="head tracking-in-expand-fwd">Self improvement.Ugh 🐱</h1>
        <div className="list ">
          <p className="fade-in-right">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
          <p className="fade-in-left">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
          <p className="tracking-in-expand-fwd">
            🌏 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            quam!
          </p>
          <p className="tracking-in-expand-fwd">
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
      
      <div className="session tracking-in-expand-fwd">
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
        <div className="button-section text-blur-out">
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
        <p>With love, <i className="fade-in-right">keshav patil</i></p>
        <button className="btn tracking-in-expand-fwd">Start a text</button> <br />
        <p className="fade-in-left">Take only 5 minites</p>
      </div>
        <div className="sub-head">
          <h1 className="name fade-in-left">Work with us</h1>
          <h1 className="ahead fade-in-right">ahead</h1>
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
            
            </div>
      </div>
      <Vacancy />
    </>
  );
};

export default Session;
