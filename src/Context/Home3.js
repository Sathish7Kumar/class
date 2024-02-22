import React, { useContext } from 'react'
import { UserContext } from './HomeContext'


const Home3 = () => {
    const userName = useContext(UserContext)
    return (
      <>
      <h1>Hello - {userName} </h1>
      
      </>
    )
  }

export default Home3