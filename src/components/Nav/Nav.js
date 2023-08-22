import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.svg';
import HamburgerMenu from './HamburgerMenu';
import { NavItem } from '../contexts/MyContext';

function Nav() {
	console.log("nav is rendered")
	const navItem = useContext(NavItem);
	const itemsNav = navItem.map((item, index) => {
		return (
			<li className="nav-item" key={index}>
				<Link className="nav-link" to={`/${item}`}>
					{item}
				</Link>
			</li>
		);
	});

	const divItemRef = useRef();
	const navRef = useRef();
	const navBtnRef = useRef();

	const handleClick = () => {
		console.log('I am clicked');
		divItemRef.current.classList.toggle('active');
		navRef.current.classList.toggle('active');
		navBtnRef.current.classList.toggle('active');
		navBtnRef.current.children[0].classList.toggle('active');
	};
	useEffect(() => {
		console.log(navRef.current.offsetHeight);
	}, []);

	return (
		<nav ref={navRef}>
			<div className="nav-brand">
				<Link to="/">
					<img src={logo} alt="little lemon logo" />
				</Link>
				<HamburgerMenu ref={navBtnRef} handleClick={handleClick} />
			</div>
			<div ref={divItemRef}>
				<ul className="navbar-nav">{itemsNav}</ul>
			</div>
		</nav>
	);
}
export default React.memo(Nav);
