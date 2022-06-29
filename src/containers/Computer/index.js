import React from 'react';
import BrowserFrame from 'react-browser-frame';
import avatar from '~/assets/avatar.png';
import TimeLine from './Timeline';
import Skills from './Skills';
import { colors } from '~/styles';

import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoIosMail,
} from 'react-icons/io';

import IPhone from '~/components/IPhone';
import FooterComponent from '~/components/Footer';
import PhraseAnimation from '~/components/PhraseAnimation';
import {
  Background,
  CollegeContainer,
  Container,
  Content,
  Line,
  Title,
  Text,
  Subtitle,
  ProfileContainer,
} from './styles';

const Section = ({ title, subtitle, description }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Line />
    <Title>{title}</Title>
    {!!subtitle && (
      <Subtitle>"Nada mais justo que ser um aplicativo."</Subtitle>
    )}
    <Text>{description}</Text>
  </div>
);

const ComputerContainer = () => (
  <Background>
    <BrowserFrame url='https://matheusdaeuble.com'>
      <Container>
        {/* <ProfileContainer>
        <div className='header'>
          <img src={avatar} />
          <div className='name-container'>
            <p className='name'>Matheus Daeuble</p>
            <p className='role'>Tech Leader</p>
          </div>
        </div>
        <div className='about-me'>
          <p className='title'>Sobre mim</p>
          <p className='description'>Profissional atuando no setor de criação e desenvolvimento há quatro
          anos em diversos projetos. Sempre buscando aprender e encarar novos
          desafios.</p>
        </div>
      </ProfileContainer> */}

        <ProfileContainer>
          <img src={avatar} />
          <div className='about-me'>
            <div className='social-container'>
              <p className='title'>
                Olá, me chamo <b>Matheus Daeuble!</b>
              </p>
              <div style={{marginRight: -8}}>
                <a href='https://github.com/MatheusDaeuble' target='_blank'>
                  <IoLogoGithub size={24} color={colors.dark} />
                </a>
                <a
                  href='https://www.linkedin.com/in/matheusdaeuble/'
                  target='_blank'>
                  <IoLogoLinkedin size={24} color={colors.dark} />
                </a>
                <a
                  href='mailto:matheusdaeuble@gmail.com'
                  target='_blank'>
                  <IoIosMail size={25} color={colors.dark} />
                </a>
                <a
                  href='https://www.instagram.com/matheusdaeuble/'
                  target='_blank'>
                  <IoLogoInstagram size={24} color={colors.dark} />
                </a>
              </div>
            </div>

            <div className='line' />
            <p className='role'>Tech Leader</p>
            <p className='description'>
              Apaixonando por tecnologia, atuando na área de desenvolvimento há 
              mais de quatro anos, sempre buscando novos desafios que me mantenham em constante aprendizado.
            </p>
          </div>
        </ProfileContainer>
        <CollegeContainer>
          <Title className='title'>Formação Acadêmica:</Title>
          <div className='content'>
            <div style={{ marginRight: 32 }}>
              <p className='period'>Ago 2017 - Jul 2022</p>
              <p className='city'>FORTALEZA</p>
            </div>
            <div>
              <p className='college'>Universidade de Fortaleza</p>
              <p className='course'>Ciências da Computação</p>
              {/* <p className='status'>Formado em Ciência da Computação</p> */}
            </div>
          </div>
        </CollegeContainer>
        <Line />
        <div>
          <Title className='title'>Habilidades</Title>
          <Skills />
        </div>
        <Line />
        <Content>
          <TimeLine />
          <IPhone />
        </Content>
      </Container>
    </BrowserFrame>
  </Background>
);

export default ComputerContainer;
