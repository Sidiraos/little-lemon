import React, { useContext } from 'react';
import logo from '../Nav/Logo.svg';
import { NavItem } from '../contexts/MyContext';
import Form from './Form';
import SocialMedia from './SocialMedia';
function Footer() {
	const items = useContext(NavItem);
	const policies =  [
		'Privacy Policy',
		'Terms & Conditions',
		'Cookies Policy',
		'Accessibility',
		'Contact Us',
	]
	return (
		<footer>
			{/* <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
			>
				<path d="M0 88.4358L1440 0V406H0V88.4358Z" fill="#37383C" />
			</svg> */}
			<div className="footer-bloc-1">
				<div className="footer-bloc-1-child-1">
					<img src={logo} alt="little lemon logo" />
				</div>
				<div className="footer-bloc-1-child-2">
					<h3>Contact us</h3>
					<p>
						<span>icon location</span>
						<span>
							<span>text1</span>
							<span>text2</span>
						</span>
					</p>
					<p>
						<span>gmail icon</span>
						<span> mailto email adress</span>
					</p>
				</div>
				<div className="footer-bloc-1-child-3">
					<ul>
						{items.map((item, index) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
				<div className="footer-bloc-1-child-4">
					<h3>Subscribe</h3>
					<Form />
					<div>
						<h4>Follow us</h4>
						<SocialMedia />
					</div>
				</div>
			</div>
			<div className="footer-bloc-2">
				<div className="footer-bloc-2-child-1">
					<p>Copyright</p>
				</div>
				<ul className="footer-bloc-2-child-2">
					{
						policies.map((policy, index) => {
							return <li key={index}>{policy}</li>;
						})
					}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
