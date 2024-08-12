import React, { useEffect, useState } from 'react'


const Timer = () => {

    const [startTime, setStartTime] = useState(  new Date())

    useEffect(() => {

        setInterval(() => {
 setStartTime(new Date())
        },1000)
    },[])



    const formatDate = (time) => {

        return  time.toLocaleTimeString('en-US',{hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',})
    }
  return (
    <div>Timer
        <p> {formatDate(startTime)}</p>
    </div>
  )
}

export default Timer