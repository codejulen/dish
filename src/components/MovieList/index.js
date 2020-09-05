import React, { useState } from "react";
import { MovieWrapper } from "./index.style";
import movies from "./movies";
import Grid from "@material-ui/core/Grid";
import watched from "./watched";

const MovieList = () => {
  const [movieList, setMovieList] = useState(movies);

  const buildStyle = (movie) => {
    return (
      <div>
        <h5>{movie.title}</h5>
        <img src={movie.poster} />
        <p>{movie.overview}</p>
      </div>
    );
  };
  return (
    <MovieWrapper>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {movies.map((m) => (
          <Grid container item xs={6} sm={3} spacing={3}>
            <Grid height={140} width={100} container spacing={3}>
              {/* <Paper>{m.title}</Paper> */}
              <img src={m.poster} height={300} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </MovieWrapper>
  );
};

export default MovieList;
