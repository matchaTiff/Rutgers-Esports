import React, {Component, useState} from "react";
import SocialsBar from './SocialsBar.js';
import './Grid.css';
import './Socials.css';
import clubs from '../data/clubsdata.js';


function ClubsGrid(props){

    const [clubPop, setClubPop] = useState({});
    const [visible, setVisible] = useState(false);
    const info = clubs.rows;

    const visibility = (club) => {
        if(visible){
            setVisible(false);
        }
        else{
            setVisible(true);
            setClubPop(club);
        }
    }

    return(
        <div>
            <div className="cotainer-fluid background">
                <div className="title"> Clubs </div>
                {visible && <div className="popUpBackground" onClick={() => visibility(clubPop)}>
                        <div className="popUpContainer">
                            <div className="orgTitle">
                                <p>{clubPop.name}</p>
                            </div>
                                <img className="orgPicture" src={clubPop.picture} alt="Not Working"></img>
                                
                        
                           
                            <div className="popUpBody">
                                <div className="socialsBar">
                                    <SocialsBar flow="row-reverse" socials={clubPop.socials}/>
                                </div>
                                
                            </div>
                        </div>
                        
                </div>}
                <div className="grid-container">

                    {info.map((row) => (
                        <div className="row">
                            {row.map((club) =>(
                                <div className="orgContainer col-sm-3">
                                <div className="orgTab" onClick={() => visibility(club)}>
                                    <p> {club.name}</p>   
                                </div>
                                
                            </div>
                            ))}
                        </div>
                    ))}
                
                    
                </div>
               
            </div>
           
        </div>
       
    )
}

export default ClubsGrid;