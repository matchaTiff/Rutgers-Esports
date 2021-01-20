import React, { Component } from "react";
import HeroSection from "./HeroSection";
import {heroData} from './data/Data.js';

function HomePage() {
  return (
    <>
      <HeroSection {...heroData} />
    </>
  )
}

export default HomePage;
