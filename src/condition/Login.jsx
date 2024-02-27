import React from 'react'
import { useState } from 'react'
import Vote from './Vote'
import Button from 'react-bootstrap/esm/Button'
import { BsCartPlusFill } from "react-icons/bs";

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [loggedIn, setloggedIn] = useState(false)

    const handleLogin = () =>{
        if (username === "VENKAT" && password === "admin@12"){
            setloggedIn(true)
        }
       
    }

  return (
    <>
    <div>
        {loggedIn ?
        <>
        <div>
            <h2>Welcome {username}
            <br /> <button>Logout</button> <br />
            </h2>
        </div>
        </> : 
        <>
        <div>
            <h2>USER LOGIN <BsCartPlusFill className='icon' /></h2>
            <label>Enter Username :</label>
            <input type='text' onChange={(e)=>setusername(e.target.value)} />
            <br /> <br />
            <label>Enter Password :</label>
            <input type='password' onChange={(e)=>setpassword(e.target.value)} />
            <br /> <br />
            <Button className='bg-danger' onClick={handleLogin}>Login</Button>
        </div>
        </>
        }
    </div>
    </>
  )
}

export default Login