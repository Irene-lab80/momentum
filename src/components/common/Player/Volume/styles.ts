import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 60px;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 70%;
  height: 3px;
  border-radius: 5px;
  background: #9440f3;
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
