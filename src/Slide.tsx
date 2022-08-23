/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import { css, jsx } from '@emotion/react';

type SlideType ={
  content: any;
  width: any
}

const Slide = ({ content, width }: SlideType) => (
  <div
    css={css`
      height: 100;
      width: ${width}px;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default memo(Slide)