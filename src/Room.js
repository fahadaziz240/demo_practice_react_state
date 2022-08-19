import React, { useState } from "react";

function Room() {
  let [isLit, setLit] = useState(true);

  let [isAge, setAge] = useState(24);

  function updateLit() {
    console.log("Button Clicked");
    setLit(!isLit);
  }

  // Plain Javascript function
  //   function updateAge() {
  //     console.log("Button Clicked");
  //     setAge(++isAge);
  //   }

  //arrow function

  //   const updateAge = () => {
  //     console.log("button clicked through arrow function");
  //     setAge(++isAge);
  //   };

  return (
    <div>
      This is Room is {isLit ? "Lit" : "dark"}
      <br />
      Age : {isAge}
      <br />
      <button onClick={updateLit}>Update Lit</button>
      <br />
      {/* <button onClick={updateAge}>Update Age</button> */}
      <button
        onClick={() => {
          console.log("Update age button is clicked");
          setAge(++isAge);
        }}
      >
        Update Age
      </button>
    </div>
  );
}

export default Room;
