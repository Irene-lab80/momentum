import React from 'react';
import Wrapper from './styles';

type PlayerTemplateType ={
  children: React.ReactNode
}

const PlayerTemplate = ({ children }: PlayerTemplateType) => <Wrapper>{children}</Wrapper>;

export default PlayerTemplate;
