import React from 'react';
// import Card from '../Card';
import footerLogo from '../images/person-biking-solid.svg';
import bruchetta from '../images/bruchetta-min.jpg';
import greekSalad from '../images/greek salad-min.jpg';
import lemonDessert from '../images/lemon dessert-min.jpg';
import ClipLoader from 'react-spinners/ClipLoader';


const Card = React.lazy(() => import('../Card'));


function Section1() {
	const cardItem = [
		{
			title: 'Greek Salad',
			img: greekSalad,
			description: `A Greek salad is a vibrant ensemble of flavors: succulent tomatoes, crisp cucumbers, tangy feta, briny olives, and zesty red onions, all drizzled with olive oil and sprinkled with oregano. It's a fresh and savory representation of Mediterranean cuisine.`,
			price: '$12',
		},
		{
			title: 'Bruchetta',
			img: bruchetta,
			description: `Bruschetta: Grilled bread rubbed with garlic, topped with diced tomatoes, fresh basil, olive oil—an appetizing blend of crunch, zest, and herb-infused delight.`,
			price: '$18',
		},
		{
			title: 'Lemon Dessert',
			img: lemonDessert,
			description:
				'Lemon Dessert: Zesty indulgence with a citrusy twist. Luscious lemon curd, velvety texture, balanced sweetness—a tangy-sweet finale that delights the palate.',
			price: '$15',
		},
	];
	const footerCardItem = [
		footerLogo,
		'delivery logo',
		'Order food',
		'/orderfood',
	];
	return (
		<section className="section1">
			<h1>This Week Specials !</h1>

			<div className="container">
				{cardItem.map((item, index) => {
					return (
						<React.Suspense
						key={index}
							fallback={
								<ClipLoader
									color={'blue'}
									loading={true}
									cssOverride={{
										margin : '0 auto'
									}}
									size={100}
									aria-label="Loading Spinner"
									data-testid="loader"
								/>
							}
						>
							<Card
								key={index}
								title={item.title}
								img={item.img}
								description={item.description}
								price={item.price}
								footerCardItem={footerCardItem}
							/>
						</React.Suspense>
					);
				})}
			</div>
		</section>
	);
}

export default Section1;
