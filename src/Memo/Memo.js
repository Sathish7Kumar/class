// import React, { useMemo, useState } from "react";

// const Memo = () => {
//   const [count, setcount] = useState(0);
//   const [arr, setarr] = useState([10, 25, 30]);

//   function maximum() {
//     // console.log("function call");
//     return Math.max(...arr);
//   }

//   const val = useMemo(() => maximum(), [arr]);

//   console.log("rerender");

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setcount(count + 1)}>Count</button>
//       <br />
//       <h1>{JSON.stringify(arr)}</h1>
//       <h1>Max Val : {val}</h1>
//       <button onClick={() => setarr([...arr, Math.round(Math.random() * 100)])}>
//         Change Array
//       </button>
//     </>
//   );
// };

// export default Memo;

import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [render, setrender] = useState()
    const [change, setchange] = useState()
    function getRandom(){

        let randomNum = ''
        for (let i = 0 ; i<=100000000 ; i++){
            if(i === 9999999){
                randomNum = Math.round(Math.random() * 100)
            }
        }
        return randomNum
    }

    const val2 = useMemo(()=>getRandom(),[change])
    
  return (
    <>
    <h1>Val : {render}</h1>
    <button onClick={()=>setrender(Math.round(Math.random() * 100))}>Add Random</button>
    <h2>Value 2 : {val2}</h2>
    <button onClick={()=>setchange(Math.round(Math.random() * 100))}>Change</button>
    </>
  )
}

export default Memo
