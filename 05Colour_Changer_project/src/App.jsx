import { useState } from "react"


function App() {
  let[colour,setcolour]=useState("#212121")

  return (
    <>
     <div className="w-full h-screen " style={{backgroundColor:colour}}>
     <div className="fixed flex  flex-wrap justify-center  bottom-12 inset-x-4">
      <div className="flex flex-wrap bg-white gap-3 rounded-full shadow-md px-2 py-1">
        <button  onClick={()=>{setcolour("red")}} className="outline-none px-4 py-1 rounded-full shadow-2xl
         "style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>{setcolour("green")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>{setcolour("gray")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"gray"}}>gray</button>
        <button onClick={()=>{setcolour("white")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"white"}}>white</button>
        <button onClick={()=>{setcolour("olive")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"olive"}}>olive</button>
        <button onClick={()=>{setcolour("orange")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={()=>{setcolour("yellow")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>{setcolour("black")}} className="outline-none px-4 py-1 rounded-full shadow-2xl "style={{backgroundColor:"black", color:"white"}}>white</button></div>
     </div>
     </div>
     
    </>
  )
}

export default App
