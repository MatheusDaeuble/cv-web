import React from 'react';
import useWindowDimensions from '~/hooks/useDimensionsHook';
import { Container } from './styles';

const SafeArea = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 880;

  return <Container isMobile={isMobile} />;
};

export default SafeArea;
