import React from 'react';
 const News = ({title , url, author }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{url}</p>
            <p>{author}</p>
        </div>
    );
 };

 export default News;