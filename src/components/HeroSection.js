import React from "react";
import './HeroSection.css';

function HeroSection({
  headline, slogan, description
}) {
  return (
    <div className="jumbotron jumbotron-fluid vertical-center">
      <div className="overlay"></div>
      <video playsInline="playsInline" autoPlay="autoPlay" muted="muted" loop="loop">
        <source src="https://r3---sn-ab5l6ndy.c.drive.google.com/videoplayback?expire=1610793951&ei=n4sCYL-yIcj48gS8iZroDg&ip=100.1.141.183&cp=QVRGUkhfUllTQlhPOnpCVGZPZ2p6cFY5LS1RYmlHUi12dWdEM0FFbUZJbzdYWEw1ZVV5ZU9MN0o&id=8d039b71905261b7&itag=18&source=webdrive&requiressl=yes&mh=CA&mm=32&mn=sn-ab5l6ndy&ms=su&mv=m&mvi=3&pl=17&sc=yes&ttl=transient&susc=dr&driveid=15V7SSOwWvo1d22mBFPUWI1HfvPaZHbxo&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=122.508&lmt=1599183134713125&mt=1610779216&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhAJNLGXfew6c6Cf376Uhr2KEfgZA12g9VBJpsX-l_SbY9AiAQ6u_mwr2Ou5KmkOP8D7hpL4AMvzl37ockip6RdAWDew==&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRAIgGGtrAwNZAKpuVjaxqmqFNgMg9MmrUEJIDv4e39ecVr8CID5rtvXH4S0JMxWHNVLVR3HUB3NkDUonuBwF92JN_oGn&cpn=T7z8uQEA5q89fNLp&c=WEB_EMBEDDED_PLAYER&cver=20210113" type="video/mp4"/>
      </video>
      <div className="home_hero container">
        <h1 className="heading text-truncate">{headline}</h1>
        <h4 className="slogan">{slogan}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default HeroSection;
