import styled, { css } from "styled-components";

const Container = styled.div`
  /* This renders the buttons above... Edit me! */

  margin: 25px auto;
  padding: 0 15px;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}
`;

export default Container;
