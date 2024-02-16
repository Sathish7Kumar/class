import React, { useState } from 'react'

const State = () => {

const [count, setCount] = useState(0)
const [name, setName] = useState("Venkat")


// const handleCount = () =>{
//     setCount(count + 1)
// }

// const handleName = () =>{
//     setName("Yesuraj")
// }

  return (
    <>
    <h1>My Name : {name}</h1>
    <button onClick={()=>setName("SACHIN")}>Change Name</button>
    <h1>My Cart Value : {count} </h1>
    <button onClick={()=> setCount(count+1)}>ADD</button>
    </>
  )
}

export default State

