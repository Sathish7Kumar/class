// import React, { useEffect, useRef, useState } from 'react'

// // not re-rendering but store the value , show the stored value
// // when another state re-renders

// const Ref = () => {
//     const [count, setcount] = useState(0)

//     const countRef = useRef(0)

//     const handleRef = ()=>{
//         countRef.current++
//     }

//     console.log("Re-Rendering");

//   return (
//     <>
//     <div>
//         <h1>Normal Counter = {count}</h1>
//         <button onClick={()=>setcount(count+1)}>Count</button>
//         <br/>
//         <h1>Ref Counter = {countRef.current}</h1>
//         <button onClick={handleRef}>Ref Count</button>
//     </div>
//     </>
//   )
// }

// export default Ref

// import React, { useEffect, useRef } from 'react'
// // direct DOM Access
// const Ref = () => {

//     const inputRef = useRef()

//     useEffect(()=>{
//         inputRef.current.focus()
//     },[inputRef])

//   return (
//     <>
//     <div style={{margin:"50px 100px"}}>
//         <input  ref={inputRef} type='text' />
//     </div>
//     </>
//   )
// }

// export default Ref

import React, { useEffect, useRef, useState } from 'react'
// prev state  return
const Ref = () => {
    const [inp, setinp] = useState("")
    const prev = useRef("")
    useEffect(()=>{
        prev.current = inp
    },[inp])
  return (
    <div style={{margin:"50px 100px"}}>
    <input onChange={(e)=>setinp(e.target.value)} type='text'/>
    <h1>Input Val = {inp}</h1>
    <h1>Ref Val = {prev.current}</h1>
    </div>
  )
}

export default Ref