import React, { useState } from "react";

const Vote = () => {
  const [age, setage] = useState("");
  const [Message, setMessage] = useState("");

  const handleClick = () => {
    setMessage((age>=18)? "U CAN VOTE" : "U CAN'T ABLE TO VOTE")
  };

  return (
    <>
      <h1>Check Vote Age</h1>
      <h2>Your Entered Age : {age} </h2>
      <label>Enter Your Age : </label> <br/>
      <input
        type="number"
        onChange={(e) => setage(e.target.value)}
      /> <br/> <br/>
      <button onClick={handleClick}>Check</button> <br/> <br/>
      {/* <p>Message : </p> */}
      {Message ? <h3> UR RESULT = {Message} </h3> : null}
    </>
  );
};

export default Vote;

// let age = 21
// if(age >= 18){
//     console.log("Vote");
// }else{
//     console.log("Not able oto vote");
// }
// console.log( (age>=18) ? "vote" : "not able to vote");
