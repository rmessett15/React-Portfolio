import React from "react";
import './About.css'
import hero from '../../../images/HeroImage.png'
import CardMedia from "@mui/material/CardMedia";


export default function About() {
  return (
    <>
      <div id="hero">
        <img src={hero} />
      </div>
      {/* <div className="image-container">
          <CardMedia
              component="img"
              className="color-img"
              style={{height: '60vh', width: '50%', margin:'0 auto'}}
              image={hero}
              alt="About Me"
          />
      </div> */}

      <div>
        <h1 id="about-me-title">About Me</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>
      </div>
    </>
  );
}
