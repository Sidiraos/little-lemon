import React, { useRef } from 'react';
import Button from './Button';
import { useIntersection } from '../customHooks/useIntersectionObserver';

function HeaderInfo({ id }) {
	const h1 = useRef();
	const h2 = useRef();
  const text = useRef();
	useIntersection(h1);
	useIntersection(h2);
  useIntersection(text);
	return (
		<div className="header-info" id={id}>
			<h1 ref={h1}>Little Lemon</h1>
			<h2 ref={h2}>Chicago</h2>
			<p ref= {text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Nostrum, consequatur quae! Ad obcaecati sed dolore, voluptate
				asperiores, quae quis rem quidem ipsum deserunt illum ea
				distinctio doloremque repellat nostrum molestiae? Voluptatibus
				obcaecati odio odit ratione exercitationem adipisci sapiente
				quos eveniet. Animi quidem laboriosam quo veritatis eligendi
				maiores modi quis, quasi esse earum dolor, debitis quae sunt
				tenetur ad, ratione perferendis? Accusantium consequuntur nobis
				repudiandae expedita, debitis, esse voluptas sit a tempore ab,
				nisi magni quisquam in sint tenetur accusamus commodi optio
				obcaecati? Velit dolores doloribus, nam quae necessitatibus
				magni hic?
			</p>
			<Button link="/reservations">Reserve a table</Button>
		</div>
	);
}

export default HeaderInfo;
