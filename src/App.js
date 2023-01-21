import { useState } from "react";
import LastNews from "./components/LastNews";
import New from "./components/New";
import SearchBar from "./components/SearchBar";
import SearchTopicBar from "./components/SearchTopicBar";
import './App.css';


const App = () => {

  const [waiting, setWaiting] = useState(true);
  const [topicData, setTopicData] = useState(null);
  const [searchData, setSearchData] = useState(null);

  return (
    <div className="App">
      <SearchTopicBar setWaiting={setWaiting} setTopicData={setTopicData} />
      {waiting && <LastNews setData={setTopicData} data={topicData} />}
      {topicData && !waiting &&
        <div>
          Filter: <SearchBar data={topicData} setSearchData={setSearchData} />
        </div>
      }
      {searchData ? (
        <>
          {searchData.map(hit => <New hit={hit} key={hit.objectID} />)}
        </>
      ) : (
        <>
          {topicData && topicData.hits.map(hit => <New hit={hit} key={hit.objectID} />)}
        </>
      )}
    </div>
  );
}
export default App;