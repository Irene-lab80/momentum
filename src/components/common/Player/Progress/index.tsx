import React, { ChangeEvent } from 'react';
import { Container, Slider } from './styles';

type ProgressType ={
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMouseUp: () => void;
  onTouchEnd: () => void;
}

const Progress = ({
  value, onChange, onMouseUp, onTouchEnd
}: ProgressType) => (
  <Container>
    <Slider
      type="range"
      min="1"
      max="100"
      step="1"
      value={value}
      id="myRange"
      onChange={onChange}
      onMouseUp={onMouseUp}
      onTouchEnd={onTouchEnd}
      style={{
        background: `linear-gradient(90deg, #ffffff ${Math.floor(
          value
        )}%, #ffffff27 ${Math.floor(value)}%)`,
      }}
      />
  </Container>
);

export default Progress;
