import styled from "styled-components";

const LoaderOverlay = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff20;
`;

export default LoaderOverlay;
