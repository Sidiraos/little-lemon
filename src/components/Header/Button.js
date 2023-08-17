import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, link }) {
	return (
		<button className="primary-btn" type="button">
			<Link to={link}>{children}</Link>
		</button>
	);
}

export default Button;
