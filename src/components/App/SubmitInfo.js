import React from 'react';

function SubmitInfo({ submitData }) {
	console.log(submitData);
	return (
		<>
			{submitData.length > 0 && (
				<div className="submit-info">
					<h1>Thank you for your reservation</h1>
					<ul>
						{submitData.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}

export default SubmitInfo;
