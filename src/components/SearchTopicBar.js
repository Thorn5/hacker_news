import { useState } from "react";

const SearchTopicBar = (props) => {

  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTopic(searchTerm);
    props.setLoading(true);
    if (searchTerm) {
      fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}&tags=story`)
        .then(response => response.json())
        .then(data => {
          props.setData(data.hits);
        })
        .catch(error => console.log(error))
        .finally(() => props.setLoading(false));
    } else {
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='search-input'
          placeholder="Search topic..."
          onChange={handleChange}
        />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </>
  );
}

export default SearchTopicBar;