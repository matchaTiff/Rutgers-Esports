import React, {useState} from "react";
import SocialsBar from './SocialsBar.js';
import './Grid.css';
import './Socials.css';
import Grid from '@material-ui/core/Grid';
import teams from '../data/teamsdata.js';
import Carousel,  { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


function TeamsGrid(props){
    const [teamPop, setTeamPop] = useState({});
    const [visible, setVisible] = useState(false);
    const info = teams.orgs;
    
    const visibility = (team) => {
        if(visible){
            setVisible(false);
        }
        else{
            setVisible(true);
            setTeamPop(team);
            scrollToTop();
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };


    return(
        <div>
            <div className="cotainer-fluid background">
                <div className="title">OUR TEAMS</div>
                {visible && <div className="popUpBackground" >
                    <div className="filler" onClick={() => visibility(teamPop)}></div>
                        <div className="popUpContainer" >
                            <div className="exitPop" onClick={() => visibility(teamPop)}>
                                <i class="fas fa-times"></i>
                            </div>
                            <div className="orgTitle">
                                <p>{teamPop.name}</p>
                            </div>
                            <div>
                                <Carousel plugins={['infinite',{ resolve: autoplayPlugin,options: {interval: 4000,}},]} animationSpeed={1000}>
                                    {teamPop.pictures.map((pic) =>(

                                    <img className="orgPicture" src={pic} alt={teamPop.name}/>
                                    ))}
                                </Carousel>
                            </div>
                           
                            <div className="popUpBody">
                                <div className="socialsBar">
                                    <SocialsBar flow="row-reverse" socials={teamPop.socials}/>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget dolor auctor, pellentesque neque eget, dictum enim. Morbi bibendum eget nibh ac vulputate. Nunc euismod quis urna vitae luctus. Pellentesque pretium efficitur consectetur. Vestibulum iaculis urna ultricies ligula tincidunt, tristique fermentum nisl efficitur. Integer tincidunt nibh leo, sed suscipit velit volutpat commodo. Quisque imperdiet diam ac maximus finibus. Suspendisse aliquet viverra orci eu ultricies.</p>
<p>Pellentesque ac augue quam. Praesent mauris ipsum, eleifend at congue eget, ultricies vel quam. Sed sollicitudin augue a ante rutrum venenatis. Aenean pulvinar tempor pretium. Praesent pharetra cursus mauris, nec scelerisque purus volutpat ac. Vestibulum ultrices, ante quis gravida hendrerit, quam neque fermentum ex, sit amet vulputate sem elit in mi. Pellentesque vitae gravida felis, sed venenatis diam. Duis velit risus, rutrum volutpat magna et, rhoncus consequat justo. Praesent leo odio, fermentum at pretium nec, elementum eget est.</p>    
                            </div>

                        </div>
                        <div className="filler" onClick={() => visibility(teamPop)}></div>   
                </div>}
                <div className="grid-container">

                    <Grid container spacing={3}>
                        {info.map((team) => (

                           
                                
                            <Grid item xs={6} sm={3} >
                                <div className="orgContainer">
                                    <div  className="orgTab" style={{backgroundImage: "url(" +  team.logo  + ")"}} onClick={() => visibility(team)}>
                                        {/*The following changes size based on amount of characters and viewport width*/}
                                        <p style={{fontSize: (33-team.name.length)*0.055+"vw"}}> {team.name}</p>   
                                    </div>
                                    
                                </div>
                            </Grid>   
                                    
                                
                            ))}
                    </Grid>
                    
                    
                </div>
               
            </div>
           
        </div>
       
    )
}

export default TeamsGrid;