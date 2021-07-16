import { FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {

  const searchMovies = (e) => {
    props.searchMovies(e.target.value);
  };

    return (
      <div className="position-relative">
        <FormControl
          type="text"
          placeholder="Titles, people, genres"
          className="pl-4 mr-sm-2"
          onKeyUp={(e) => searchMovies(e)}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
        <FaSearch className="mr-3 nav-icons search-nav search-bar" />
      </div>
    );
  
}

export default SearchBar;