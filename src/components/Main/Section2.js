import React, { useState } from 'react';
import Testimonials from './Testimonials';
import profile1 from './images/section2/profile1.jpg';
import profile2 from './images/section2/profile2.jpg';
import profile3 from './images/section2/profile3.jpg';
import profile4 from './images/section2/profile4.jpg';
import star from './images/section2/rating.png';

function Section2() {
	const [reviews, setReviews] = useState([
		{
			name: 'Emily Smith',
			title: 'Food Critic',
			text: '“A culinary journey like no other. The flavors transported me to paradise.”',
			rating: 2.5,
			profile: profile1,
		},
		{
			name: 'Michael Johnson',
			title: 'Regular Patron',
			text: '“Each visit is a delightful experience. The ambiance and service are exceptional.”',
			rating: 3,
			profile: profile2,
		},
		{
			name: 'Sophia Williams',
			title: 'Gastronomy Enthusiast',
			text: '“The creativity in every dish is astonishing. A true haven for food lovers.”',
			rating: 5,
			profile: profile3,
		},
		{
			name: 'Alex Rodriguez',
			title: 'Local Foodie',
			text: '“Every bite is an explosion of flavors. The menu is a work of culinary art.”',
			rating: 4.5,
			profile: profile4,
		},
	]);
	return (
		<section className="section2">
			<h1>Testimonials</h1>
            <div className='container'>
            {
                reviews.map((review, index) => {
                    return (
                        <Testimonials
                            key={index}
                            name={review.name}
                            title={review.title}
                            text={review.text}
                            rating={review.rating}
                            profile={review.profile}
                        /> 
                        )
                })
            }
            </div>
            
		</section>
	);
}

export default Section2;
