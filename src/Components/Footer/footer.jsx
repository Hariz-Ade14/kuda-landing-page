import React from 'react';
import kudalogo from "../../assets/kudalogo.png";
import "./footer.css";
import appStore from "../../assets/appstore.jpg";
import playStore from "../../assets/googleplay.jpg";


function Footer() {
  return (
    <div className='footer container-fluid p-5 shadow'>
         <div className="row">
              <div className="col-12 col-sm-2 d-flex align-items-top justify-content-start m-0 p-0">
                   <img src={kudalogo} width={"30px"} className='m-1' height={"33px"} alt="" />
                   <h2 className='m-0 p-0'>Kuda.</h2>
              </div>
              <div className="col-6 col-sm-2 mt-sm-0 mt-4 p-0">
                   <ul className='navbar-nav'>
                       <p className='m-0 listHeader'>Personal</p>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Discover Personal</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Transfer & Spend</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Save</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Investments</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Kuda Card</a>
                       </li>
                   </ul>

              </div>
              <div className="col-6 col-sm-2 mt-sm-0 mt-4 p-0">
                   <ul className='navbar-nav'>
                       <p className='m-0 listHeader'>Business</p>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Discover Business</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Business Registration</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Soft POS</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Invoicing</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Salary Loan</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Business API</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Join Kuda Business</a>
                       </li>
                     
                   </ul>

              </div>
              <div className="col-6 col-sm-2 mt-sm-0 mt-4 p-0">
                   <ul className='navbar-nav'>
                       <p className='m-0 listHeader'>Company</p>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Blog</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Press</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Join our team</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">About us</a>
                       </li>
                   </ul>

              </div>
              <div className="col-6 col-sm-2 mt-sm-0 mt-4 p-0">
                   <ul className='navbar-nav'>
                       <p className='m-0 listHeader'>Help</p>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Get Help</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Scam Awareness</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">FAQs</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Security</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Contact Us</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Self Help</a>
                       </li>
                   </ul>

              </div>
              <div className="col-6 col-sm-2 mt-sm-0 mt-4 p-0">
                   <ul className='navbar-nav'>
                       <p className='m-0 listHeader'>Transparency</p>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Terms & Conditions</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Privacy Policy</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Discover Personal</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Discover Personal</a>
                       </li>
                       <li className="nav-item m-0">
                          <a href="/" className="nav-link">Discover Personal</a>
                       </li>
                   </ul>

              </div>
              
              <div className="images px-0 d-flex align-items-center justify-content">
                       <img src={appStore}  width={"120px"} className='my-2 mx-0 appstore' height={"50px"} alt="" />
                       <img src={playStore} width={"120px"} className='m-2 playstore' height={"50px"} alt="" />
               </div>
         </div>
    </div>
  )
}

export default Footer;