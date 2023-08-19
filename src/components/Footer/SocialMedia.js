import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter , faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function SocialMedia() {
	const socialIcons = [
    {
      icon : faFacebook,
      url : 'facebook.com'
    } ,  
    {
      icon : faInstagram,
      url : 'instagram.com'
    },
    {
      icon : faTwitter,
      url : 'twitter.com'
    },
    {
      icon : faTelegram,
      url : 'telegram.com'
    }

   
  ];
	return (
		<div className="social">
			{socialIcons.map((icon, index) => {
				return (
					<Link to={`/${icon.url}`}>
						<FontAwesomeIcon key={index} icon={icon.icon} />
					</Link>
				);
			})}
		</div>
	);
}

export default SocialMedia;
