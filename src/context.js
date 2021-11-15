import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
//* custom useFetch function

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //! state

  const [searchQuery, setSearchQuery] = useState("Matrix");

  const { isLoading, error, data: movies } = useFetch(`&s=${searchQuery}`);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, searchQuery, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
