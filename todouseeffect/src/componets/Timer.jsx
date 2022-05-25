import React, {useEffect,useState} from 'react'
import StopWatch from './StopWatch'

const Timer = () => {
    const [timer,setTimer] = useState(0)
  
    useEffect(()=>{
        const id = setInterval(() => {
          
            if(timer >=10){
                clearInterval(id)
                setTimer(0)
            }else{
                setTimer(timer + 1)
            }
        
          }, 1000);

          return ()=>{
              clearInterval(id)
          }

    },[timer])

  return (
      <>
    <div>
      CountDown : {timer}
      <h1>Show Todos </h1>

    
    </div>
     
      </>
  )
}

export default Timer
