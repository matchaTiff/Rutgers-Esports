import React from 'react';
import './Discord.css';
import HeroSection from "./HeroSection";
import ServersGrid from "./ServersGrid";
import GenericServerGrid from "./GenericServerGrid.js";
import rutgersServers from '../data/RutgersServers.js';
import otherGames from '../data/OtherGameServers.js';
 
// TODO several comments below
function Discord() {
    return (
        <>
            <div className="background">
                <HeroSection {...{
                    headline: 'Rutgers Esports Discord Server',
                    slogan: 'Want to join the server? Hop on in!',
                    sloganURL: 'https://discord.gg/rutgersesports',
                    description: 'This Discord server is the hub for all things Rutgers Esports.',
                    imageProps: {
                        url: '/Pictures/ThirdParty/discordHero.svg',
                        alt: 'Discord Logo'
                    } /* Would like the image here to be right-aligned */
                }}></HeroSection>
                <iframe title="Rutgers Esports" align="right" src="https://discord.com/widget?id=143013824679641088&theme=dark" width="350" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                <h1 class="new-section">About</h1>
                <h4 class="important">Rutgers Esports Discord is <em>the</em> main hub for all things Rutgers Esports!:</h4>
                <p class="about"> {/* You can change this to whatever idrc */}
                    <ul>
                        <li>Get important announcements regarding events and opportunities within Rutgers Esports and the larger collegiate Esports scene in the northeast!</li>
                        <li>Talk to the Rutgers Esports community about trending new titles, upcoming events, or even anime!</li>
                        <li>Acts as an entry point to numerous clubs under the Rutgers Esports umbrella as well as some clubs outside Rutgers Esports.</li>
                    </ul>
                </p>
                <h1 class="new-section">Server Directory</h1>
                <ServersGrid gridTitle="Clubs"/>
                <GenericServerGrid gridTitle="Other Games" items={otherGames}/>
                {/* There's some weird spacing issue here */}
                <GenericServerGrid gridTitle="Rutgers-related" items={rutgersServers}/>
                {/* Here too */}

                {/* This horizontal logo may be cringe but it's all I got right now */}
                <a href="https://github.com/sriRacha21/Rutgers-kun3/blob/master/README.md">
                    <img class="centerblock" src="/Pictures/Branding/Rutgers-kun/Chibirkun_horizontal_text.png" alt="Rutgers-kun Horizontal" width="70%"></img>
                </a>
                <h4 class="important">
                    Rutgers-kun is a bot made within Rutgers Esports that manages this server and 50+ other Rutgers Servers.
                </h4>
                <p style={{color: 'white'}} align="center">
                    {/* Someone please center these properly */}
                    <strong>
                        Contribute |
                        Add me to your server | 
                        Join the development server
                    </strong>
                </p>
                <p align="center">
                    <a href="https://github.com/sriRacha21/Rutgers-kun3/blob/master/README.md">
                        <img class="logo-group-horizontal" src="/Pictures/ThirdParty/GitHub-Mark-Light-120px-plus.png" alt="Contribute"></img>
                    </a>
                    <a href="https://discordapp.com/api/oauth2/authorize?client_id=291355097919913985&permissions=0&scope=bot">
                        <img class="logo-group-horizontal" src="/Pictures/Branding/Rutgers-kun/chibi_rutgers-kun.png" alt="Add me!" width="120px"></img>
                    </a>
                    <a href="https://discord.gg/YDEpNDV">
                        <img class="logo-group-horizontal" src="/Pictures/ThirdParty/Discord.webp" alt="Join the development server!" width="120px"></img>
                    </a>
                </p>
            </div>
        </>
    )
}

export default Discord;