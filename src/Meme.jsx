import React from "react";

const Meme = () => {
  return (
    <div>
      <form action="" className="form--section">
        <div>
          <input type="text" placeholder="shut up" className="input1" />
          <input
            type="text"
            placeholder="and take my money"
            className="input2"
          />
        </div>
        <button className="meme--btn">Get a new meme image</button>
      </form>
    </div>
  );
};

export default Meme;
