import React from 'react';
import './BasicPage.css';

function BasicPage({
    pageTitle, pageContent,
}) {
    return (
        <body>
            <div className="container-fluid">
                <h1 className="page_title">{pageTitle}</h1>
                <p className="page_content">{pageContent}</p>
            </div>
        </body>
    );
}

export default BasicPage;
