import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper, CardMedia, Typography } from "@material-ui/core";
import { FocusedWrapper } from "./index.style";

export const FocusedMovie = ({ poster, title, overview, contributor }) => {
  return (
    <FocusedWrapper>
      <Paper elevation={3}>
        <h1>
          <span>Up Next</span>
        </h1>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <CardMedia component="img" image={poster} />
            {/* <img src={poster} alt="hello" /> */}
          </Grid>
          <Grid item xs={12} sm={9}>
            <p>
              <Typography gutterBottom variant="body" component="h1">
                {title}
              </Typography>
              <Typography gutterBottom variant="body" component="h4">
                Submitted By: {contributor}
              </Typography>
              <Typography gutterBottom variant="body" component="p">
                {overview}
              </Typography>
            </p>
          </Grid>
        </Grid>
      </Paper>
    </FocusedWrapper>
  );
};

FocusedMovie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
};

export default FocusedMovie;
