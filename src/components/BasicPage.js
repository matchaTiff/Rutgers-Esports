import React from "react";
import './BasicPage.css';

function BasicPage({
    page_title, page_content, 
}) {
  return (
    <body>
      <div className="container-fluid">
          <h1 className="page_title">{page_title}</h1>
          <p className="page_content">{page_content}</p>
      </div>
    </body>
  );
}

export default BasicPage;
