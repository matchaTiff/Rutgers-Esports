import React from "react";
import './HeroSection.css';

function HeroSection({
  headline, slogan, description, sloganURL, videoSourceURL, imageProps
}) {
  // may come in as undefined, normalize to bool
  const displayVideo = videoSourceURL !== undefined;
  const sloganAttributes = sloganURL ? {href: sloganURL} : {}
  const { url, alt } = imageProps === undefined ? {url: null, alt: null} : imageProps;

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
      {url ? insertImage({
        url: url,
        alt: alt
      }) : null}
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

function insertImage({
  url, alt
}) {
  return (
      <img src={url} alt={alt} style={{
        height: "80%",
        width: "auto"
      }}/>
  )
}

export default HeroSection;
