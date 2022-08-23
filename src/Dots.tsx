/** @jsxImportSource @emotion/react */
import React, { memo } from 'react';
import { css, jsx } from '@emotion/react';

type DotType = {
  active: any,
}

type DotsType = {
  slides: any,
  activeSlide: any
}

const Dot = ({ active }: DotType) => {
  return (
    <span
      css={css`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? 'black' : 'white'};
      `}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }: DotsType) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide: any, i: any) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}

export default Dots