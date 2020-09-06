import React, { useState, useEffect } from "react";
import { MovieWrapper, ButtonWrapper } from "./index.style";
import movies from "./movies";
import Grid from "@material-ui/core/Grid";

const MovieList = () => {
  // Hooks
  const [movieList, setMovieList] = useState(movies);
  const [submitterFilter, setSubmitterFilter] = useState(null);
  const [seenFilter, setSeenFilter] = useState(null);
  const uniqueSubmitters = movies
    .map((m) => m.submitter)
    .filter((s, idx) => movies.map((m) => m.submitter).indexOf(s) === idx);
  const focusedMovie = movies.filter((m) => m.queue);

  // useEffect pog
  useEffect(() => {
    if (seenFilter != null && submitterFilter != null) {
      setMovieList(
        movies.filter(
          (m) =>
            (seenFilter ? m.watched : !m.watched) &&
            m.submitter === submitterFilter
        )
      );
    } else {
      if (seenFilter != null) {
        setMovieList(
          movies.filter((m) => (seenFilter ? m.watched : !m.watched))
        );
      } else if (submitterFilter != null) {
        setMovieList(movies.filter((m) => m.submitter === submitterFilter));
      }
    }
  }, [submitterFilter, seenFilter]);

  // Handlers
  const handleUnseenFilter = () => {
    setSeenFilter(false);
  };
  const handleWatchedFilter = () => {
    setSeenFilter(true);
  };
  const handleClearFilters = () => {
    setSeenFilter(null);
    setSubmitterFilter(null);
    setMovieList(movies);
  };
  const handleSubmitterFilter = (e) => {
    setSubmitterFilter(e.target.value);
  };

  return (
    <MovieWrapper>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <center>
            <h2>
              <span>Movies Seen</span>
            </h2>
            <h1>{movies.filter((m) => m.watched).length}</h1>
          </center>
        </Grid>
        <Grid item xs={6}>
          <center>
            <h2>
              <span>Movies Unseen</span>
            </h2>
            <h1>{movies.filter((m) => !m.watched).length}</h1>
          </center>
        </Grid>
      </Grid>
      {focusedMovie && (
        <div>
          <h2>
            <span>Up Next</span>
          </h2>
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <img src={focusedMovie[0].poster} height={300} alt="hello" />
            </Grid>
            <Grid item xs={8}>
              <h1>{focusedMovie[0].title}</h1>
              <h3>Submitted By: {focusedMovie[0].submitter}</h3>
              <p>{focusedMovie[0].overview}</p>
            </Grid>
          </Grid>
        </div>
      )}
      <div>
        <h2>
          <span>Filter by Seen</span>
        </h2>
        <ButtonWrapper onClick={handleClearFilters}>All</ButtonWrapper>
        <ButtonWrapper onClick={handleWatchedFilter}>Seen</ButtonWrapper>
        <ButtonWrapper onClick={handleUnseenFilter}>Unseen</ButtonWrapper>
      </div>
      <div>
        <h2>
          <span>Filter By Contributor</span>
        </h2>
        {uniqueSubmitters.map((m) => (
          <ButtonWrapper onClick={handleSubmitterFilter} value={m}>
            {m}
          </ButtonWrapper>
        ))}
      </div>
      {seenFilter !== submitterFilter && (
        <h4>
          {seenFilter !== null && <span>Seen: {seenFilter.toString()}</span>}{" "}
          {submitterFilter !== null && (
            <span>Submitter: {submitterFilter}</span>
          )}
        </h4>
      )}
      <br />
      <br />
      {movieList.length === 0 && (
        <p>No movies found with the chosen filters.</p>
      )}
      <Grid container spacing={10}>
        {movieList.map((m) => (
          <Grid container item xs={4}>
            <img src={m.poster} height={300} alt={m.title} />
          </Grid>
        ))}
      </Grid>
    </MovieWrapper>
  );
};

export default MovieList;
