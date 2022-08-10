/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type SliderContentType ={
  translate: any;
  transition: any;
  width: any;
  children: React.ReactNode;
}

const SliderContent: React.FC<SliderContentType> = ({translate, transition, width, children}) => (
  <div
    css={css`
      transform: translateX(-${translate}px);
      transition: transform ease-out ${transition}s;
      height: 100%;
      width: ${width}px;
      display: flex;
    `}
  >
    {children}
  </div>
)

export default SliderContent