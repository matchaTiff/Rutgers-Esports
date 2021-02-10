import React from 'react';
import './Socials.css';

function SocialsBar(props) {
    const { flow } = props;

    return (
        <div className="socialsContainer" style={{ flexDirection: flow }}>
            {props.socials.map((social) => (
            <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <div className={`${social.type}Container socContainer`}>

                        <i className={`fab fa-${social.type}${social.type === 'facebook' ? '-f' : ''}`} />

                    </div>
                </a>
            ))}
      </div>

    );
}

export default SocialsBar;
