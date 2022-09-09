import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 20px;
`;

export const Slider = styled.input`
 -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 5px;
  ::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
    :hover {
      background: #9440f3;
      transform: scale(1.2);
      transition: .3s;
    }
  }
  ::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
    :hover {
      background: #9440f3;
      transform: scale(1.2);
      transition: .3s;
    }
  }
`;
