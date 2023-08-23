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
    <div className='booking-slot'>
{
        reservation ? (
          <div className='reservation-info'>
            <p>Date : <b>{specifiedDate()} {reservation.date }</b>  </p>
            <p>Total of Slots : <b>{reservation.totalSlot  }</b> </p>
            <p>Available Slots : <b>{reservation.availableSlots  } </b></p>
            <p>Reserved Slots  : <b>{reservation.reservedSlots}</b> </p>
          </div>
        ) : (
          <div className='reservation-info'>
          <p>Date : <b>{specifiedDate()} {valueOfInputDate}</b>  </p>
          <p>Total of Slots : <b>{defaultTotalSlotCount}</b> </p>
          <p>Available Slots : <b>{defaultTotalSlotCount} </b> </p>
          <p>Reserved Slots  : <b>{defaultReservedSlotCount}</b> </p>
        </div>

        )
      }
    </div>
  )
}

export default BookingSlot