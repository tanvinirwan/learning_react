import './App.css'
import { useState } from 'react'
function App() {

  let [counter,setCounter] = useState(1) ;

  const increase = () =>{
    counter = counter + 1 ;
    if(counter<=20)
    setCounter(counter) ;
    else
      alert("Value can't exceed 20") ;
  }

  const decrease = () => {
    counter = counter - 1 ;
    if(counter>=0)
    setCounter(counter) ;
    else
      alert("Value can't be less than 0") ;
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Counter value : {counter}</h2>
    <div className='buttons' style={{width:'200px',justifySelf:'center', alignSelf:'center'}}>
    <button onClick={increase}>Increase Value</button>
    <button onClick={decrease}>Decrease Value</button>
    </div>
    </>
  )
}

export default App
