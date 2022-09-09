import React from 'react';
import PauseSVG from '../../svg/PauseSVG';
import PauseButton from './styles';

type PauseType = {
  onClick: () => void;
}

const Pause = ({ onClick }: PauseType) => (
  <PauseButton onClick={onClick}>
    <PauseSVG />
  </PauseButton>
);

export default Pause;
