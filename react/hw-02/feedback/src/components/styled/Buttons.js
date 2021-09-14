import styled, { css } from "styled-components";

const FeedbackBtn = styled.button`
  margin: 0 5px;
  padding: 7px 15px;
  font-size: 20px;
  color: black;
  border-radius: 5px;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
    `}
`;

export default FeedbackBtn;
