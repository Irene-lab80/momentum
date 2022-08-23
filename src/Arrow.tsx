
/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import { css, jsx } from '@emotion/react';
import BackArrowSvg from './svg/BackArrowSvg';

type ArrowType = {
  direction: any,
  handleClick: any
}

const Arrow = ({ direction, handleClick }: ArrowType) => {
  return (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 50%;
        ${direction === 'right' ? `right: 25px` : `left: 25px`};
        height: 50px;
        width: 50px;
        justify-content: center;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;

        &:hover {
          transform: scale(1.1);
        }
  
        img {
          transform: translateX(${direction === 'left' ? '-2' : '2'}px);
  
          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === 'right' ? <BackArrowSvg /> : <BackArrowSvg />}
    </div>
  )
}

export default memo(Arrow)