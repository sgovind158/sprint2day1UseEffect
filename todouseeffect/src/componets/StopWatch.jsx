import React, { useState } from 'react'

const StopWatch = () => {
  const [timerId,setTimerId] = useState(null);
  const [watch,setWatch] = useState(0);
  const start = ()=>{
      console.log(0)
      if(!timerId){
          let id = setInterval(() => {
              setWatch((prev)=> prev + 1)
              
          },1000);
          setTimerId(id)
      }
  }

  const pause = ()=>{
      clearInterval(timerId)
      setTimerId(null)
  }
  const reset  = ()=>{
      clearInterval(timerId)
      setWatch(0)
      setTimerId(null)
  }

  return (
      <>
    <div>
      <h2>StopWatch</h2>
      <h1>{watch}</h1>
    </div>

    <button onClick={start}>start</button>
    <button onClick={pause}>pause</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default StopWatch
