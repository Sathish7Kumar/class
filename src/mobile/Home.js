import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Homepage</h1>
    <Link to='/products'>Mobile Page</Link>
    </>
  )
}

export default Home