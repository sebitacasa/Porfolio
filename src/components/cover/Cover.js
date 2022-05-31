import React from "react";
import "./Cover.css";
import coverVideo from "../../media/React App - Brave 2022-05-30 21-25-51.mp4"

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1 >Sebastian Rodriguez</h1>
      <p>Full Stack Web Developer </p>
    </div>
  );
};

export default Cover;
