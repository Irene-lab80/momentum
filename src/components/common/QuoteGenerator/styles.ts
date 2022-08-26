import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;
  text-align: center;
  width: 100vw;
`;

export const Quote = styled.p`

`;

export const Author = styled.span`
  display: block;
`;

export const Button = styled.button`
  /* display: inline-flex; */
  text-align: center;
  color: #ffffff;
  border: none;
  /* padding: 10px; */
  margin-top: 5px;
  background: transparent;
  /* border: 1px solid #ffffff; */
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
