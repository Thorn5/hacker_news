import React,  {useEffect , useState} from 'react';
import News from './components/News';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner';

function View() {
 const [newses , setNewses] = useState([]);
 const [search , setSearch] = useState("");
 const [query , setQuery] = useState("bitcoin");
 const [loading , setLoading] = useState(true);

  useEffect(()=> {
    getNews();
  },[query])
  const getNews = async () => {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
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
        onChange={updateSearch}/>
       <button class="ui blue button" type="submit">
        <i class="search icon"></i>
       </button>
      </form>
      {/* <form className='search-form' onSubmit={getSearch}>
        <input className="search-bar"
        type= "text"
        value={search}
        onChange={updateSearch} 
        />
        <button className="search-button" type="submit"
        >search</button>
      </form> */}
     {loading === true ? (<LoadingSpinner/>) :
      (newses.map(news => (
        <News 
          key={news.story_id}
          title={news.story_title}
          url={news.url}
          author={news.author}
          // date = {new Intl.DateTimeFormat('en-Us' ,{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(items.created_at_i)}
          />
      )))};
    </div>
  );
}

export default View;