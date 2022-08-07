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

  return <h2>{date.toLocaleTimeString('fr-FR')}</h2>
}

export default Clock
