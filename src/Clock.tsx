import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return <h2 className='time'>{date.toLocaleTimeString('ru-RU')}</h2>
}

export default Clock
