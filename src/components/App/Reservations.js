import React, { useRef, useReducer, useEffect , useState } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';

function Reservations() {
    console.log('reservations is rendered')
	const dateRef = useRef();
    const [defined , setDefined] = useState(false);
    const [submitData , setSubmitData] = useState([]);

	useEffect(() => {
        console.log('I am useEffect of reservations component')
		console.log("current date in useRef in useEffect of reservation component" , dateRef.current.value);
        setDefined(true);
	}, [defined]);

    const totalSlotCount = 30;
    const reservedSlotCount = 0;

    const initialState = [{
        date : new Date().toISOString().slice(0, 10),
        totalSlot : totalSlotCount,
        reservedSlots : 0,
        availableSlots : totalSlotCount
    }];

    const [state , dispatch] = useReducer((state , action)=>{
        switch(action.type) {
            case 'update_reservation' :
                const updatedState = state.map(reservation => {
                    if (reservation.date === action.date && reservation.availableSlots > 0) {
                      return {
                        ...reservation,
                        reservedSlots: reservation.reservedSlots + 1,
                        availableSlots: reservation.availableSlots - 1 === 0 ? 'No Slot available'  : reservation.availableSlots - 1
                      };
                    }
                    return reservation;
                  });
                  return updatedState;

            case 'add_reservation' :
                let newSlot  =  {
                    date : action.date,
                    totalSlot : totalSlotCount,
                    reservedSlots : reservedSlotCount + 1,
                    availableSlots : totalSlotCount - 1

                }
                return [ ...state , { ...newSlot }]
            default :
                return initialState;

            }
    }, initialState)

    const updateRefDateValue = ()=> {
        setDefined(false);
    }

    const handleSlots = (dateReserved)=> {
        const existingReservation = state.find(reservation => reservation.date === dateReserved);

        if (existingReservation) {
            dispatch({ type: 'update_reservation', date: dateReserved });
        } else {
            dispatch({ type: 'add_reservation', date: dateReserved });
        }

        console.log('handleSlots executed')
    }

    useEffect(()=>{
        console.log(state)

    } , [state]);

    const getSubmitedData = (values)=>{
        setSubmitData([...values]);
    }

	return (
		<div className='reservations'>
            {defined && <BookingSlot date={dateRef.current.value} slots = {state} defaultSlot={[totalSlotCount , reservedSlotCount]} submitData = {submitData}  />}
			<BookingForm ref={dateRef} handleSlots = {handleSlots} updateRefDateValue={updateRefDateValue} slots = {state} getSubmitedData = {getSubmitedData}/>
		</div>
	);
}

export default Reservations;
