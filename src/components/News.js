import React from 'react';
import Card from './Card';
 const News = ({title , url, author}) => {
    return (
        <div>
            <Card>
              <h3>{title}</h3>
              <a target="_blank" href={url}>{url}</a>
              <p>{author}</p>
            </Card>
            <div class="ui divider"></div>
        </div>
    );
 };

 export default News;