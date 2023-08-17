import React from 'react';
import {Link} from 'react-router-dom';

function Card({ title, img, description, price , footerItem}) {
	return (
		<div className="card">
			<div className="card-img">
				<img src={img} alt={title} />
			</div>
			<div className="card-body">
				<h3 className="card-body-title">
					 <span>{title}</span> <span>{price}</span>
				</h3>
                <p className='card-body-description'>
                    {description}
                </p>
			</div>
			<div className="card-footer">
                 <button>
					<Link to={footerItem[3]}>
						{footerItem[2]}
					</Link>
				</button>
                 <img className='card-footer-logo' src={footerItem[0]} alt={footerItem[1]} />
            </div>
		</div>
	);
}

export default Card;
