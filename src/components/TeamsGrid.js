import React, {Component} from "react";
import './Grid.css';
import teams from '../data/teamsdata.js';


function TeamsGrid(props){

    const info = teams.rows;

    return(
        <div className="cotainer-fluid background">
            <div className="title"> Teams </div>
            <div className="grid-container">

                {info.map((row) => (
                    <div className="row">
                        {row.map((team) =>(
                            <div className="orgContainer col-sm-3">
                            <div className="orgTab">
                                <p> {team.name}</p>   
                            </div>
                            
                        </div>
                        ))}
                    </div>
                ))}
            
                
            </div>
        </div>
    )
}

export default TeamsGrid;