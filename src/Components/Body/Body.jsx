import React from 'react';
import "./Body.css";
import logo from "../../assets/download.jpeg";
import appStore from "../../assets/appstore.jpg";
import playStore from "../../assets/googleplay.jpg";
import kuda from "../../assets/kuda.png";
import hello from "../../assets/hello.png";
import coinjar from "../../assets/coinjar.png";
import debitcard from "../../assets/debit-card.avif";
import acct from "../../assets/acct.jpeg";
import card from "../../assets/makers_kb2-scaled.jpg";
import {FaCreditCard,FaArrowRight} from "react-icons/fa";


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

          <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">
               <div className='col-12 col-sm-5 p-5'>
                   <h1>
                    Your phone + <br/>our app + <br/>a debit card = <br/> a simpler life.
                   </h1>
                   <p className='details'>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
                   
                   <p>
                     <a href='/' className='link'>Open an account in minutes<FaArrowRight className='mx-2'/></a>
                   </p>
               </div>
               <img src={debitcard} width className='col-12 col-sm-5 p-0 bg-danger m-0' height={"500px"} alt="logo" />
          </div>


          <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
               <img src={kuda} width className='col-12 col-sm-5 p-0 bg-danger m-0' height={"500px"} alt="logo" />
               <div className='col-12 col-sm-5 p-5'>
                   <h1>
                       It’s your money, we just help you manage it.
                   </h1>
                   <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
                   
                   {/* <p>
                     <a href='/' className='link'>Open an account in minutes<FaArrowRight className='mx-2'/></a>
                   </p> */}
               </div>
          </div>
          <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
               <div className='col-12 col-sm-5 p-5'>
                   <h1>
                   Save money as you spend it, seriously.
                   </h1>
                   <p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
                   
                   <p>
                     <a href='/' className='link'>See all your savings<FaArrowRight className='mx-2'/></a>
                   </p>
               </div>
               <img src={acct} width className='col-12 col-sm-5 p-0 bg-danger m-0' height={"500px"} alt="logo" />
          </div>
          <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
               <img src={card} width className='col-12 col-sm-5 p-0 bg-danger m-0' height={"500px"} alt="logo" />
               
               <div className='col-12 col-sm-5 p-5'>
                   <h1>
                   Turn off access, turn on safety.
                   </h1>
                   <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try..</p>
                   
                   <p>
                     <a href='/' className='link'>Learn more about cards<FaArrowRight className='mx-2'/></a>
                   </p>
               </div>
          </div>
          <div className="content-2 row mx-3 d-flex align-items-center justify-content-center">        
               <div className='col-12 col-sm-5 p-5'>
                   <h1>
                     We’re always happy to help you.
                   </h1>
                   <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
                   
                   <p>
                     <a href='/' className='link'>Get help<FaArrowRight className='mx-2'/></a>
                   </p>
               </div>
               <img src={hello} width className='col-12 col-sm-5 p-0 bg-danger m-0' height={"400px"} alt="logo" />
          </div>
          <div className="content-2 row mb-5 mx-3 d-flex align-items-center justify-content-center">        
            <img src={coinjar} className='coinjar col-12 col-sm-5 mx-5 p-5 m-0' alt="logo" />
               <div className='col-12 col-sm-5 mx-5 p-5'>
                   <h1>
                   Fees as clear as glass.
                   </h1>
                   <p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                   
                   <p>
                     <a href='/' className='link'>See all your fees<FaArrowRight className='mx-2'/></a>
                   </p>
               </div>
          </div>

          <h2 className='text-center' style={{fontWeight: "bold",color: "rgb(72, 3, 104)"}}>Don’t just take our word for it</h2>
    </div>
  )
}

export default Body;