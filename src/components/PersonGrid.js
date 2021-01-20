import React from "react";
import './Grid.css';
import Grid from '@material-ui/core/Grid';

function PersonGrid(props){

    return(
        
                
                <div>
                    <h4 className="peopleTitle"> {props.title}</h4>
                    <Grid container spacing={3}>
                        {props.people.map((person) => (

                           
                                
                            <Grid item xs={6} sm={4} >
                                <div className="peopleContainer">
                                    <div  className="personTab">
                                        
                                        {/*The following changes size based on amount of characters and viewport width*/}
                                          
                                    </div>
                                    <div style={{marginTop: "1.5rem"}}>
                                        <p className="personName"> {person.name}</p>
                                        <p className="personRole"> {person.role}</p> 
                                    </div>
                                    
                                </div>
                            </Grid>   
                                    
                                
                            ))}
                    </Grid>
                </div>
                    
                    
                    
               
               
           
       
    )
}

export default PersonGrid;