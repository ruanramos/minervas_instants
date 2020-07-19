import React, { useState } from "react";
import soco from "../Audios/soco.ogg";
import img from "../s4zlNEuh_400x400.jpg";

function InstantButton(props) {
  const [isPlayingSound, toggleSound] = useState(false);

  const playSound = () => {
    soco.play();
  };

  return (
    <div>
      <audio id="soco" preload="auto" src={soco}></audio>
      <div>
        <input
          type="image"
          alt="CLICK"
          src={img}
          onClick={() => document.getElementById("soco").play()}
        ></input>
      </div>
    </div>
  );
}

export default InstantButton;
