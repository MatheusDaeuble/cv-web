/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { GrGithub, GrInstagram, GrLinkedin, GrFacebook } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import avatar from '~/assets/avatar.jpeg';
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
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
    size: 17,
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
          <Role>Tech Leader</Role>
          {/* <Location>Fortaleza, Brasil</Location> */}
          <IconsContainer>
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
          </IconsContainer>
        </BioTextContainer>
      </BioContainer>
      {/* <Description>
        Profissional atuando no setor de criação e desenvolvimento há quatro
        anos em diversos projetos. Sempre buscando aprender e encarar novos
        desafios.
      </Description> */}
    </SectionBio>
  );
};

export default Biography;
