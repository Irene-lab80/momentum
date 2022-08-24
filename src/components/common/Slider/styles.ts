import styled, { css } from 'styled-components';

// export const ButtonLeft = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translate(0, -50%);
//   left: 32px;
//   z-index: 10;
//   cursor: pointer;
//   opacity: 0.8;
//   padding: 10px;
// `;

// export const ButtonRight = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translate(0, -50%);
//   right: 32px;
//   z-index: 10;
//   cursor: pointer;
//   opacity: 0.8;
//   padding: 10px;
//   transform: rotate(180deg);
// `;
interface IArrowButtonStyled {
  left?: boolean;
  right?: boolean;
}

export const ArrowButton = styled.button<IArrowButtonStyled>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;
  cursor: pointer;
  opacity: 0.8;
  padding: 10px;
  ${(props) => props.left && css`
    left: 32px;
  `}
  ${(props) => props.right && css`
    right: 32px;
    transform: rotate(180deg);
  `}
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
