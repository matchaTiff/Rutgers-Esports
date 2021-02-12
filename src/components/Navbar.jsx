/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logosdata from '../data/logosdata';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link to="/" className="navbar-brand p-0">
                    <img src={logosdata.red.logo} width="75" height="75" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle text-truncate" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About
                            </Link>
                            <div className="dropdown-menu fade-down" aria-labelledby="navbarDropdown">
                                <Link to="/community" className="dropdown-item">Our Community</Link>
                                <Link to="/competitive" className="dropdown-item">Competitive</Link>
                                <Link to="/discord" className="dropdown-item">Discord</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle text-truncate" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Clubs
                            </Link>
                            <div className="dropdown-menu fade-down" aria-labelledby="navbarDropdown">
                                <Link to="#" className="dropdown-item">Call of Duty</Link>
                                <Link to="#" className="dropdown-item">CS:GO</Link>
                                <Link to="#" className="dropdown-item">DotA 2</Link>
                                <Link to="#" className="dropdown-item">Fighting Games Community (FGC)</Link>
                                <Link to="#" className="dropdown-item">Hearthstone</Link>
                                <Link to="#" className="dropdown-item">League of Legends</Link>
                                <Link to="#" className="dropdown-item">Overwatch/Valorant</Link>
                                <Link to="#" className="dropdown-item">Pokemon</Link>
                                <Link to="#" className="dropdown-item">Rainbow 6 Siege</Link>
                                <Link to="#" className="dropdown-item">Rhythm Games Club (RGC)</Link>
                                <Link to="#" className="dropdown-item">Rocket League</Link>
                                <Link to="#" className="dropdown-item">Smash Melee</Link>
                                <Link to="#" className="dropdown-item">Smash Ultimate</Link>
                                <Link to="#" className="dropdown-item">Women&apos;s Gaming League</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Teams
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">
                                Events
                            </Link>
                        </li>
                        <li className="nav-item text-truncate">
                            <Link to="#" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="search-box ml-auto col-lg-3 p-0">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
