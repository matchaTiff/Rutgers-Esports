import React from 'react';
import './Grid.css';
import './Socials.css';
import Grid from '@material-ui/core/Grid';
import clubs from '../data/clubsdata';
import '@brainhubeu/react-carousel/lib/style.css';

function getDiscordLinkHREF(socials) {
    const maybeDiscordLink = socials.find((s) => s.type === 'discord');
    if (maybeDiscordLink) return { href: maybeDiscordLink.link };
    return {};
}

function ServersGrid({ gridTitle }) {
    const info = clubs.orgs;

    return (
        <div className="section-container">
            <div className="title">{gridTitle}</div>
            <div className="grid-container">
                <Grid container spacing={3}>
                    {info.map((club) => (
                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            { /* eslint-disable-next-line react/jsx-props-no-spreading */}
                            <a target="_blank" rel="noopener noreferrer" {...getDiscordLinkHREF(club.socials)}>
                                <div className="orgContainer">
                                    <div className="orgTab" style={{ backgroundImage: `url(${club.logo})` }}>
                                        <p>
                                            {' '}
                                            {club.name}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default ServersGrid;
