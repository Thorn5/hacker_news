import React,  {useEffect , useState} from 'react';
import News from './components/News';
import './App.css';

function App() {
 const [newses , setNewses] = useState([]);

  useEffect(()=> {
    getNews();
  },[])
  const getNews = async () => {
    const response = await fetch('http://hn.algolia.com/api/v1/search_by_date?');
    const data = await response.json();
    setNewses(data.hits);
    console.log(data.hits);
  }
  return (
    <div className="App">
      <form>
        <input className="search-bar" type= "text"/>
        <button className="search-button" type="submit">search</button>
      </form>
      {newses.map(news => (
        <News 
          id = {news.story_id}
          title = {news.title}
          url = {news.url}
          author= {news.author}
          // date = {new Intl.DateTimeFormat('en-Us' ,{year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(items.created_at_i)}
          />
      ))};
    </div>
  );
}

export default App;
