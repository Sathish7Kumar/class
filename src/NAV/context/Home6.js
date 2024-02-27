import React, { useContext } from 'react'
import { UserContext2 } from '../../Navigation/Homepage2'


const Home6 = () => {

    const user = useContext(UserContext2)

  return (
    <>
    <h1>Home6</h1>
    <h2>My name is {user}</h2>
    </>
  )
}

export default Home6