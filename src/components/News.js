import React from 'react';
 const News = ({title , url, author }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{url}</p>
            <p>{author}</p>
        </div>
    );
 };

 export default News;