import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

export const Text = styled.h2`
  font-size: 48px;
`;

export const ArrowContainer = styled.div`
  height: fit-content;
  transition: 0.3s;
  opacity: 0.5;
  :hover {
    opacity: 0.8;
  }
`;
