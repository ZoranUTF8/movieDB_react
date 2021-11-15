import React, { useState, useEffect } from "react";

// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
    
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  //! functions
  //* Fetch the movies from db
  const fetchMovies = async (url) => {
    setIsLoading(true); //? every time we search we invoke this function

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        //? data for movies or single movie
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //? get data on render and when we type something
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
