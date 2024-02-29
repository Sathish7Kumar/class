import React, { useState } from "react";
import image from "./image.webp";
import "./Popup.css";
import { IoCloseCircleSharp } from "react-icons/io5";

const Popup = () => {
  const [showPop, setshowPop] = useState(false);

  const handle = () => {
    setshowPop(!showPop);
  };
  return (
    <>
      <div>
        {!showPop && <button onClick={handle}>Open</button>}

        {showPop && (
          <>
            <div className="container">
              {/* <img src={image} /> */}
              <label>Name</label>
              <input type="text" />
              <label>Age</label>
              <input type="number" />
              {/* <button className="b-close" onClick={handle}> */}
                <IoCloseCircleSharp className="b-close" onClick={handle} />
              {/* </button> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Popup;
