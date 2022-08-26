import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: center;
  min-height: 48px;
  width: 100vw;
  font-size: 40px;
  color: #ffffff;
  @media (max-width: 768px){
    min-height: 40px;
  }
`;

export const PartOfDay = styled.span`
  flex: 1;  
  padding: 10px;
  text-align: right;
  @media (max-width: 768px){
    padding: 5px;
    font-size: 28px;

  }
`;

export const UserName = styled.input`
  flex: 1;
  max-width: 50%;
  padding: 10px;
  font-size: 40px;
  text-align: left;
  color: #ffffff;
  background-color: transparent;
  border: 0;
  outline: 0;
  ::placeholder {
    color: #ffffff;
    opacity: .6;
  }
  @media (max-width: 768px){
    font-size: 32px;
    padding: 5px;  
    font-size: 28px;
  }
`;
