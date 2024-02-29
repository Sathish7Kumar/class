import React, { useState } from "react";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  const [showNav, setshowNav] = useState(false);

  const toogle = () => {
    setshowNav(!showNav);  // true , false , true
  };
  
  return (
    <>
      <div className="navbar">

        <div className="logo">
          <Link to="/">MY PAGE</Link>
          {/* <a></a> */}
        </div>

        <div
          style={{ color: "red", fontSize: "35px" }}
          className="icon"
          onClick={toogle}
        >
          <TbLayoutNavbarFilled />
        </div>
        
        {/* <ul className="nav-link show"></ul> */}

        <ul className={`nav-links ${showNav ? "show" : ""}`}>
          <li>
            <Link to='/state'>State</Link>
          </li>
          <li>
          <Link to='/vote'>Vote</Link>
          </li>
          <li>
          <Link to='/login'>Login</Link>
          </li>
          <li>
          <Link to='/memo'>Memo</Link>
          </li>
          <li>
          <Link to='/popup'>Popup</Link>
          </li>
          <li>
          <Link to='/signin'>Form</Link>
          </li>
          <li>
          <Link to='/context'>Context</Link>
          </li>
        </ul>

      </div>
    </>
  );
};

export default NavigationBar;




// const NavigationBar2 = () => {
//   return (
//     <>
//     <div className="navbar">
//       <div>
//         <a>LOGO</a>
//       </div>

//       <div>
//         icon
//       </div>

//       <ul>
//         <li><a href="">Home</a></li>
//         <li><a href="">Home</a></li>
//         <li><a href="">Home</a></li>
//       </ul>

//     </div>
//     </>
//   )
// }


