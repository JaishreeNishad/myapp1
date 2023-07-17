import React, { useState } from "react";


 const App = () =>{
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState();//useState accepts an initial state and returns two values//

  const UpdateTime = ()=>{
    time = new Date().toLocaleTimeString();
    setCtime( time)
  };

  setInterval( UpdateTime, 1000);//The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval.//


  return(
    <>
    <h1>{time}</h1>
    </>
  )

}
export default App;