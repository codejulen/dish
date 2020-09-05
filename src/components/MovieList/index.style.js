import styled from "styled-components";

export const MovieWrapper = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
`;
export const Button = styled.button`
  background-color: ${(props) => (props.selected ? "$ffffff" : "#fdd0f1")};
  border-radius: 8px;
  border: 1px;
  font-size: 24px;
  font-style: italic;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  &.active,
  &.visited {
    border: 0;
  }
`;

export const GridWrapper = styled.div`
  width: 200px;
`;
