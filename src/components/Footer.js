import React, { Component } from 'react';
import logosdata from '../data/logosdata.js';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
          <wrapper className="d-flex flex-column">
              <main className="flex-fill" />
              <footer className="pb-5">
                  <div className="container">
                      <hr />
                      <div className="info">
                          <div className="left">
                              <img className="logo" src={logosdata.black.logo} />
                              <div className="contact">
                                  <div className="text-muted">ADDRESS</div>
                                  613 George St. New Brunswick, NJ 08901
<br />
                                  <br />
                                  <div className="text-muted">EMAIL</div>
                                  rutgersesports@gmail.com
</div>
                            </div>
                          <div className="socials">
                              <a href="https://www.facebook.com/rutgersesports/"><i className="fab fa-facebook-f fa-2x" /></a>
                              <a href="https://twitter.com/RutgersEsports"><i className="fab fa-twitter fa-2x" /></a>
                              <a href="https://twitch.tv/rutgersesports"><i className="fab fa-twitch fa-2x" /></a>
                              <a href="https://discord.gg/rutgersesports"><i className="fab fa-discord fa-2x" /></a>
                              <a href="https://www.youtube.com/channel/UC3JwKYbQ_PaX7uZF07Ni00w"><i className="fab fa-youtube fa-2x" /></a>
                              <a href="https://www.linkedin.com/company/rutgers-esports/about/"><i className="fab fa-linkedin-in fa-2x" /></a>
                              <a href="https://www.instagram.com/rutgersesports/"><i className="fab fa-instagram fa-2x" /></a>
                              <a href="mailto:rutgersesports@gmail.com"><i className="fas fa-envelope fa-2x" /></a>
                            </div>
                        </div>
                      <div className="copyright">
                          <i className="far fa-copyright fa-xs" />
                          {' '}
                          2021 Rutgers Esports
</div>
                    </div>
                </footer>
            </wrapper>
        );
    }
}

export default Footer;
