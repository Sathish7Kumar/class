import React, { createContext, useState } from 'react'
import Home4 from '../NAV/context/Home4'

 export const UserContext2 = createContext()

const Homepage2 = () => {
  //  useContext => create , provide
  const [name, setName] = useState("Venkat")
  return (
    <UserContext2.Provider value={name}>
    <h1>Welcome</h1>
    <Home4 />
    </UserContext2.Provider>
  )
}

export default Homepage2