import styled from 'styled-components';

export const ArrowContainer = styled.div`
  height: fit-content;
  transition: 0.3s;
  opacity: 0.5;
  :hover {
    opacity: 0.8;
  }
`;

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: 0 auto;
  display: flex;
  padding: 20px;
`;
