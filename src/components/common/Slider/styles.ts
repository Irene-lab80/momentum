import styled from 'styled-components';

interface IArrowButtonStyled {
  left?: boolean;
  right?: boolean;
}

export const ArrowButton = styled.button<IArrowButtonStyled>`
  position: absolute;
  top: calc(50% - 66px/2);
  z-index: 10;
  cursor: pointer;
  opacity: 0.5;
  padding: 10px;
  transition: all .3s;
  background: transparent;
  border: none;
  :hover{
    opacity: 0.8;
  }
  ${(props) => props.left && `
    left: 32px;
    @media (max-width: 768px){
      left: 5px;
    }
  `}
  ${(props) => props.right && `
    right: 32px;
    transform: rotate(180deg);
    @media (max-width: 768px){
      right: 5px;
    }
  `}

  @media (max-width: 768px){
    padding: 5px;
  }
`;

export const Slider = styled.div`
  height: 100%;
  position: relative;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-color: #bbbbbb;
  background-blend-mode: multiply;
  transition: all .2s ease-in-out;
`;
