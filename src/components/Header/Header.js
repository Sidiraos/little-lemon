import React , {useRef , useEffect , useState} from 'react';
import hero from './restauranfood-min.jpg';
import { Link } from 'react-router-dom';
import Button from './Button';
function Header() {
	const headerImg = useRef();
	const [hasIntersected , setHasIntersected] = useState(false);
	useEffect(()=>{
		if(!hasIntersected){
			const observer = new IntersectionObserver(entry => {
				console.log(entry);
				if(entry[0].isIntersecting){
					headerImg.current.classList.add('active');
					setHasIntersected(!hasIntersected);
				}
			}, {threshold : 0.5});
			observer.observe(headerImg.current);

			return ()=> {
				if (headerImg.current && observer) {
					observer.unobserve(headerImg.current);
				  }
			}
		}



	} , [hasIntersected])
	return (
		<header>
			<div className="header-info">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Nostrum, consequatur quae! Ad obcaecati sed dolore,
					voluptate asperiores, quae quis rem quidem ipsum deserunt
					illum ea distinctio doloremque repellat nostrum molestiae?
					Voluptatibus obcaecati odio odit ratione exercitationem
					adipisci sapiente quos eveniet. Animi quidem laboriosam quo
					veritatis eligendi maiores modi quis, quasi esse earum
					dolor, debitis quae sunt tenetur ad, ratione perferendis?
					Accusantium consequuntur nobis repudiandae expedita,
					debitis, esse voluptas sit a tempore ab, nisi magni quisquam
					in sint tenetur accusamus commodi optio obcaecati? Velit
					dolores doloribus, nam quae necessitatibus magni hic?
				</p>
				<Button link = "/reservations">
					Reserve a table
				</Button>

			</div>

			<div ref = {headerImg} className="header-img">
				<img src={hero} alt="restaurant food" />
				<Button link="/onlinemenu">Online Menu</Button>
			</div>
		</header>
	);
}

export default Header;
