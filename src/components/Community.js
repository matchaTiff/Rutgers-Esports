import React from 'react';
import BasicPage from './BasicPage';
import { communityPage } from './data/Data';

function Community() {
    return (
        <BasicPage {...communityPage} />
    );
}

export default Community;
