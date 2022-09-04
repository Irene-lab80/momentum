import styled from 'styled-components';

export default styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
