import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 1.4em 0 0 4em;
  // margin: 3em 0 0 0;
  background-color: var(--accent-color-medium);

  @media (max-width: 670px) {
    height: 60px;
    padding: 1em 0 0 1.7em;
    margin: 30em 0 0 0;
  }
`;
