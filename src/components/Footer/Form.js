import React, { useState, useEffect, useRef } from 'react';

function Form() {
	const [email, setEmail] = useState('');
	const [submitValue, setSubmitValue] = useState('Subscribe');
	const emailRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitValue('Thank you!');
		const timeout = setTimeout(() => {
			setTimeout(() => {
				setSubmitValue('Subscribe');
				setEmail('');
			});
		}, 1000);
	};

  const handleChange = (e)=> {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    } else {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
    }
  }
	return (
		<form onSubmit={handleSubmit}>
			<input
				ref={emailRef}
				type="email"
				onChange={handleChange}
        onBlur={(e)=>{e.target.classList.remove('invalid')}}
				value={email}
				required
				placeholder="Your email"
			/>
			<input type="submit" value={submitValue} />
		</form>
	);
}

export default Form;
