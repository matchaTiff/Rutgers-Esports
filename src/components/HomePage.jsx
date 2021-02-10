import React from 'react';
import HeroSection from './HeroSection';
import { heroData } from './data/Data';
import ClubsGrid from './ClubsGrid';

function HomePage() {
    const {
        headline, slogan, description, videoSourceURL,
    } = heroData;

    return (
        <>
            <HeroSection
                headline={headline}
                slogan={slogan}
                description={description}
                videoSourceURL={videoSourceURL}
            />
            <ClubsGrid />
        </>
    );
}
export default HomePage;
