import React from 'react';
import "./Body.css";
import logo from "../../assets/download.jpeg";
import appStore from "../../assets/appstore.jpg";
import playStore from "../../assets/googleplay.jpg";
import card from "../../assets/debitcard.jpeg";
import {FaCreditCard} from "react-icons/fa";


function Body() {
  return (
    <div className='conatiner-fluid Body mt-5'>
          <div className='d-flex align-items-center justify-content-between m-5 row'>
              <div className='col-12 col-sm-6 p-5'>
                   <h1>The money App for Africans.</h1>
                   <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>  
                   <div className="images d-flex align-items-center justify-content">
                       <img src={appStore}  width={"90px"} className='m-2' height={"40px"} alt="" />
                       <img src={playStore} width={"90px"} className='m-2' height={"40px"} alt="" />
                   </div>
              </div>
             
              {/* <div className='> */}
              <img src={logo} width className='col-12 col-sm-6 p-0 bg-danger m-0' height={"500px"} alt="logo" />
              {/* </div> */}
          </div>
          
          <div className='content row my-5 mx-3 d-flex align-items-center justify-content-center'>
               <div className='col-11 col-sm-3 bg-white p-4 m-4 shadow'>
                    {/* <FaCreditCard className='icon m-0' size={30}/> */}
                    <p>Order a Kuda Visa card on the app with pickup and delivery options.</p>
               </div>
               <div className='col-11 col-sm-3 bg-white p-4 m-4 shadow'>
                    <p>Enjoy cashless payment options online and offline.</p>
               </div>
               <div className='col-11 col-sm-3 bg-white p-4 m-4 shadow'>
                    <p>Pay your essential bills and buy gift cards easily.</p>
               </div>
               <div className='col-11 col-sm-4 bg-white p-4 m-4 shadow'>
                    <p>Get 25 free transfers to Nigerian banks every month.</p>
               </div>
               <div className='col-11 col-sm-4 bg-white p-4 m-4 shadow'>
                    <p>Save money automatically any time you spend.</p>
               </div>
          </div>

          <div className="content-2 row my-5 mx-3 d-flex align-items-center justify-content-center">
               <div className='col-12 col-sm-6 p-5'>
                   <h1>
                    Your phone + <br/>our app + <br/>a debit card = <br/> a simpler life.
                   </h1>
                   <p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
               </div>
               <img src={card} width className='col-12 col-sm-6 p-0 bg-danger m-0' height={"500px"} alt="logo" />

          </div>
    </div>
  )
}

export default Body;