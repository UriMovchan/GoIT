import styled, { css } from "styled-components";

const Content = styled.div`
  width: 100%;
  padding: 15px 0;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}
`;

export default Content;
