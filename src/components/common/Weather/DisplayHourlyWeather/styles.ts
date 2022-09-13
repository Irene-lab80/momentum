import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  padding: 15px;
  color: white;
  display: flex;
  line-height: 28px;
  gap: 5px;
  overflow-x: scroll;
  width: 90vw;
  height: 40vh;
  box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: lightgrey;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #FFFFFF;
    border-radius: 100px;
    cursor: pointer;
  }
`;

export const Item = styled.div`
  padding: 5px;
  background-color: #00000016;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
