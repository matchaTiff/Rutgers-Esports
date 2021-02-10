import React from 'react';
import BasicPage from './BasicPage';
import { competitivePage } from './data/Data.js';

function Competitive() {
    return (
      <>
          <BasicPage {...competitivePage} />
        </>
    );
}

export default Competitive;
