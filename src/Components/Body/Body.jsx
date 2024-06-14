import React from "react";
import "./Body.css";
import logo from "../../assets/download.jpeg";
import appStore from "../../assets/appstore.jpg";
import playStore from "../../assets/googleplay.jpg";
import kuda from "../../assets/kuda.png";
import hello from "../../assets/hello.png";
import coinjar from "../../assets/coinjar.png";
import debitcard from "../../assets/debit-card.png";
import acct from "../../assets/acct.jpeg";
import card from "../../assets/makers_kb2-scaled.jpg";
import {FaArrowRight} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import {FaUser} from "react-icons/fa";
import randomman from "../../assets/randomman.png"

function Body() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='conatiner-fluid Body'>
			<div className='firsthero d-flex align-items-center justify-content-between row'>
				<div className='col-12 col-sm-6 p-0'>
					<h1 className='one'>
						The money app for
						<br /> africans
					</h1>
					<p className='mkft'>
						Make free transfers, enjoy cashless payment options and earn
						interest on your savings with Kuda.
					</p>
					<div className='images'>
						<img src={appStore} className='appstore' height={"50px"} alt='' />
						<img src={playStore} className='playstore' height={"50px"} alt='' />
					</div>
				</div>

				<img
					src={logo}
					className='col-12 col-sm-6 p-0 m-0'
					height={"500px"}
					alt='logo'
				/>
			</div>

			<div className='content row my-5 mx-3 d-flex align-items-center justify-content-center'>
				<div
					data-aos='fade-up'
					className='col-11 col-sm-3 bg-white p-4 m-3 shadow'
				>
					<p>Enjoy cashless payment options online and offline.</p>
				</div>
				<div
					data-aos='fade-up'
					className='col-11 col-sm-3 bg-white p-4 m-3 shadow'
				>
					<p>Enjoy cashless payment options online and offline.</p>
				</div>
				<div
					data-aos='fade-up'
					className='col-11 col-sm-3 bg-white p-4 m-3 shadow'
				>
					<p>Pay your essential bills and buy gift cards easily.</p>
				</div>
				<div
					data-aos='fade-up'
					className='col-11 col-sm-4 bg-white p-4 m-3 shadow'
				>
					<p>Get 25 free transfers to Nigerian banks every month.</p>
				</div>
				<div
					data-aos='fade-up'
					className='col-11 col-sm-4 bg-white p-4 m-3 shadow'
				>
					<p>Save money automatically any time you spend.</p>
				</div>
			</div>

			<div className='content-2 row mx-3 d-flex align-items-center justify-content-center'>
				<div className='col-12 col-sm-5 p-5'>
					<h1>
						Your phone + <br />
						our app + <br />a debit card = <br /> a simpler life.
					</h1>
					<p className='details'>
						We designed a money app for your lifestyle, and you can get a debit
						card to go with it. That's all you need to make the right money
						moves.
					</p>

					<span className='mt-4 d-flex align-items-center justify-content-center'>
						<a href='/' className='link'>
							Open an account in minutes
						</a>
						<FaArrowRight className='mx-2' />
					</span>
				</div>
				<img
					src={debitcard}
					width
					className='col-12 col-sm-5 p-0 m-0'
					height={"500px"}
					alt='logo'
				/>
			</div>

			<div className='content-2 row mx-3 d-flex align-items-center justify-content-center'>
				<img
					src={kuda}
					width
					className='col-12 col-sm-5 p-0 m-0'
					height={"500px"}
					alt='logo'
				/>
				<div className='col-12 col-sm-5 p-5'>
					<h1>It’s your money, we just help you manage it.</h1>
					<p className='details'>
						Save it, spend it, send it. It’s up to you. Whatever you choose to
						do with your money, we’ll make sure it’s done better and free of
						charge. We take responsibility for that.
					</p>
				</div>
			</div>
			<div className='content-2 row mx-3 d-flex align-items-center justify-content-center'>
				<div className='col-12 col-sm-5 p-5'>
					<h1>Save money as you spend it,seriously.</h1>
					<p className='details'>
						You can’t avoid spending. That’s how you pay for your needs. But we
						can help you put money away every time you pay for something. Just
						set a percentage to save and watch your money grow.
					</p>

					<span className='mt-4 d-flex align-items-center justify-content-center'>
						<a href='/' className='link'>
							See all your savings
						</a>
						<FaArrowRight className='mx-2' />
					</span>
				</div>
				<img
					src={acct}
					width
					className='col-12 col-sm-5 p-0 m-0'
					height={"500px"}
					alt='logo'
				/>
			</div>
			<div className='content-2 row mx-3 d-flex align-items-center justify-content-center'>
				<img
					src={card}
					width
					className='col-12 col-sm-5 p-0 m-0'
					height={"500px"}
					alt='logo'
				/>

				<div className='col-12 col-sm-5 p-5'>
					<h1>Turn off access, turn on safety.</h1>
					<p>
						Life happens. Milk spills. Debit cards go missing. If that ever
						happens, you can block your missing card on the app so no one can
						use it. We’d like to see them try..
					</p>

					<span className='mt-4 d-flex align-items-center justify-content-center'>
						<a href='/' className='link'>
							Learn more about cards
						</a>
						<FaArrowRight className='mx-2' />
					</span>
				</div>
			</div>
			<div className='content-2 row mx-3 d-flex align-items-center justify-content-center'>
				<div className='col-12 col-sm-5 p-5'>
					<h1>We’re always happy to help you.</h1>
					<p>
						You can chat with us on the app, slide into our DMs, tweet, leave an
						Instagram comment, send an email or call. However you choose to
						reach out, there’ll always be a friendly person there to make your
						life easy.
					</p>

					<span className='mt-4 d-flex align-items-center justify-content-center'>
						<a href='/' className='link'>
							Get help
						</a>
						<FaArrowRight className='mx-2' />
					</span>
				</div>
				<img
					src={hello}
					width
					className='col-12 col-sm-5 p-0 m-0'
					height={"400px"}
					alt='logo'
				/>
			</div>
			<div className='content-2 row mb-5 mx-3 d-flex align-items-center justify-content-center'>
				<img
					src={coinjar}
					className='coinjar col-12 col-sm-5 mx-5 p-5 m-0'
					alt='logo'
				/>
				<div className='col-12 col-sm-5 mx-5 p-5'>
					<h1>Fees as clear as glass.</h1>
					<p>
						We’re serious about free banking, and we will never, ever charge you
						for anything without your consent.
					</p>

					<span className='mt-4 d-flex align-items-center justify-content-center'>
						<a href='/' className='link'>
							See all your fees
						</a>
						<FaArrowRight className='mx-2' />
					</span>
				</div>
			</div>

			<h1
				className='text-center mb-5 px-2'
				style={{fontWeight: "bold", color: "rgb(72, 3, 104)"}}
			>
				Don’t just take our word for it
			</h1>


               <div className="animation">
                     
                     <div className="card-1 shadow">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                               elit. Repellat iure maiores nisi porro dolorum neque 
                               commodi deserunt, autem eveniet aut dolorem debitis! 
                               Culpa, inventore ipsam! Esse officia ut facere minima.
                          </p>
                          <div className="d-flex persons m-3 h-25 align-items-center justify-content-start font-weight-bold">
                              <img className="cardImg" src={randomman} alt="" />
                              <p>John Doe</p>
                          </div>
                          

                     </div>
                     <div className="card-1 shadow">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                               elit. Repellat iure maiores nisi porro dolorum neque 
                               commodi deserunt, autem eveniet aut dolorem debitis! 
                               Culpa, inventore ipsam! Esse officia ut facere minima.
                          </p>
                          <div className="d-flex persons m-3 h-25 align-items-center justify-content-start font-weight-bold">
                              <img className="cardImg" src={randomman} alt="" />
                              <p>John Doe</p>
                          </div>
                     </div>
                     <div className="card-1 shadow">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                               elit. Repellat iure maiores nisi porro dolorum neque 
                               commodi deserunt, autem eveniet aut dolorem debitis! 
                               Culpa, inventore ipsam! Esse officia ut facere minima.
                          </p>
                          <div className="d-flex persons m-3 h-25 align-items-center justify-content-start font-weight-bold">
                              <img className="cardImg" src={randomman} alt="" />
                              <p>John Doe</p>
                          </div>
                     </div>  
                     <div className="card-1 shadow">
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing
                               elit. Repellat iure maiores nisi porro dolorum neque 
                               commodi deserunt, autem eveniet aut dolorem debitis! 
                               Culpa, inventore ipsam! Esse officia ut facere minima.
                          </p>
                          <div className="d-flex persons m-3 h-25 align-items-center justify-content-start font-weight-bold">
                              <img className="cardImg" src={randomman} alt="" />
                              <p>John Doe</p>
                          </div>
                     </div>  
               </div>

			<div className='p bg-violet-400 m-4 tmap container mx-auto d-flex'>
				<div className=''>
					<h1 className='text-center w-100 w-sm-75 mx-auto d-flex w-sm-100'>
						The money app for africans.
					</h1>
					<p className='text-center p-3'>
						Save,spend,send and invest money across borders.
					</p>
					<div className='images-2'>
						<img src={appStore} className='appstore-2' height={"50px"} alt='' />
						<img
							src={playStore}
							className='playstore-2'
							height={"50px"}
							alt=''
						/>
					</div>
					<button className='btn'>Join Kuda</button>
				</div>
				<img src={logo} className='col-12 col-sm-6 p-0 m-0 d-sm-flex d-none mx-auto' alt='logo' />
			</div>


    </div>

)
}

export default Body;
