import { useState } from "react";

const SearchTopicBar = (props) => {

  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      props.setTopic(searchTerm);
      fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${searchTerm}&tags=story`)
        .then(response => response.json())
        .then(data => {
          props.setTopicData(data);
          props.setWaiting(false);
        })
        .catch(error => console.log(error))
    } else {
      props.setWaiting(true);
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='search-input'
        placeholder="Search topic..."
        onChange={handleChange}
      />
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  );
}

export default SearchTopicBar;