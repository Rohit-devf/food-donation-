import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <h1>Hello React</h1>

      <button onClick={handleClick}>
        Click Me
      </button>

      {clicked && (
        <>
          <h2>Don't Let Good Food Go To Waste</h2>

          <p>
            Share your extra food today and become a part
            of the FoodShare community.
          </p>

          <div className="cta-buttons">
            <Link
            
            >
              Donate Food
            </Link>

            <Link
           
              className="outline-btn"
            >
              Join FoodShare
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default App;