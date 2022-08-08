import React, { useEffect, useState } from 'react'

const CurrentDate = () => {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  const options: {
    month: "long" | "numeric" | "2-digit" | "short" | "narrow" | undefined; 
    day: "numeric" | "2-digit" | undefined;  
  } = {month: 'long', day: 'numeric'};

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return <h2 className='date'>{date.toLocaleDateString('ru-RU', options)}</h2>
}

export default CurrentDate;
