// useDateValidation.js
import { useState, useEffect } from 'react';

function useDateValidation(date) {
  const [warning, setWarning] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const userDateYear = parseInt(date.slice(0, 4));
    const userDateMonth = parseInt(date.slice(5, 7));
    const userDateDay = parseInt(date.slice(8, 10));
    const currentYear = parseInt(new Date().toISOString().slice(0, 4));
    const currentMonth = parseInt(new Date().toISOString().slice(5, 7));
    const currentDay = parseInt(new Date().toISOString().slice(8, 10));

    if (userDateYear < currentYear) {
      setWarning('Please select a current year not an anterior year');
      setDisabled(true);
    } else if (userDateYear > currentYear) {
      setWarning('Please select only a current year not a futur year');
      setDisabled(true);
    } else {
      if (userDateMonth < currentMonth) {
        setWarning('Please select a current month or a futur month');
        setDisabled(true);
      } else if (userDateMonth > currentMonth) {
        setWarning('');
        setDisabled(false);
        if (userDateMonth - currentMonth >= 3) {
          setWarning('Please select a date less than 3 months from today');
          setDisabled(true);
        }
      } else {
        if (userDateDay < currentDay) {
          setWarning('Please select a current day or a futur day');
          setDisabled(true);
        } else if (userDateDay === currentDay) {
          setWarning('');
          setDisabled(false);
        } else {
          setWarning('');
          setDisabled(false);
        }
      }
    }
  }, [date]);

  return { warning, disabled };
}

export default useDateValidation;
