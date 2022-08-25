import React from "react";
import memesData from "./memesData";

let url;
function Meme() {
  function handleMemeClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    <div>
      <div className="form--section">
        <div className="input--forms">
          <input type="text" placeholder="shut up" className="input1" />
          <input
            type="text"
            placeholder="and take my money"
            className="input2"
          />
        </div>
        <button onClick={handleMemeClick} className="meme--btn">
          Get a new meme image
        </button>
      </div>
    </div>
  );
}

export default Meme;
