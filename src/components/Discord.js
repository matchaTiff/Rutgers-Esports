import React from 'react';
import HeroSection from "./HeroSection";
 
function Discord() {
    return (
        <HeroSection {...{
            headline: 'Rutgers Esports Discord Server',
            slogan: 'Want to join the server? Hop on in!',
            sloganURL: 'https://discord.gg/rutgersesports',
            description: 'This Discord server is the hub for all things Rutgers Esports.',
        }}></HeroSection>
    )
}

export default Discord;