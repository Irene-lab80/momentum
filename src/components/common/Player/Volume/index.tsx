import React, { ChangeEvent } from 'react';
import { Wrapper, Slider } from './styles';

type VolumeType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const Volume = ({ onChange, value }: VolumeType) => (
  <Wrapper>
    <Slider
      type="range"
      min="1"
      max="100"
      defaultValue="80"
      id="myRange"
      onChange={onChange}
      style={{
        background: `linear-gradient(90deg, #ffffff ${
          value * 100
        }%, #ffffff27 ${value * 100}%)`,
      }}
      />
  </Wrapper>
);

export default Volume;
