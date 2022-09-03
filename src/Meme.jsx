import React from "react";
import memesData from "./memesData";

let url;
function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleMemeClick() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    // console.log(url);
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

      <img src={meme.randomImage} alt="" className="meme--img" />
    </div>
  );
}

export default Meme;
