import React from "react";
import { HeaderStyle } from "./index.style";

export const Header = () => {
  return (
    <HeaderStyle>
      <h1>Heyo Dishcord! (Specifically, #film)</h1>
      <h4>
        (Dish is in no way associated with this app, by the way. I just made it
        for fun.)
      </h4>
      <p>
        Every week (ish), we try to coordinate movie nights where we all gather
        together virtually to watch a movie in the Discord. Below are all the
        movies on the list.
      </p>
    </HeaderStyle>
  );
};

export default Header;
