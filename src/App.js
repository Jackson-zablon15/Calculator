import React from "react"
import { useState } from "react" 

function Button ({value}){
  const [displayValue,setDisplayValue]=useState('clicked');
  function handleClick(){
   setDisplayValue(4)
      }
  return(
    <div className="item" onClick={handleClick} >{value}</div>
  )
}

export default function Calculator({displayValue}){
 
  return(
    <>
    <h1 style={{textAlign:"center"}}>Simple Calculator</h1>
    <div className="grid-container">
    <div className="item1">{displayValue}</div>
 
    <Button value={"C"} />
    <Button value={"()"}/>
    <Button value={"%"}/>
    <Button value={"/"}/>

    <Button value={7}/>
    <Button value={8}/>
    <Button value={9}/>
    <Button value={"X"}/>
   
    <Button value={4}/>
    <Button value={5}/>
    <Button value={6}/>
    <Button value={"-"}/>

    <Button value={1}/>
    <Button value={2}/>
    <Button value={3}/>
    <Button value={"+"}/>
   
    <Button value={"(-)"}/>
    <Button value={0}/>
    <Button value={"."}/>
    <Button value={"="}/>
    </div>
   
    </>
  )
}