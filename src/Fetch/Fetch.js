import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [users, setusers] = useState([]);

  const [search, setsearch] = useState("");

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(x => setusers(x))
  //    .catch(err => console.log(err))

  // axios -> CRUD get , post , put , delete

  const getData = async () => {
    try {
      const users = await axios.get(
        // "https://jsonplaceholder.typicode.com/users"
        "https://fakestoreapi.com/products"
      );
      // console.log(users.data);
      const x = users.data;
      setusers(x);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Fetch</h1>
        <input
          type="text"
          onChange={(e) => setsearch(e.target.value)}
        /> <br /> <br />
        {/* map */}
        {/* {users.map((e)=>{
            return(
                <>
                <li>{e.address.city}</li>
                </>
            )
        })} */}
        {/*  filter-> includes , conditional render map */}
        {users
          .filter((user) => {
            if (search == "") {
              return user;
            } else if (user.title.toLowerCase().includes(search.toLowerCase())) {
              return user;
            }
          })
          .map((x) => {
            return (
              <>
                <h2>{x.title}</h2>
                <img src={x.image}  height={100} width={100}/>
                {/* desc , price , count , rating */}
                {/* button */}
              </>
            );
          })}
      </div>
    </>
  );
};

export default Fetch;
