import React from 'react';
import Button from './Button';

const HeaderImg = React.forwardRef(({hero}, ref)=>{
	return (
		<div ref={ref} className="header-img">
			<img src={hero} alt="restaurant food" />
			<Button link="/onlinemenu">Online Menu</Button>
		</div>
	);
})

export default HeaderImg;
