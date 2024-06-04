import React from "react";
import "./Header.css";


function Header() {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-light shadow-lg navbar-white'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						Kuda
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavDropdown'
						aria-controls='navbarNavDropdown'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse d-flex align-items-center justify-content-between' id='navbarNavDropdown'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='/'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Features
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Pricing
								</a>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='/'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'
								>
									Dropdown link
								</a>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item' href='/'>
											Action
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='/'>
											Another action
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='/'>
											Something else here
										</a>
									</li>
								</ul>
							</li>
						</ul>

						<div className="d-flex align-items-center justify-content-between bg-dange p-1">
							 <p className="my-2 mx-5">Sign In</p>

							 <button className="btn btn-primary">Join Kuda</button>

							 <img alt="nigerian-flag" src="public/download.png"/>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
