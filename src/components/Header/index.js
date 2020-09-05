import React from "react";
import { HeaderStyle } from "./index.style";

export const Header = () => {
  return (
    <HeaderStyle>
      <h1>Hello, friends of dishrag!</h1>
      <h3>
        (Dish is in no way associated with this app, by the way. I just made it
        for fun.)
      </h3>
      <p>
        Every week (ish), we try to coordinate movie nights where we all gather
        together virtually to watch a movie in the Discord.
      </p>
      <p>Use the buttons below to filter what we have left.</p>
    </HeaderStyle>
  );
};

export default Header;
