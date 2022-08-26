import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;align-items: center;
  justify-content: flex-end;
`;

export const Quote = styled.p`
  line-height: 30px;
  margin-bottom: 5px;
`;

export const Author = styled.span`
  display: block;
  line-height: 30px;
`;

export const Button = styled.button`
  width: 50px;
  color: #ffffff;
  border: none;
  padding: 10px;
  margin-top: 5px;
  background: transparent;
  opacity: 0.5;

  cursor: pointer;
  transition: all .3s;
  :hover {
    opacity: 0.8;
  }
`;
