import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import useFetch from "./useFetch";

const noImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  //* get movie id from params
  const { id } = useParams();

  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  //! main return
  if (isLoading) {
    return <div className="loading"></div>;
  } else if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    );
  } else {
    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
    return (
      <section className="single-movie">
        <img src={poster === "N/A" ? noImage : poster} alt={title} />
        <div className="single-movie-info">
          <h2>{title}</h2>
          <p>{plot}</p>
          <h4>{year}</h4>
          <Link to="/" className="btn">
            Back to search
          </Link>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
