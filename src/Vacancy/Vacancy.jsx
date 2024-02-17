import React from 'react';
import "./Vacancy.css"
import Footer from '../Footer/Footer';

const Vacancy = () => {
  return (
    <>
        <h1 className='vacancy-heading'>Open Vacancies</h1>
      <div className="main">
        <div className="ul-li">
            <h1 className='course'>Senoir Full-stack-engineer</h1>
           <ul className='sample'>
            <li>Full-stack position</li>
            <li>Full-stack developer</li>
            <li>developer</li>
            <button  className='sugn-up see-detail tracking-in-expand-fwd'>See Details</button>
           </ul>
        </div>
        <div className="ul-li">
            <h1 className='course'>Senior designer</h1>
            <ul className='sample'>
            <li>Full-stack position</li>
            <li>Full-stack developer</li>
            <li>developer</li>
            <button  className='sugn-up see-detail tracking-in-expand '>See Details</button>
           </ul>
        </div>
        <div className="ul-li">
            <h1 className='course'>Intern</h1>
            <ul className='sample'>
            <li>Full-stack position</li>
            <li>Full-stack developer</li>
            <li>developer</li>
            <button  className='sugn-up see-detail tracking-in-expand-fwd'>See Details</button>
           </ul>
        </div>
      </div>
      <hr className='margin-top'/>
      <Footer />
    </>
  );
}

export default Vacancy;

