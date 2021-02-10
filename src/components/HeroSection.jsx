import React from 'react';
import './HeroSection.css';

function renderJumbo({
    sourceURL,
}) {
    return (
        // this video is muted anyways so we don't need captions
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">
            <source src={sourceURL} type="video/mp4" />
        </video>
    );
}

function insertImage({
    url, alt,
}) {
    return (
        <img
            className="heroBackground"
            src={url}
            alt={alt}
            style={{
            }}
        />
    );
}
function HeroSection({
    headline, slogan, description, sloganURL, videoSourceURL, imageProps,
}) {
    // may come in as undefined, normalize to bool
    const displayVideo = videoSourceURL !== undefined;
    const sloganAttributes = sloganURL ? { href: sloganURL } : {};
    const { url, alt } = imageProps === undefined ? { url: null, alt: null } : imageProps;

    return (
        <div className="jumbotron jumbotron-fluid vertical-center">
            {displayVideo ? renderJumbo({
                sourceURL: videoSourceURL,
            }) : null}
            <div className="overlay" />
            <div className="home_hero container">
                <h1 className="heading">{headline}</h1>
                <h4 className="slogan">
                    <a {...sloganAttributes}>
                        {slogan}
                    </a>
                </h4>
                <p className="description">{description}</p>
            </div>
            {url ? insertImage({
                url,
                alt,
            }) : null}
        </div>
    );
}

export default HeroSection;
