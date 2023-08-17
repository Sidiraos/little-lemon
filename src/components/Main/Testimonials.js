import React from 'react';
import Star from './Star';

function Testimonials({ name, title, text, rating, profile }) {
    const stars = [];
    for (let index = 0; index < Math.ceil(rating); index++) {
            stars.push(<Star />)
        }

	return (
		<div className="card">
			<div className="card-img">
				<img src={profile} alt={profile} />
			</div>
			<div className="card-body">
				<h3 className="card-body-name">{name}</h3>
				<p>{title}</p>
				<div className="card-body-rating">
                    {
                        stars.map((star , index)=>{
                            return(
                                <Star key = {index} />
                            )
                        })
                    }
				</div>
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
