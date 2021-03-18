/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react';
import { GrInstagram, GrLinkedin, GrFacebook } from 'react-icons/gr';

import { RiCloseLine } from 'react-icons/ri';
import { ModalContext } from '~/context/ModalContext';
import { colors } from '~/styles';
import useCompany from './hooks/useCompany';
import {
  Container,
  Background,
  Close,
  Logo,
  Title,
  Subtitle,
  Text,
  Content,
  Tag,
  TagsContainer,
  Line,
  IconsContainer,
  Website,
} from './styles';

const iconProps = {
  size: 17,
  color: colors.dark,
  opacity: 0.9,
};

const Modal = ({ children }) => {
  const { isVisible, setIsVisible, data } = useContext(ModalContext);

  const {
    name,
    logo,
    social,
    description,
    responsibilities,
    stack,
  } = useCompany(data);

  const renderResponsibilities = () =>
    responsibilities.map(res => <Text>{`- ${res}`}</Text>);

  const renderStackList = () =>
    stack.map(tag => (
      <>
        <Tag color={tag.color}>{tag.label}</Tag>{' '}
      </>
    ));

  if (!isVisible) return null;
  return (
    <Background>
      <Container isVisible={isVisible}>
        <Logo src={logo} />
        <Title>{name}</Title>
        <IconsContainer>
          <a href={social.facebook} target='_blank'>
            <GrFacebook {...iconProps} />
          </a>
          <a href={social.instagram} target='_blank'>
            <GrInstagram {...iconProps} />
          </a>
          <a href={social.linkedin} target='_blank'>
            <GrLinkedin {...iconProps} />
          </a>
        </IconsContainer>
        <Content>
          <Subtitle>Descrição:</Subtitle>
          <Text>{description}</Text>
          <Line />
          <Subtitle>Responsabilidaes:</Subtitle>
          {renderResponsibilities()}
          <Line />
          <Subtitle>Principais Tecnologias:</Subtitle>
          <TagsContainer>{renderStackList()}</TagsContainer>
        </Content>
        {/* <Website>http://skilopay.com.br</Website> */}
        <Close onClick={() => setIsVisible(false)}>
          <RiCloseLine color={colors.darker} size={20} />
        </Close>
        {children}
      </Container>
    </Background>
  );
};

export default Modal;
