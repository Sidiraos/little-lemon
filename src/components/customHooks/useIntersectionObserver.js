import { useState, useEffect } from 'react';

export const useIntersection = (myref) => {
	const [hasIntersected, setHasIntersected] = useState(false);
	useEffect(() => {
		if (!hasIntersected) {
			const observer = new IntersectionObserver(
				(entry) => {
					console.log(entry);
					if (entry[0].isIntersecting) {
						myref.current.classList.add('active');
						setHasIntersected(!hasIntersected);
					}
				},
				{ rootMargin: `-20px 0px 0px 0px` },
			);
			observer.observe(myref.current);

			return () => {
				if (myref.current && observer) {
					observer.unobserve(myref.current);
				}
			};
		}
	}, [hasIntersected, myref]);
};
