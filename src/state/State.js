import React, { useState } from 'react'

const State = () => {

const [count, setCount] = useState(1000)
const [name, setName] = useState("Venkat")
const [counter ,setcounter] = useState({value:10})

const handleCount = () =>{
    setcounter((preValue)=>{
      // preValue = {value:10}
      return {value: preValue.value + 1}
    })
}

// const handleName = () =>{
//     setName("Yesuraj")
// }

  return (
    <>
    <h1>My Name : {name}</h1>
    <button onClick={()=>setName("SACHIN")}>Change Name</button>
    <h1>My Cart Value : {count} </h1>
    <button onClick={()=> setCount(count + 500)}>ADD</button>
    <h1>My Counter Value : {counter.value} </h1>
    <button onClick={handleCount}>ADD</button>
    </>
  )
}

export default State

