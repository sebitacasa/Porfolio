import React from "react";
import "./Slider.css";
import ReactPlayer from "react-player";

const slidesInfo = [
  {
    id: 1,
    title: "Events App",
    src: "https://www.youtube.com/watch?v=ifcuHhRpttY",
    link: "https://under-event-client.vercel.app/",
  },
  {
    id: 2,
    title: "Movies App",
    src: "https://youtu.be/DYECSxjlfho",
    link: "https://movies-react-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Recipes App",
    src: "https://youtu.be/oz-yZy3rlDU",
    link: "https://client-eight-sigma.vercel.app",
  },
  {
    id: 4,
    title: "Djs Recruiter App",
    src: "https://youtu.be/NqyF7Mi9CaA",
    link: "https://djs-london.vercel.app/",
  },
  {
    id: 5,
    title: "VideoGames App",
    src: "https://youtu.be/1s3reRsepIg",
    link: "https://client-sebitacasa.vercel.app",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <ReactPlayer
      url={slide.src}
      pip={true}
      controls={true}
      playing={true}
      width="auto"
    />
    <div className="slide-desc">
      <a
        className="a"
        style={{
          marginLeft: "25%",
          fontSize: "25px",
          textDecoration: "none",
          color: "#fff",
          fontWeight: "bolder",
        }}
        href={slide.link}
      >
        {slide.title}
      </a>
    </div>
  </div>
));

export default slides;
