import React from "react";
import photo from "./assets/meandyou.webp";
function Intro() {
  const email = "serenauzumcu@protonmail.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard");
    });
  };
  return (
    <div id="intro">
      <div id="intro-info">
        <h1>Computer Programming Student</h1>
        <p id="intro-text">
          I am a computer programmer with a focus on{" "}
          <b>
            <i>backend technologies and data analytics</i>
          </b>
          . Outside of coding, I spend a lot of my time learning about
          astrophysics, how new technologies impact our world, or working on
          video editing. I am also a big fan of movies, video games and shows
          which is where I find a lot of my inspiration.
        </p>
        <h3>
          Interested in these topics and my work?{" "}
          <u>Feel free to contact me.</u>
        </h3>
        <div id="intro-contact">
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/jobruv"
              target="_blank"
              rel="_noreferrer"
            >
              jobruv
            </a>
          </p>
          <p>
            Email:{" "}
            <span id="copyEmail" onClick={handleCopy}>
              serenauzumcu [at] protonmail (dot) com{" "}
            </span>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/serena-%C3%BCz%C3%BCmc%C3%BC-b92382395/"
              target="_blank"
              rel="_noreferrer"
            >
              Serena Üzümcü
            </a>
          </p>
          <p style={{ textAlign: "right" }}>
            <i style={{ color: "grey" }}>drawn by @delfin.doodles</i>
          </p>
        </div>
      </div>
      <div id="intro-img">
        <img src={photo}></img>
      </div>
    </div>
  );
}
export default Intro;
