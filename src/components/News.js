import React from 'react';
 const News = ({title , url, author}) => {
    return (
        <div>
            <h3>{title}</h3>
            <a target="_blank" href={url}>{url}</a>
            <p>{author}</p>
            <div class="ui divider"></div>
        </div>
    );
 };

 export default News;