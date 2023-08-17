import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.svg';
import HamburgerMenu from './HamburgerMenu';

function Nav() {
	const [navItem, setNavItem] = useState([
		'Home',
		'Login',
		'About',
		'Menu',
		'Reservations',
		'Order online',
	]);
	const itemsNav = navItem.map((item, index) => {
		return (
			<li className="nav-item" key={index}>
				<Link className='nav-link' to={`/${item}`}>{item}</Link>
			</li>
		);
	});

	const [active, setActive] = useState(false);
	const divItemRef = useRef();
	const navRef = useRef();

	const handleClick = () => {
		setActive(!active);
		console.log(active);
		console.log('I am clicked');
		divItemRef.current.classList.toggle('active');
		navRef.current.classList.toggle('active');
	};
	useEffect(()=>{
		console.log(navRef.current.offsetHeight);
		// document.body.style.paddingTop = navRef.current.offsetHeight + 'px';
	} , [])

	return (
		<nav ref = {navRef}>
			<div className="nav-brand">
				<Link to="/">
					<img src={logo} alt="little lemon logo" />
				</Link>
				<HamburgerMenu active={active} handleClick={handleClick} />
			</div>
			<div ref={divItemRef}>
				<ul className="navbar-nav">{itemsNav}</ul>
			</div>
		</nav>
	);
}

export default Nav;
