//Imports
import React from "react";
import "./About.css";
import hero from "../../../images/HeroImage.png";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={hero}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
          Hello! I'm a full stack software developer with a unique background in
          geology, finance, and the service industry. I bring a diverse skill
          set and a passion for pushing boundaries both in my professional and
          personal life.
        </p>
        <p id="p-about">
          With a degree in geology, I have a strong foundation in analytical
          thinking, problem-solving, and attention to detail. My experience in
          finance has honed my ability to handle complex data and make informed
          decisions. Additionally, my time in the service industry has taught me
          the importance of effective communication and delivering exceptional
          customer experiences.{" "}
        </p>
        <p id="p-about">
          Outside of the software development world, I find great joy in
          adrenaline-seeking activities that push my limits. Whether it's rock
          climbing, skiing, scuba diving, or skydiving, I thrive on the
          excitement and challenges they present. This mindset of constantly
          seeking new experiences translates into my approach to problem-solving
          and innovation in the tech field.
        </p>
        <p id="p-about">
          As a travel enthusiast, I am always eager to explore new places and
          cultures. I believe that exposure to diverse environments fuels
          creativity and fosters personal growth. I am particularly interested
          in connecting with potential mentors, tech enthusiasts, and anyone
          passionate about full stack development. Collaboration and learning
          from others are essential to my professional development, and I'm
          excited to connect with like-minded individuals who share my
          enthusiasm for technology and its limitless possibilities.
        </p>
        <p id="p-about">
          Let's embark on this journey together, whether it's discussing the
          latest tech trends, exchanging ideas on full stack development, or
          simply sharing stories from our adrenaline-fueled adventures. I'm
          eager to connect, learn, and grow alongside fellow enthusiasts in the
          tech community.
        </p>
      </div>
    </>
  );
}
