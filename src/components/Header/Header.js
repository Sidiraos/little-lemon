import React , {useRef , useEffect , useState} from 'react';
import hero from './restauranfood-min.jpg';
import HeaderInfo from './HeaderInfo';
import HeaderImg from './HeaderImg';
import { useIntersection } from '../customHooks/useIntersectionObserver';
function Header() {
	const headerImgRef = useRef();
	useIntersection(headerImgRef);
	return (
		<header>
			<HeaderInfo id="h-info"/>
			<HeaderImg ref = {headerImgRef} hero = {hero} />
		</header>
	);
}

export default Header;
