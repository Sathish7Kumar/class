import React, { useContext } from 'react'
import Home6 from './Home6'
import { UserContext2 } from '../../Navigation/Homepage2'

const Home5 = () => {

    const user2 = useContext(UserContext2)
  return (
    <>

    <h1>home5</h1>
    <h2>My name is {user2}</h2>
    <Home6/>

    </>

  )
}

export default Home5