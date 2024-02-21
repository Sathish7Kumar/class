import React, { useReducer } from 'react'

const transaction = (state ,action) =>{
    switch(action.type){
        case "WITHDRAW" : 
        return state - action.payload
        case "DEPOSIT" :
        return state + action.payload
        default :
        return state
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(transaction, 1000)

    const deposit = (amount) =>{
        dispatch({type : "DEPOSIT", payload:amount})
    }

    const withdraw = (amount) =>{
        dispatch({type : "WITHDRAW", payload:amount})
    }

  return (
    <>
    <h2>Use Reducer</h2>
    <h2>Bank Balance : {state}</h2>
    <input type='number' />
    <button onClick={()=>{deposit(500)}}>Deposit</button>
    <button onClick={()=>{withdraw(500)}}>Withdraw</button>

    </>
  )
}

export default Reducer