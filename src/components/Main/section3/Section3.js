import React from 'react';
import SectionInfo from '../../Header/HeaderInfo';
import chefMario from '../images/section 3 gallery/Mario and Adrian A-min.jpg';
import chefAdrian from '../images/section 3 gallery/Mario and Adrian b-min.jpg';
import restaurant from '../images/section 3 gallery/restaurant chef B-min.jpg';
import restaurant2 from '../images/section 3 gallery/restaurant-min.jpg';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Section3() {
	const galleryImg = [
		{
			id: 1,
			img: chefMario,
		},
		{
			id: 2,
			img: chefAdrian,
		},
		{
			id: 3,
			img: restaurant,
		},
		{
			id: 4,
			img: restaurant2,
		},
	];
	return (
		<section className="section3">
			<div className="section3-container">
				<SectionInfo id="s-info" />
				<div className="section3-img">
					{galleryImg.map((img) => {
						return (
							<Link to={img.img}>
								<LazyLoadImage
									key={img.id}
									src={img.img}
									alt={`little lemon area ${img.id}`}
									style={{ width: '100%' }}
								/>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Section3;
