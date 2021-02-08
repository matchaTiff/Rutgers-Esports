import React from "react";
import './Grid.css';
import './Socials.css';
import Grid from '@material-ui/core/Grid';
import '@brainhubeu/react-carousel/lib/style.css';

function GenericServerGrid({ gridTitle, items }){
    return (
        <div className="background">
            <div className="title">{gridTitle}</div>
            <div className="grid-container">
                <Grid container spacing={3}>
                    {items.map(i => (
                        <Grid item xs={6} sm={4} md={3} lg={3}>
                            <a target="_blank" rel="noopener noreferrer" href={i.link}>
                                <div className="orgContainer">
                                    <div className="orgTab" style={{backgroundImage: "url(" +  i.icon  + ")"}}>
                                        {/*The following changes size based on amount of characters and viewport width*/}
                                        <p> {i.name}</p>
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
