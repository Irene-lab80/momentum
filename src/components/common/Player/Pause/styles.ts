import styled from 'styled-components';

export default styled.span`
  width: 40px;
  height: 40px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
  cursor: pointer;
  transform: scale(1.2);
}
`;
