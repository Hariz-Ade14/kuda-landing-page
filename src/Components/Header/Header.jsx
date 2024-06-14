import React, {useEffect} from "react";
import "./Header.css";
import kuda from "../../assets/kudalogo.png";
import flag from "../../assets/flag.jpg";
import {useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
	useEffect(() => {
		AOS.init();
	}, []);
	const linkRef = useRef();

	const navRef = useRef();
	const menuRef = useRef();
	const cancelRef = useRef();

	const navMenu = () => {
		menuRef.current.style.display = "block";
		navRef.current.style.display = "none";

		cancelRef.current.style.display = "block";
	};

	const cancel = () => {
		menuRef.current.style.display = "none";
		navRef.current.style.display = "block";

		cancelRef.current.style.display = "none";
	};

	return (
		<>
			<nav className='navbar navbar-expand-lg bg-light shadow navbar-white fixed-top'>
				<div className='container-fluid'>
					<div className="d-flex align-items-center">
						<div className='brand mx-2 mx-sm-5'>
							<img src={kuda} alt='logo' />
							<h4 className='mt-0 brandname mx-2'>Kuda.</h4>
						</div>
						<div>
							<ul className='menu-list my-3'>
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
						</div>
					</div>
					

					

					<div className='others'>
						<a href='/' className='link'>
							Sign In
						</a>

						<button className='btn w-50'>Join Kuda</button>

						<img alt='nigerian-flag' className='flag' src={flag} />
					</div>

					<div className='bars'>
						<div className='hamburger' ref={navRef} onClick={navMenu}>
							<div></div>
							<div></div>
						</div>
						<h4 className='cancel' ref={cancelRef} onClick={cancel}>
							X
						</h4>
					</div>
				</div>

				<div className='off-canvas bg-white' data-aos='fade-in' ref={menuRef}>
					<div className='buttons w-75 p-2 w-sm-50 py-2 d-flex align-items-center'>
						<button className='btn mx-2 w-75'>Join Kuda</button>
						<button className='btn w-75 mx-2'>Sign in</button>
					</div>

					<div className='mt-4 mx-3 menu-content'>
						<div className='d-flex mb-3 w-100 w-sm-50 align-items-center justify-content-between'>
							<span>Personal</span>
							<span
								style={{fontSize: "20px"}}
								className='dropdown-toggle mx-2'
							></span>
						</div>
						<hr></hr>
						<div className='d-flex my-3 w-100 w-sm-50 align-items-center justify-content-between'>
							<span>Business</span>
							<span
								style={{fontSize: "20px"}}
								className='dropdown-toggle mx-2'
							></span>
						</div>
						<hr></hr>
						<div className='d-flex my-3 w-100 w-sm-50 align-items-center justify-content-between'>
							<span>Company</span>
							<span
								style={{fontSize: "20px"}}
								className='dropdown-toggle mx-2'
							></span>
						</div>
						<hr></hr>
						<div className='d-flex my-3 w-100 w-sm-50 align-items-center justify-content-between'>
							<span>Developers</span>
						</div>
						<hr></hr>
						<div className='d-flex w-100 my-3 w-sm-50 align-items-center justify-content-between'>
							<span>Contact Us</span>
						</div>
						<hr></hr>
						<div className='d-flex my-3 w-100 w-sm-50 align-items-center justify-content-between'>
							<span>Help</span>
							<span
								style={{fontSize: "20px"}}
								className='dropdown-toggle mx-2'
							></span>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
