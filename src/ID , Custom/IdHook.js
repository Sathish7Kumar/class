import React, { useId } from "react";

const IdHook = () => {

    const id = useId()
   
    console.log(id);

  return (
    <>
      <div>

        <label htmlFor={`${id}-name`}>Name</label>
        <input  type="text" id={`${id}-name`} />

        <label htmlFor={`${id}-mail`}>Email</label>
        <input  type="mail" id={`${id}-mail`} />

      </div>
    </>
  );
};

export default IdHook;
