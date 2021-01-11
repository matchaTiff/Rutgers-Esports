import React, { Component } from "react";
import TeamsGrid from './TeamsGrid.js';
import ClubsGrid from './ClubsGrid.js';


class HomePage extends Component {
  render() {
    return (
        <div className="wrapper">
            <ClubsGrid></ClubsGrid>
        </div>
    );
  }
}

export default HomePage;
