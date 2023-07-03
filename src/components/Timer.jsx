import { useState, useEffect } from 'react';

const Timer = ({ getTime, isOver }) => {

  const [ time, setTime ] = useState(0);

  useEffect(() => {
    if (isOver) {
      getTime(time)
    }
    else {
      let intervalId;
    intervalId = setInterval(() => {
      setTime(time + 1)
    }, (10));
    return () => clearInterval(intervalId)
    }
  }, [ time, isOver ])

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100; 

  return (
    <div className='timer'>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:
      {milliseconds.toString().padStart(2, "0")}
    </div>
  )
}

export default Timer;