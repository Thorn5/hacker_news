const SearchBar = (props) => {

  const handleChange = (e) => {
    if (e.target.value) {
      props.setData(
        props.data.hits.filter(hit => {
          return hit.title.toLowerCase().includes(e.target.value.toLowerCase());
        })
      )
    } else {
      props.setData(null);
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