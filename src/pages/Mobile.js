import React from 'react'
import { Link } from 'react-router-dom'

const Mobile = () => {

    // const mobilePage = (e) =>{
    //     e.preventDefault()
    //     useNavigate("/")
    // }

  return (
    <>
    <div>Mobile</div>
    {/* <button onClick={mobilePage}>HOME</button> */}
    <Link to="/" >HOME</Link>
    </>
    
  )
}

export default Mobile