import React, { useEffect } from "react";
import "./Header.css";
import kuda from "../../assets/kudalogo.png";
import flag from "../../assets/flag.jpg";
import {useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Header() {
	useEffect(() => {
       AOS.init();
	},[]);
	const linkRef = useRef();

	// console.log(linkRef.current.querySelectorAll("link"));

	const navRef = useRef();
	const menuRef = useRef();

	const navMenu = () => {
		// navRef.current.style.backgroundColor = "red";
		console.log("hello");

		menuRef.current.style.display = "block";
		navRef.current.innerHTML = "X";
	};

	return (
		<>
			<nav className='navbar navbar-expand-lg bg-light shadow navbar-white fixed-top'>
				<div className='container-fluid'>
					<div className='brand'>
						<img src={kuda} alt='logo' />
						<h4 className='mt-1 mx-2'>Kuda</h4>
					</div>

					<ul className='menu-list'>
						<li className='item'>
							<a href='/' className='link' ref={linkRef}>
								Personal
							</a>
							<span className='dropdown-toggle mx-2'></span>
						</li>
						<li className='item'>
							<a href='/' className='link' ref={linkRef}>
								Business
							</a>
							<span className='dropdown-toggle mx-2'></span>
						</li>
						<li className='item'>
							<a href='/' className='link' ref={linkRef}>
								Company
							</a>
							<span className='dropdown-toggle mx-2'></span>
						</li>
						<li className='item'>
							<a href='/' className='link' ref={linkRef}>
								Help
							</a>
							<span className='dropdown-toggle mx-2'></span>
						</li>
					</ul>

					{/* </div> */}

					<div className='others'>
						{/* <div className="mt-3"> */}
						<a href='/' className='link'>
							Sign In
						</a>
						{/* </div> */}

						<button className='btn'>Join Kuda</button>

						<img alt='nigerian-flag' className='flag' src={flag} />
					</div>

					<div className='hamburger' ref={navRef} onClick={navMenu}>
						<div></div>
						<div></div>
					</div>
				</div>

				<div className='off-canvas bg-white' data-aos="fade-in" ref={menuRef}>
					<div className='buttons w-50 p-2 d-flex align-items-center'>
						<button className='btn m-2 w-75'>Join Kuda</button>
						<button className='btn w-75'>Sign in</button>
					</div>

					<div className='mt-4 mx-3 menu-content'>
						<div className="d-flex align-items-center justify-content-between">
							<span>Personal</span>
						    <span style={{fontSize: "20px"}} className='dropdown-toggle mx-2'></span>
						</div>
						<hr></hr>
						<div className="d-flex align-items-center justify-content-between">
							<span>Business</span>
						    <span style={{fontSize: "20px"}} className='dropdown-toggle mx-2'></span>
						</div>
						<hr></hr>
						<div className="d-flex align-items-center justify-content-between">
							<span>Company</span>
						    <span style={{fontSize: "20px"}} className='dropdown-toggle mx-2'></span>
						</div>
						<hr></hr>
						<div className="d-flex align-items-center justify-content-between">
							<span>Developers</span>
						</div>
						<hr></hr>
						<div className="d-flex align-items-center justify-content-between">
							<span>Contact Us</span>
						</div>
						<hr></hr>
						<div className="d-flex align-items-center justify-content-between">
							<span>Help</span>
						    <span style={{fontSize: "20px"}} className='dropdown-toggle mx-2'></span>
						</div>
						
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
