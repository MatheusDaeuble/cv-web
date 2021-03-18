import React from 'react';
import IPhone from '~/components/IPhone';
import FooterComponent from '~/components/Footer';
import PhraseAnimation from '~/components/PhraseAnimation';
import {
  Background,
  Container,
  Content,
  Line,
  Title,
  Text,
  Subtitle,
} from './styles';

const ComputerContainer = () => (
  <Background foo='flex'>
    <Container>
      <Content>
        <PhraseAnimation />
        <Line />
        <Title>O Projeto:</Title>
        <Subtitle>"Nada mais justo que ser um aplicativo."</Subtitle>
        <Text>
          Como um desenvolvedor mobile, estava sentindo vontade de retornar a
          web, então surgiu a ideia de juntar os dois mundos criando um
          currículo em forma de aplicativo.
        </Text>
      </Content>
      <IPhone />
    </Container>
    <FooterComponent />
  </Background>
);

export default ComputerContainer;
