import { useEffect } from "react";

const LastNews = (props) => {

  useEffect(() => {

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${date}&page=1`;

    props.setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        props.setData(data.hits);
      })
      .catch(error => { console.error('Error:', error) })
      .finally(() => props.setLoading(false));
  }, []);

  return (
    <>
      {props.loading ? <h1>Loading...</h1> : <h1>Latest news</h1>}
    </>
  );
}

export default LastNews;