import React,  {useEffect , useState} from 'react';
import './App.css';

function App() {
 const [news , setNews] = useState([]);

  useEffect(()=> {
    getNews();
  },[])
  const getNews = async () => {
    const response = await fetch('http://hn.algolia.com/api/v1/search_by_date?');
    const data = await response.json();
    setNews(data.hits);
    console.log(data.hits);
  }
  return (
    <div className="App">
      <form>
        <input className="search-bar" type= "text"/>
        <button className="search-button" type="submit">search</button>
      </form>
    </div>
  );
}

export default App;
