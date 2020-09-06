import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const FooterStyle = styled.div`
  padding: 1em;
  text-align: center;
`;
export const Footer = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <FooterStyle>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          using React. By <a href="https://codejulen.github.io">Julian</a> for{" "}
          <a href="https://twitch.tv/imdishrag">Dish</a> and her wonderful
          community.
        </FooterStyle>
      </Grid>
    </Grid>
  );
};

export default Footer;
