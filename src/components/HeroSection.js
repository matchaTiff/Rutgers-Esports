import React from "react";
import './HeroSection.css';

function HeroSection({
  headline, slogan, description, sloganURL, videoSourceURL 
}) {
  // may come in as undefined, normalize to bool
  const displayVideo = videoSourceURL !== undefined;
  const sloganAttributes = sloganURL ? {href: sloganURL} : {}

  return (
    <div className="jumbotron jumbotron-fluid vertical-center">
      {displayVideo ? renderJumbo({
        sourceURL: videoSourceURL
      }) : null}
      <div className="overlay"></div>
      <div className="home_hero container">
        <h1 className="heading text-truncate">{headline}</h1>
        <h4 className="slogan">
          <a {...sloganAttributes}>
            {slogan}
          </a>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

function renderJumbo({
  sourceURL
}) {
  return (
    <video playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">
      <source src={sourceURL} type="video/mp4"/>
    </video>
  )
}

export default HeroSection;
