// import "./VideoCarousel.css";
// import React from "react";
// import { Carousel } from "react-bootstrap";
// import ReactPlayer from "react-player";
// import "bootstrap/dist/css/bootstrap.css";


// const VideoCarousel = () => {
//   const videoProperties = [
//     {
//       id: 1,
//       title: "Events App",
//       src: 'https://www.youtube.com/watch?v=ifcuHhRpttY',
      
//     },
//     {
//       id: 2,
//       title: "Movies App",
//       src: "https://youtu.be/DYECSxjlfho",
      
//     },
//     {
//       id: 3,
//       title: "Recipes App",
//       src: "https://youtu.be/oz-yZy3rlDU",
      
//     },
//     {
//       id: 4,
//       title: "Djs Recruiter App",
//       src: 'https://youtu.be/NqyF7Mi9CaA'
      
//     },
//     {
//       id: 5,
//       title: "VideoGames App",
//       src: 'https://youtu.be/1s3reRsepIg',
      
//     },
//   ];

//   return (
    
//     <div className="carousel-container ">
      

//       <h3 style={{marginLeft: '50px', gap: '50px', color: '#fff', fontWeight: "bold", fontSize: "35px"}}>My projects</h3>
      
//       <div style={{marginLeft:"35%", }}>
//       <Carousel style={{ width: "auto"}} className="carousel"  >
//         {videoProperties.map((videoObj) => {
//           return (
//             <Carousel.Item  key={videoObj.id}>
//               <ReactPlayer
//                 url={videoObj.src}
//                 pip={true}
//                 controls={true}
//                 playing={true}
                
                
//               />
//               <Carousel.Caption>
//                 <h3>{videoObj.title}</h3>
//                 <p>{videoObj.credit}</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           );
//         })}
//       </Carousel>
//       </div>
//     </div>

//   );
// };

// export default VideoCarousel;


import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel
      
        arrows
        controls={true}
        playing={true}
        slidesPerPage={2}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: true,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;