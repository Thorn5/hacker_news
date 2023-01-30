import React, { useEffect, useState } from 'react';
import News from './components/News';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';
import ButtonPagination from './components/ButtonPagination'

function View() {
  const [newses, setNewses] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [pages , setPages] = useState(1);


  useEffect(() => {
    setLoading(true);
    let url = '';
    if (query.length) {
      url = `http://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${pages}&tags=story`
    } else {
      url = `https://hn.algolia.com/api/v1/search_by_date?tags=story`
    }
    getNews(url);
  }, [query,pages])

  const getNews = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setNewses(data.hits);
    setLoading(false);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form class="ui input focus" onSubmit={getSearch}>
        <input type="text" value={search}
          onChange={updateSearch} />
        <button class="ui blue button" type="submit">
          <i class="search icon"></i>
        </button>
      </form>
      {loading === true ? (<LoadingSpinner />)
        : <>
          {query ? <h1>News about {query}</h1> : <h1>Latest News</h1>}
          {newses.length ?
            newses.map(news => (
              <News
                key={news.story_id}
                title={news.title}
                url={news.url}
                author={news.author}
                date={news.created_at}
              />
            )) :
            <h2>No news found : </h2>
          }
        </>
      }
      
      <ButtonPagination
      pages={pages}
      setPages={setPages}
      />
    </div>
  );
}

export default View;