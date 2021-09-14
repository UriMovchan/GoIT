import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  max-width: calc(100vw - 48px);

  display: block;
  margin: 15px auto;
  padding: 7px 15px;
  font-size: 20px;
  font-weight: 700;
  color: #5e5656;
  border-radius: 5px;
  border-color: #dcdcdc;

  &:hover,
  &:focus {
    color: #fff;
    background: #3f51b5;
  }

  @media (min-width: 768px) {
    max-width: 330px;
  }
`;

export default Button;
