import React from 'react';
import Card from "./Card";
import { useEffect, useState } from "react";

const useFormattedDate = (datetime) => {

    const [formattedDate, setFormattedDate] = useState(Date);

    useEffect(() => {
        const date = new Date(datetime);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };

        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(date);
        setFormattedDate(formattedDate);
    }, [datetime]);

    return formattedDate;
}


const News = ({ title, url, author, date }) => {

    const formattedDate = useFormattedDate(date);

    return (
        <div>
          <Card>
            <h3>{title}</h3>
            <a target="_blank" href={url}>Link</a>
            <p>{author}</p>
            <p>{formattedDate}</p>
            <div class="ui divider"></div>
          </Card>
        </div>
    );
};

export default News;