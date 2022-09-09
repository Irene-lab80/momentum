import React from 'react';
import PrevSVG from '../../svg/PrevSVG';
import PreviousTrack from './styles';

type PreviousType = {
  onClick: () => void;
}

const Previous = ({ onClick }: PreviousType) => (
  <PreviousTrack onClick={onClick}>
    <PrevSVG />
  </PreviousTrack>
);

export default Previous;
