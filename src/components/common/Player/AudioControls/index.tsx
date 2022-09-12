import React from 'react';
import ButtonsBox from '../ButtonsBox';
import Pause from '../Pause';
import Play from '../Play';
import Next from '../Next';
import Previous from '../Previous';

type AudioControlsType = {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  previous: () => void;
  next: () => void;
}

const AudioControls = ({
  isPlaying,
  play,
  pause,
  previous,
  next
}: AudioControlsType) => (
  <ButtonsBox>
    <Previous onClick={previous} aria-label="Previous" />
    {isPlaying ? (
      <Pause onClick={pause} aria-label="Pause" />
    ) : (
      <Play onClick={play} aria-label="Play" />
    )}
    <Next onClick={next} aria-label="Next" />
  </ButtonsBox>
);

export default AudioControls;
