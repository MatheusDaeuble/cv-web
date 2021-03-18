import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '~/styles';
import logos from '~/assets/logos';

export const COMPANY = {
  SKILOPAY: 'SKILOPAY',
  NW_SOFT: 'NW_SOFT',
  ITEGRA: 'ITEGRA',
  ACENS: 'ACENS',
};

const useCompany = name => {
  const { t } = useTranslation();

  const company = useMemo(() => {
    return {
      [COMPANY.SKILOPAY]: {
        name: 'Skilopay',
        logo: logos.skilopay,
        description:
          'A Skilopay é uma fintech brasileira com time 100% remoto, onde atuo principalmente no produto mobile.',
        social: {
          facebook: 'https://www.facebook.com/skilopay/',
          instagram: 'https://www.instagram.com/skilopay/',
          linkedin: 'https://www.linkedin.com/company/skilopay',
        },
        responsibilities: [
          'Desenvolver soluções de alta qualidade.',
          'Manutenção e evolução do código.',
          'Publicar o apps nas respectivas stores.',
          'Revisar códigos (PR).',
        ],
        stack: [
          {
            label: 'ReactNative',
            color: colors.secondary,
          },
          {
            label: 'GraphQL',
            color: '#DB0194',
          },
          {
            label: 'Typescript',
            color: '#3075C1',
          },
        ],
      },
      [COMPANY.NW_SOFT]: {
        name: 'NwSoft',
        logo: logos.nwSoft,
        description:
          'Na NwSoft atuei na reconstrução do novo aplicativo GPMTrack, uma solução para rastreio de frotas, contando com diversas funcionalidades.',
        social: {
          facebook: 'https://www.facebook.com/nwsoft/',
          instagram: 'https://www.instagram.com/nwsoft/?hl=pt',
          linkedin: 'https://br.linkedin.com/company/nwsoft',
        },
        responsibilities: [
          'Desenvolver novas funcionalidades.',
          'Migração para novas tecnologias.',
          'Criação de testes unitários.',
        ],
        stack: [
          {
            label: 'ReactNative',
            color: '#3075C1',
          },
          {
            label: 'Javascript',
            color: colors.secondary,
          },
          {
            label: 'Testes unitários',
            color: '#927079',
          },
        ],
      },
      [COMPANY.ITEGRA]: {
        name: 'Itegra',
        logo: logos.itegra,
        description:
          'Na Itegra trabalhei na criação de produtos inovadores, atuando em todos os setores e etapas de desenvolvimento.',
        social: {
          facebook: 'https://www.facebook.com/itegra/',
          instagram: 'https://www.instagram.com/itegratecnologia/',
          linkedin: 'https://br.linkedin.com/company/itegra',
        },
        responsibilities: [
          'Desenvolver soluções de alta qualidade.',
          'Modelar soluções junto ao time.',
          'Ajudar membros a desenvolverem suas habilidades.',
        ],
        stack: [
          {
            label: 'React.js',
            color: '#5ED4F4',
          },
          {
            label: 'ReactNative',
            color: '#3075C1',
          },
          {
            label: 'Python',
            color: '#F8C500',
          },
          {
            label: 'SQL',
            color: '#DB0194',
          },
          {
            label: 'Inteligência Artificial ',
            color: '#00264D',
          },
        ],
      },
      [COMPANY.ACENS]: {
        name: 'Acens',
        logo: logos.acens,
        description:
          'Acens é uma empresa júnior localizada no campus da Universidade Estadual do Ceará, onde atuei tanto no gerenciamento de times como no desenvolvimento de diversos sites.',
        social: {
          facebook: 'https://pt-br.facebook.com/acensjunior/',
          instagram: 'https://www.instagram.com/acensjr/?hl=pt-br',
          linkedin: 'https://br.linkedin.com/company/acens-empresa-j%C3%BAnior',
        },
        responsibilities: [
          'Gerenciar squads.',
          'Criação de websites.',
          'Levantamento de requisitos.',
        ],
        stack: [
          {
            label: 'Python',
            color: '#00264D',
          },
          {
            label: 'HTML5',
            color: '#DE4B24',
          },
          {
            label: 'CSS3',
            color: '#2D9FD9',
          },
          {
            label: 'Javascript',
            color: '#F8C500',
          },
        ],
      },
    }[name];
  }, [name]);

  return company;
};

export default useCompany;
