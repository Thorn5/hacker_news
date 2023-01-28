import { useState } from "react";
import LastNews from "./components/LatestNews";
import New from "./components/New";
import SearchTopicBar from "./components/SearchTopicBar";
import './App.css';


const App = () => {

  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  return (
    <div className="App">
      <SearchTopicBar
        setData={setNews}
        setTopic={setTopic}
        loading={loading}
        setLoading={setLoading} />
      {!topic.length ?
        <>
          <LastNews
            data={news}
            setData={setNews}
            loading={loading}
            setLoading={setLoading} />
          {news.map(hit => <New hit={hit} key={hit.objectID} />)}
        </> :
        <>
          {loading ?
            <h1>Loading...</h1> :
            <>
              {news.length ?
                <>
                  <h1>News about {topic.toUpperCase()}</h1>
                  {news.map(hit => <New hit={hit} key={hit.objectID} />)}
                </> :
                <>
                  <h1>No news found about {topic.toUpperCase()}</h1>
                </>
              }
            </>
          }
        </>
      }
    </div>
  );
}
export default App;