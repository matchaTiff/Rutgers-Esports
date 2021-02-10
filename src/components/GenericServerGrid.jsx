import React from 'react';
import './Grid.css';
import Grid from '@material-ui/core/Grid';

function GenericServerGrid({ gridTitle, items }) {
    return (
        <div className="section-container">
            <div className="title">{gridTitle}</div>
            <div className="grid-container">
                <Grid container spacing={3}>
                    {items.map((i) => (
                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            <a target="_blank" rel="noopener noreferrer" href={i.link}>
                                <div className="orgContainer">
                                    <div className="orgTab" style={{ backgroundImage: `url(${i.icon})` }}>
                                        <p>
                                            {' '}
                                            {i.name}
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

export default GenericServerGrid;
