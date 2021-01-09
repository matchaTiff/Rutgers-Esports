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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget dolor auctor, pellentesque neque eget, dictum enim. Morbi bibendum eget nibh ac vulputate. Nunc euismod quis urna vitae luctus. Pellentesque pretium efficitur consectetur. Vestibulum iaculis urna ultricies ligula tincidunt, tristique fermentum nisl efficitur. Integer tincidunt nibh leo, sed suscipit velit volutpat commodo. Quisque imperdiet diam ac maximus finibus. Suspendisse aliquet viverra orci eu ultricies.</p>
<p>Pellentesque ac augue quam. Praesent mauris ipsum, eleifend at congue eget, ultricies vel quam. Sed sollicitudin augue a ante rutrum venenatis. Aenean pulvinar tempor pretium. Praesent pharetra cursus mauris, nec scelerisque purus volutpat ac. Vestibulum ultrices, ante quis gravida hendrerit, quam neque fermentum ex, sit amet vulputate sem elit in mi. Pellentesque vitae gravida felis, sed venenatis diam. Duis velit risus, rutrum volutpat magna et, rhoncus consequat justo. Praesent leo odio, fermentum at pretium nec, elementum eget est.</p>    
                            </div>

                        </div>
                        
                </div>}
                <div className="grid-container">

                    {info.map((row) => (
                        <div className="row">
                            {row.map((club) =>(
                                <div className="orgContainer col-sm-3">
                                <div className="orgTab" onClick={() => visibility(club)}>
                                    {/*Added this style thing that changes size based on amount of characters*/}
                                    <p style={{fontSize: (33-club.name.length)*0.055+"vw"}}> {club.name}</p>   
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