import React from 'react';
import HeroSection from './HeroSection';
import { heroData } from './data/Data.js';
import TeamsGrid from './TeamsGrid.js';
import ClubsGrid from './ClubsGrid.js';

function HomePage() {
    return (
      <>
          <HeroSection {...heroData} />
          <ClubsGrid />
        </>
    );
}
export default HomePage;
