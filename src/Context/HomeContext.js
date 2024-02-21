// import React, { useState } from 'react'

// const HomeContext = () => {
//     const [myname, setmyname] = useState("VENKAT")
//   return (
//     <>
//     <h1>Home Context</h1>
//     <Home1 name={myname}/>
//     </>
//   )
// }

// export default HomeContext

// const Home1 = ({name}) => {
//     return (
//       <>
//       <h1>Hello - 1 </h1>
//       <Home2 name={name}/>
//       </>
//     )
//   }

//   const Home2 = ({name}) => {
//     return (
//       <>
//       <h1>Hello - 2</h1>
//       <Home3 name = {name}/>
//       </>
//     )
//   }

//   const Home3 = ({name}) => {
//     return (
//       <>
//       <h1>Hello My name is {name}</h1>
//       </>
//     )
//   }
  

import React, { createContext, useContext, useState } from 'react'

// useContext  - {create -> provider}

const UserContext = createContext()

const HomeContext = () => {
    const [myname, setmyname] = useState("VENKAT")
      return (
        <UserContext.Provider value={myname} >
        <h1>Home Context</h1>
        <Home1/>
        </UserContext.Provider>
      )
}

export default HomeContext

const Home1 = () => {
    return (
      <>
      <h1>Hello - 1 </h1>
      <Home2/>
      </>
    )
  }

  const Home2 = () => {
    return (
      <>
      <h1>Hello - 2</h1>
      <Home3/>
      </>
    )
  }

  const Home3 = () => {
    const username = useContext(UserContext)
    return (
      <>
      <h1>Hello My name is {username}</h1>
      </>
    )
  }

  
  

