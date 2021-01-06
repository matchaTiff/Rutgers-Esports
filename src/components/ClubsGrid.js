import React, {Component} from "react";
import './Grid.css';
import clubs from '../data/clubsdata.js';


function ClubsGrid(props){

    const info = clubs.rows;

    return(
        <div className="cotainer-fluid background">
            <div className="title"> Clubs </div>
            <div className="grid-container">

                {info.map((row) => (
                    <div className="row">
                        {row.map((club) =>(
                            <div className="orgContainer col-sm-3">
                            <div className="orgTab">
                                <p> {club.name}</p>   
                            </div>
                            
                        </div>
                        ))}
                    </div>
                ))}
            
                
            </div>
        </div>
    )
}

export default ClubsGrid;