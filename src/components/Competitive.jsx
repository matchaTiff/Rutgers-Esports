import React from 'react';
import BasicPage from './BasicPage';
import { competitivePage } from './data/Data';

function Competitive() {
    const {
        pageTitle,
        pageContent,
    } = competitivePage;
    return (
        <>
            <BasicPage pageTitle={pageTitle} pageContent={pageContent} />
        </>
    );
}

export default Competitive;
