import React, { useState } from 'react'
  
 const useCustom = () =>{
    const [count, setcount] = useState(0)
    const handleClick = () =>{
        setcount(count+1)
    }
    return count ,handleClick
}

const Custom = () => {
    
    const [count ,handleClick ] = useCustom()

  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={handleClick}>Add</button>
    </>
  )
}

export default Custom