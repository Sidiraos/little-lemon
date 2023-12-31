import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ title, img, description, price, footerCardItem }) {
	return (
		<div className="card">
			<div className="card-img">
				<LazyLoadImage src={img} alt={title} />
			</div>
			<div className="card-header">
				<h3 className="card-header-title">
					<span>{title}</span> <span>{price}</span>
				</h3>
			</div>
			<div className="card-body">
				<p className="card-body-description">{description}</p>
			</div>
			<div className="card-footer">
				<button>
					<Link to={footerCardItem[3]}>{footerCardItem[2]}</Link>
				</button>
				<img
					className="card-footer-logo"
					src={footerCardItem[0]}
					alt={footerCardItem[1]}
				/>
			</div>
		</div>
	);
}

export default Card;
