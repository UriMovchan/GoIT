import styled, { css } from "styled-components";

const LanguageBtn = styled.button`
  padding: 3px 7px;
  background: lightgrey;

  &:first-child {
    border-right: 0;
    border-top-left-radius: 35%;
    border-bottom-left-radius: 35%;
  }

  &:last-child {
    border-left: 0;
    border-top-right-radius: 35%;
    border-bottom-right-radius: 35%;
  }

  ${(props) =>
    props.active &&
    css`
      background: green;
      color: white;
    `}
`;

export default LanguageBtn;
