import React, { useState } from "react"
import { values } from "./data";

function CalculateInput(){
     setResult(eval(input))
     setDisplay('')
}

export default function Calculator(){
  const [display,setDisplay]=useState('')
  const [result,setResult]=useState(null)
 
  function Button({value}){

    return(
        <>
        <button onClick={()=>displayValue(value.value)}>{value.label}</button>
        </>
    )
  }

  function displayValue(input){
    setDisplay(display+input)
  }

  return(
    <>
    <h1 style={{textAlign:"center"}}>Simple Calculator</h1>
    <div className="grid-container"> 
    <div className="item1"><input type="text" value={display} readOnly></input></div>
 
   {
    values.map((value,index)=>(<Button value={value} key={index}>=</Button>))
   }
   <button onClick={()=>CalculateInput(display)}>=</button>
    </div>   
    </>
  )
}