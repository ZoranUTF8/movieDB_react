import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  //* get properties from context.js
  const { searchQuery, setSearchQuery, error } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(evt) => evt.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
      />
      {/* //*if no movies found than display error */}
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
