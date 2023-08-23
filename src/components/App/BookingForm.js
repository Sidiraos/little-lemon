import React, { useState } from 'react';
import useDateValidation from '../customHooks/useDateValidation';
import HasBeenConfirmed from './HasBeenConfirmed';

const BookingForm = React.forwardRef((props, ref) => {
	const optionsOccasions = ['Anniversary', 'Birthday', 'Other'];
	const hours = ['17:00', '18:00', '19:00', '20:00', '21:00'];
	const [occasions, setOccasions] = useState(optionsOccasions[1]);
	const [time, setTime] = useState(hours[1]);
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
	const [guests, setGuests] = useState('');
	const [isConfirmed, setIsConfirmed] = useState(false);

	console.log('Booking Form is rendered');

	const { warning, disabled } = useDateValidation(date);
	const slots = props.slots;
	const reservation = slots.find((item) => item.date === date);
	console.log(reservation);
	const availableSlots = reservation ? reservation.availableSlots : 0;
	console.log(availableSlots);

	const dynamicBtnSubmitBtnWithDisabled = (
		<input
			aria-label="on-click"
			type="submit"
			value="Make Your reservation"
			disabled={disabled}
		/>
	);
	const dynamicBtnWithNoAvailableSlots = (
		<input
			aria-label="on-click"
			type="submit"
			value="No slot available"
			disabled={true}
		/>
	);
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsConfirmed(true);
		setTimeout(() => {
			setIsConfirmed(false);
		}, 1500)
		props.getSubmitedData([
			'your choosen date : ' + date,
			'your time : ' + time,
			'The number of guests is : ' + guests,
			'occasions : ' + occasions,
		]);
		props.handleSlots(date);
		setTime(hours[1]);
		setOccasions(optionsOccasions[1]);
	};

	const handleDateChange = (e) => {
		setDate(e.target.value);
		props.updateRefDateValue();
	};

	return (
		<form className="booking-form" onSubmit={handleSubmit}>
			{isConfirmed ? (
				<HasBeenConfirmed data-testid="confirmation-component" />
			) : (
				<>
					<label htmlFor="res-date">Choose date</label>
					<input
						ref={ref}
						type="date"
						id="res-date"
						required
						value={date}
						onChange={handleDateChange}
					/>
					<p style={{ color: 'red' }}>{warning}</p>

					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						name="hourSelected"
						value={time}
						onChange={(e) => {
							setTime(e.target.value);
						}}
					>
						{hours.map((hour, index) => (
							<option value={hour} key={index}>
								{hour}
							</option>
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
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
					/>

					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={occasions}
						onChange={(e) => setOccasions(e.target.value)}
					>
						{optionsOccasions.map((occasion, index) => (
							<option value={occasion} key={index}>
								{occasion}
							</option>
						))}
					</select>
					{reservation
						? reservation.availableSlots === 'No Slot available'
							? dynamicBtnWithNoAvailableSlots
							: dynamicBtnSubmitBtnWithDisabled
						: dynamicBtnSubmitBtnWithDisabled}
				</>
			)}
		</form>
	);
});

export default BookingForm;
