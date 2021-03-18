import React from 'react';
import LanguageOption from '~/components/LanguageOption';
import SafeArea from '~/components/SafeArea';

import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Biography from './components/Biography';
import { Container } from './styles';

const HomeScreen = () => {
  return (
    <Container>
      <LanguageOption />
      <Biography />
      <Skills />
      <Experiences />
      <SafeArea />
    </Container>
  );
};

export default HomeScreen;
