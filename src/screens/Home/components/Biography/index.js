/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { GrGithub, GrInstagram, GrLinkedin, GrFacebook } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import avatar from '~/assets/avatar.jpeg';

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
          <Role>Full-stack Development</Role>
          {/* <Location>Fortaleza, Brasil</Location> */}
          <IconsContainer>
            <a href='https://github.com/MatheusDaeuble' target='_blank'>
              <GrGithub {...iconProps} />
            </a>
            <a
              href='https://www.linkedin.com/in/matheusdaeuble/'
              target='_blank'>
              <GrLinkedin {...iconProps} />
            </a>
            <a href='https://www.instagram.com/matheusdaeuble/' target='_blank'>
              <GrInstagram {...iconProps} />
            </a>
            <a href='https://www.facebook.com/MatheusDaeuble/' target='_blank'>
              <GrFacebook {...iconProps} />
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
