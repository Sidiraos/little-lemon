import React, { useState , useEffect } from 'react';
function BookingForm() {
	const optionsOccasions =  ['Anniversary', 'Birthday', 'Other']
	const hours = ['17:00', '18:00', '19:00', '20:00', '21:00'];
	const [occasions , setOccasions] = useState(optionsOccasions[1]);
	const [time, setTime] = useState(hours[1]);
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
	const [warning , setWarning] = useState('');
	const [disabled , setDisabled] = useState(false);
	const [guests , setGuests]  = useState('');


	useEffect(()=> {
		console.log(date);
		const userDateYear = date.slice(0,4);
		const userDateMonth =  date.slice(5,7);
		const userDateDay =  date.slice(8,10);
		console.log(parseInt(userDateYear));
		console.log(parseInt(userDateMonth));
		console.log(parseInt(userDateDay));

		const currentYear =  parseInt(new Date().toISOString().slice(0,4))
		const currentMonth =  parseInt(new Date().toISOString().slice(5,7))
		const currentDay =  parseInt(new Date().toISOString().slice(8,10))
		console.log(currentYear);
		console.log(currentMonth);
		console.log(currentDay);

		if(userDateYear < currentYear) {
			setWarning('Please select a current year not an anterior year');
			setDisabled(true);
		} 
		else if (userDateYear > currentYear){
			setWarning('Please select only a current year not a futur year');
			setDisabled(true);

		} 
		else {
			if (userDateMonth < currentMonth) 
			{
				setWarning('Please select a current month or a futur month');
				setDisabled(true);
			} 
			else if (userDateMonth > currentMonth) 
			{
				setWarning('')
				setDisabled(false);
				if(userDateMonth - currentMonth >= 3)
				{
					setWarning('Please select a date less than 3 months from today')
					setDisabled(true);
				}
			} 
			else 
			{
				if (userDateDay < currentDay) 
				{
					setWarning('Please select a current day or a futur day');
					setDisabled(true);
				} else if (userDateDay == currentDay) {
					setWarning('');
					setDisabled(false);
				}
				else {
					setWarning('');
					setDisabled(false);
				}

			}
			
		}

	} , [date]);

	const handleSubmit = (e)=> {
		e.preventDefault();
		setDate(new Date().toISOString().slice(0, 10));
		setTime(hours[1]);
		setGuests('');
		setOccasions(optionsOccasions[1]);
	}

	return (
		<form className="booking-form" onSubmit={handleSubmit}>
			<label htmlFor="res-date">Choose date</label>
			<input type="date" id="res-date" required value={date} onChange={(e) => setDate(e.target.value)} />
			<p style={{color: 'red'}}>{warning}</p>

			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				name='hourSelected'
				value={time}
				onChange={(e) => {
					setTime(e.target.value);
				}}
			>
				{hours.map((hour, index) => (
					<option value={hour} key={index}>{hour}</option>
				))}
			</select>

			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				placeholder="1"
				min="1"
				max="10"
				id="guests"
				required
				value = {guests}
				onChange={(e) => setGuests(e.target.value)}
			/>

			<label htmlFor="occasion">Occasion</label>
			<select id="occasion" value={occasions} onChange={(e) => setOccasions(e.target.value)}>
				{optionsOccasions.map((occasion, index) => (
					<option value={occasion} key={index}>{occasion}</option>
				))}
			</select>

			<input type="submit" value="Make Your reservation" disabled = {disabled}/>
		</form>
	);
}

export default BookingForm;
