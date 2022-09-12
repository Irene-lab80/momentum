import React from 'react';
import { Link } from 'react-router-dom';
import SliderContainer from '../../common/SliderContainer';
import ArrowBackSVG from '../../common/svg/ArrowBackSVG';
import { ArrowContainer, Container, Text } from './styles';

const NotFoundPage = () => (
  <>
    <SliderContainer />
    <Container>
      <ArrowContainer>
        <Link to="/">
          <ArrowBackSVG />
        </Link>
      </ArrowContainer>
      <Text>Nothing is here</Text>
    </Container>
  </>
);
export default NotFoundPage;
