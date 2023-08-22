import React from 'react'

function BookingSlot({date: valueOfInputDate , slots , defaultSlot}) {
  const [defaultTotalSlotCount , defaultReservedSlotCount] = defaultSlot;

  const reservation = slots.find(item => item.date === valueOfInputDate);
  console.log(valueOfInputDate)
  console.log(reservation)

  const specifiedDate = ()=>{
    const today = new Date().toISOString().slice(0, 10);
	const userDateDay =  parseInt(valueOfInputDate.slice(8,10));
	const currentDay =  parseInt(new Date().toISOString().slice(8,10))
    if(valueOfInputDate === today){
        return 'Today'
    } else {
        // 29 because if user date is 1 and today is 30 end of month, same logic with 30 end of month is 31 (normal month)
        // 27 is end of february is 28 , 28 if end of february is 29
        if (userDateDay - currentDay === 1 || userDateDay - currentDay === 27 || userDateDay - currentDay === 28 || userDateDay - currentDay === 29 || userDateDay - currentDay === 30) {
            return 'Tomorrow'
        } else {
            return ''
        }
    }
  } 

  console.log('Booking Slot is rendered')

  return (
    <div>
      {
        reservation ? (
          <>
            <h1>Date : {specifiedDate()} {reservation.date } </h1>
            <h2>Total of Slots : {reservation.totalSlot  }</h2>
            <h2>Available Slots : {reservation.availableSlots  } </h2>
            <h2>Reserved Slots  : {reservation.reservedSlots}</h2>
          </>
        ) : (
          <>
          <h1>Date : {specifiedDate()} {valueOfInputDate } </h1>
          <h2>Total of Slots : {defaultTotalSlotCount }</h2>
          <h2>Available Slots : {defaultTotalSlotCount  } </h2>
          <h2>Reserved Slots  : {defaultReservedSlotCount}</h2>
        </>

        )

        
      }

    </div>
  )
}

export default BookingSlot