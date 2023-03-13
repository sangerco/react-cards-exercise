import React, { useState } from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  const [cardFace, flipCardFace] = useFlip(true)
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={cardFace ? front : back}
      alt="playing card"
      onClick={flipCardFace}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
