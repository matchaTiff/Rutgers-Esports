import React from 'react';
import BasicPage from './BasicPage';
import { communityPage } from './data/Data';

function Community() {
    const {
        pageTitle,
        pageContent,
    } = communityPage;
    return (
        <BasicPage pageTitle={pageTitle} pageContent={pageContent} />
    );
}

export default Community;
