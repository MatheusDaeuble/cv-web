/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { GrGithub, GrInstagram, GrLinkedin, GrFacebook } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import avatar from '~/assets/avatar.jpeg';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoIosMail,
} from 'react-icons/io';


import { colors } from '~/styles';

import {
  Avatar,
  BioContainer,
  BioTextContainer,
  Name,
  Role,
  Location,
  Description,
  SectionBio,
  IconsContainer,
} from './styles';

const Biography = () => {
  const iconProps = {
    size: 22,
    color: colors.darker,
    opacity: 0.8,
  };

  const { t } = useTranslation();

  return (
    <SectionBio>
      <Avatar src={avatar} />
      <BioContainer>
        <BioTextContainer>
          <Name>Matheus Daeuble</Name>
          <Role>Teach Leader</Role>
          {/* <Location>Fortaleza, Brasil</Location> */}
          <IconsContainer>
            <a href='https://github.com/MatheusDaeuble' target='_blank'>
              <IoLogoGithub {...iconProps} />
            </a>
            <a
              href='https://www.linkedin.com/in/matheusdaeuble/'
              target='_blank'>
              <IoLogoLinkedin {...iconProps} />
            </a>
            <a href='mailto:matheusdaeuble@gmail.com' target='_blank'>
              <IoIosMail {...iconProps} />
            </a>
            <a href='https://www.facebook.com/MatheusDaeuble/' target='_blank'>
              <IoLogoFacebook {...iconProps} />
            </a>
            <a href='https://www.instagram.com/matheusdaeuble/' target='_blank'>
              <IoLogoInstagram {...iconProps} />
            </a>
          </IconsContainer>
        </BioTextContainer>
      </BioContainer>
      <Description>
        Apaixonando por tecnologia, atuando na área de desenvolvimento há mais
        de quatro anos, sempre buscando novos desafios que me mantenham em
        constante aprendizado.
      </Description>
    </SectionBio>
  );
};

export default Biography;
