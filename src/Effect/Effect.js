import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [increment, setincrement] = useState(0)
    const [decrement, setdecrement] = useState(0)
    // 1
    // useEffect(()=>{
    //     console.log("use state execute & re-render");
    // })
    //2
    // useEffect(()=>{
    //     console.log("use state execute & re-render");
    // },[increment])
    // 3
    useEffect(()=>{
        console.log("use state execute & re-render");
    },[])
   

    const addCount =(e)=>{
        e.preventDefault()
        setincrement(increment+1)
    }

    const remvCount =(e)=>{
        e.preventDefault()
        setdecrement(decrement-1)
    }

  return (
    <>
    <h1>use Effect Hook</h1>
    <h2>Increment {increment}</h2>
    <button onClick={addCount}>Add</button>
    <h2>Decrement {decrement}</h2>
    <button onClick={remvCount}>Remove</button>
    </>
  )
}

export default Effect