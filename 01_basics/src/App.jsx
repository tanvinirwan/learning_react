
import { useState } from "react";

function App() {

  const [task,setTask] = useState([]) ;
  const [input,setInput] = useState('') ;

  function addTask(){
    if(input.trim==="")
      return ;
    setTask([...task,{text:input,done:false}])
    setInput('') ;
  }

  return (
    <>
     <div style={{backgroundColor:"#F3E4C9",width:"400px",height:"400px",justifyContent:"center",justifySelf:"center",alignItems:"center",borderRadius:"20px"}}>
    <div style={{backgroundColor:"#0A2947",width:"200px", height:"50px", display:"flex",justifySelf:"center",alignItems:"center",justifyContent:"center",borderRadius:"30px",marginTop:"10px"}}>
    <h2 style={{textAlign:"center"}}>To Do List</h2>
    </div>
    <div style={{padding:"10px",display:"flex",justifyContent:"center",gap:"5px"}}>
      <input type="text" placeholder="Enter task here" style={{borderRadius:"5px"}} value={input} onChange={(e)=>setInput(e.target.value)} />
      <button style={{borderRadius:"5px"}} onClick={addTask}>Add</button>
      </div>
      <div id="options" style={{display:"flex",padding:"10px",gap:"10px"}}>
        <button style={{borderRadius:"5px"}}>All</button>
        <button style={{borderRadius:"5px"}}>Done</button>
        <button style={{borderRadius:"5px"}}>Active</button>
      </div>
      <div id="tasks">

      </div>
    </div>
     
    </>
  )
}

export default App;
