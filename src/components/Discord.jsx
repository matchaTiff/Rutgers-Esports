/* eslint-disable max-len */
import React from 'react';
import './Discord.css';
import HeroSection from './HeroSection';
import ServersGrid from './ServersGrid';
import GenericServerGrid from './GenericServerGrid';
import rutgersServers from '../data/RutgersServers';
import otherGames from '../data/OtherGameServers';

// TODO several comments below
function Discord() {
    return (
        <>
            <HeroSection {...{
                headline: 'Rutgers Esports Discord Server',
                slogan: 'Want to join the server? Hop on in!',
                sloganURL: 'https://discord.gg/rutgersesports',
                description: 'This Discord server is the hub for all things Rutgers Esports.',
                imageProps: {
                    url: '/Pictures/ThirdParty/discordHero.svg',
                    alt: 'Discord Logo',
                },
            }}
            />

            <div className="aboutSection">
                <div className="aboutInfo">
                    <h2>About</h2>
                    <h4>
                        Rutgers Esports Discord is
                        <em>the</em>
                        {' '}
                        main hub for all things Rutgers Esports!
                    </h4>
                    <p>
                        {' '}
                        {/* You can change this to whatever idrc */}
                        <ul>
                            <li>Get important announcements regarding events and opportunities within Rutgers Esports and the larger collegiate Esports scene in the northeast!</li>
                            <li>Talk to the Rutgers Esports community about trending new titles, upcoming events, or even anime!</li>
                            <li>Acts as an entry point to numerous clubs under the Rutgers Esports umbrella as well as some clubs outside Rutgers Esports.</li>
                        </ul>
                    </p>
                </div>
                <iframe className="discord-widget" title="Rutgers Esports" src="https://discord.com/widget?id=143013824679641088&theme=dark" width="350" height="350" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
            </div>

            <div className="servers section-container">
                <h2 className="new-section">Server Directory</h2>
                <ServersGrid gridTitle="Clubs" />
                <GenericServerGrid gridTitle="Other Games" items={otherGames} />
                {/* There's some weird spacing issue here */}
                <GenericServerGrid gridTitle="Rutgers-Related" items={rutgersServers} />
                {/* Here too */}
            </div>

            <div className="rutgers-kun-section text-center section-container">
                <a href="https://github.com/sriRacha21/Rutgers-kun3/blob/master/README.md">
                    <img src="/Pictures/Branding/Rutgers-kun/Chibirkun_horizontal_text.png" alt="Rutgers-kun Horizontal" />
                </a>
                <p className="important">
                    Rutgers-kun is a bot made within Rutgers Esports that manages this server and 50+ other Rutgers Servers.
                </p>
                <div className="social-links d-flex justify-content-center">
                    <div className="horizontal-group justify-content-center">
                        <a href="https://github.com/sriRacha21/Rutgers-kun3/blob/master/README.md">
                            <img src="/Pictures/ThirdParty/github-logo.svg" alt="Contribute" />
                        </a>
                        <p>Contribute on GitHub</p>
                    </div>
                    <div className="horizontal-group">
                        <a href="https://discord.gg/YDEpNDV">
                            <img src="/Pictures/ThirdParty/discord-logo.svg" alt="Join the development server!" width="120px" />
                        </a>
                        <p>Join the development server</p>
                    </div>
                    <div className="horizontal-group">
                        <a href="https://discordapp.com/api/oauth2/authorize?client_id=291355097919913985&permissions=0&scope=bot">
                            <img src="/Pictures/Branding/Rutgers-kun/chibi_rutgers-kun.png" alt="Add me!" width="120px" />
                        </a>
                        <p>Add me to your server</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discord;
