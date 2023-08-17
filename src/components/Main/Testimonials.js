import React from 'react';
import Star from './Star';

function Testimonials({ name, title, text, rating, profile , onDragStart }) {
	const stars = [];
	for (let index = 0; index < Math.ceil(rating); index++) {
		stars.push(<Star />);
	}

	return (
		<div onDragStart={onDragStart} className="card testimonial-card">
			<div className="card-img">
				<img src={profile} alt={profile} />
			</div>
			<div className="card-info">
				<h3 className="card-info-name">{name}</h3>
				<p>{title}</p>
				<div className="card-info-rating">
					{stars.map((star, index) => {
						return <Star key={index} />;
					})}
				</div>
			</div>
			<div className="card-body">
				<p className="card-body-description">{text}</p>
			</div>

			<div className="card-footer">
				<p>
					<span>👍🏽</span> Testimonials
				</p>
			</div>
		</div>
	);
}

export default Testimonials;
