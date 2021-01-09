import React from 'react';
import './Socials.css';


function SocialsBar(props){
    
    const flow = props.flow;
    // var pHeight, pWidth;
    // const flowCheck = () =>{
    //     var len = props.socials.length
    //     if(props.flow === "column"){
    //         pHeight = (8 * len) + "vh";
    //         pWidth = "auto";
    //     }
    //     else if(props.flow === "row-reverse"){
    //         pHeight = "auto";
    //         pWidth = (4 * len) + "vw";
    //     }


    //     return {
    //         flexDirection: flow,
    //         width: pWidth,
    //         height: pHeight
    //     };
    // }

    return(
        <div className="socialsContainer" style={{flexDirection: flow}}>
            {props.socials.map((social) => (
            <a href={social.link} target="_blank">
                <div className={social.type + "Container"}>
                    
                        <i class={"fab fa-" + social.type + (social.type === "facebook" ? "-f" : "")}></i>
                    
                    
                </div>
            </a>
            ))}
        </div>
       
    )
}

export default SocialsBar;