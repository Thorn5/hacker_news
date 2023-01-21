import { useEffect } from "react";

const SearchBar = (props) => {

  const handleChange = (e) => {
    if (e.target.value) {
      const temp = props.data.hits.filter(hit => {
        console.log(e.target.value.toLowerCase());
        return hit.title.toLowerCase().includes(e.target.value.toLowerCase());
      })
      props.setSearchData(temp);
    } else {
      props.setSearchData(null);
    }


  }

  return (
    <input
      type='text'
      className='search-input'
      placeholder="Search..."
      onChange={handleChange} />
  );
}

export default SearchBar;