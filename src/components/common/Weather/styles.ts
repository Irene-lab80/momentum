import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid white; */
  padding: 10px;
`;

export const Input = styled.input`
  width: 100%;
  text-align: right;
  background: transparent;
  color: white;
  padding: 5px;
  letter-spacing: 2px;
  border: none;
  border-bottom: 1px solid white ;
  line-height: 25px;

  ::placeholder {
  color: grey;
  letter-spacing: 2px;
}
`;
