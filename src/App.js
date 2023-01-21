import { useEffect, useState } from 'react';
import './App.css';
import New from './components/New';
import SearchBar from './components/SearchBar';

function App() {

  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${date}&page=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => { setData(data) })
      .catch(error => { console.error('Error:', error) })
  }, []);

  if (!data) {
    return <p>Loading...</p>
  }
  else {
    return (
      <div className="App">
        <SearchBar data={data} setSearchData={setSearchData} />
        {searchData ? (
          <>
            {searchData.map(hit => <New hit={hit} key={hit.objectID} />)}
          </>
        ) : (
          <>
            {data.hits.map(hit => <New hit={hit} key={hit.objectID} />)}
          </>
        )}
      </div>
    );
  }
}

export default App;
