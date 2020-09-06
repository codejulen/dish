import React, { useState } from "react";
import { MovieWrapper, ButtonWrapper } from "./index.style";
import movies from "./movies";
import Grid from "@material-ui/core/Grid";

const MovieList = () => {
  const [movieList, setMovieList] = useState(movies);

  const handleClearFilters = () => {
    setMovieList(movies);
  };
  const handleWatchedFilter = () => {
    setMovieList(movieList.filter((m) => m.watched));
  };
  return (
    <MovieWrapper>
      <ButtonWrapper onClick={handleWatchedFilter}>
        Already Watched ({movieList.filter((m) => m.watched).length})
      </ButtonWrapper>
      <ButtonWrapper onClick={handleClearFilters}>Clear Filters</ButtonWrapper>
      <Grid container spacing={3}>
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
