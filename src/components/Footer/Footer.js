import React, { useContext } from 'react';
import logo from '../Nav/Logo.svg';
import { NavItem } from '../contexts/MyContext';
import Form from './Form';
import SocialMedia from './SocialMedia';
import IconLocation from './icons/IconLocation';
import IconMail from './icons/IconMail';
import { Link } from 'react-router-dom';
function Footer() {
	const items = useContext(NavItem);
	const policies = [
		'Privacy Policy',
		'Terms & Conditions',
		'Cookies Policy',
		'Accessibility',
		'Contact Us',
	];
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const address = ['United States California', "Fisherman's Wharf"];
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-bloc-1">
					<div className="footer-bloc-1-child-1">
						<img src={logo} alt="little lemon logo" />
					</div>
					<div className="footer-bloc-1-child-2">
						<h3>Contact us</h3>
						<p>
							<span className="footer-bloc-1-child-2-icon">
								<IconLocation />
							</span>
							<span className="footer-bloc-1-child-2-text">
								<span>
									<Link
										to={`https://www.google.com/maps/search/${address[0]}"`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{address[0]}
									</Link>
								</span>
								<span>
									<Link
										to={`https://www.google.com/maps/search/${address[1]}"`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{address[1]}
									</Link>
								</span>
							</span>
						</p>
						<p>
							<span className="footer-bloc-1-child-2-icon">
								<IconMail />
							</span>
							<span className="footer-bloc-1-child-2-text">
								<Link to={'mailto:littleLemon@gmail'}>
									littleLemon@gmail.com
								</Link>
							</span>
						</p>
					</div>
					<div className="footer-bloc-1-child-3">
						<ul>
							{items.map((item, index) => {
								return (
									<li key={index}>
										<Link to={`/${item}`}>{item}</Link>
									</li>
								);
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
						<p>© {currentYear} Little Lemon</p>
					</div>
					<div className="footer-bloc-2-child-2">
						<ul>
							{policies.map((policy, index) => {
								return (
									<li key={index}>
										<Link to={`/${policy}`}>{policy}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
