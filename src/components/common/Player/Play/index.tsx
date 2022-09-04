import React from 'react';
import PlaySVG from '../../svg/PlaySVG';
import PlayButton from './styles';

type PlayType = {
  onClick: () => void;
}

const Play = ({ onClick }: PlayType) => (
  <PlayButton onClick={onClick}>
    <PlaySVG />
  </PlayButton>
);

export default Play;
