import {
	render,
	screen,
	fireEvent,
} from '@testing-library/react';
import App from './App';
import React from 'react';
import BookingForm from './components/App/BookingForm';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test('date state updates when input value changes', () => {
	render(<BookingForm />);

	const dateInput = screen.getByLabelText('Choose date');

	const newDate = '2023-08-23';
	fireEvent.change(dateInput, { target: { value: newDate } });

	const updatedDate = screen.getByDisplayValue(newDate);
	expect(updatedDate).toBeInTheDocument();
});

test('guests state updates when input value changes', () => {
	render(<BookingForm />);
	const guestsInput = screen.getByLabelText('Number of guests');
	const newGuestsValue = '4';
	fireEvent.change(guestsInput, { target: { value: newGuestsValue } });
	const updatedGuests = screen.getByDisplayValue(newGuestsValue);
	expect(updatedGuests).toBeInTheDocument();
});
