import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '~/styles';
import logos from '~/assets/logos';

export const COMPANY = {
  ITEGRA2: 'ITEGRA2',
  SKILOPAY: 'SKILOPAY',
  NW_SOFT: 'NW_SOFT',
  ITEGRA: 'ITEGRA',
  ACENS: 'ACENS',
};

const useCompany = name => {
  const { t } = useTranslation();

  const company = useMemo(() => {
    return {
      [COMPANY.ITEGRA2]: {
        name: 'Itegra',
        logo: logos.itegra,
        description:
          'Responsável por atribuir/revisar tarefas, repassar conhecimento, adotar boas práticas e novas tecnologias para melhoria continua no processo de desenvolvimento e rendimento da equipe.',
        social: {
          facebook: 'https://www.facebook.com/itegra/',
          instagram: 'https://www.instagram.com/itegratecnologia/',
          linkedin: 'https://br.linkedin.com/company/itegra',
        },
        responsibilities: [
          'Adotar boas práticas e novas tecnologias',
          'Ajudar membros a desenvolverem suas habilidades.',
          'Revisar códigos (PR).',
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
            label: 'Node.js',
            color: '#54A244',
          },
          {
            label: 'Jest',
            color: '#DB0194',
          },
        ],
      },
      [COMPANY.SKILOPAY]: {
        name: 'Skilopay',
        logo: logos.skilopay,
        description:
          'Skilopay trata-se de uma fintech onde atuei tanto no desenvolvimento de interfaces como na construção do Design System utilizando a metodologia de Atomic Design.',
        social: {
          facebook: 'https://www.facebook.com/skilopay/',
          instagram: 'https://www.instagram.com/skilopay/',
          linkedin: 'https://www.linkedin.com/company/skilopay',
        },
        responsibilities: [
          'Desenvolver soluções de alta qualidade.',
          'Criação e manutenção do Design System',
          'Publicar aplicativos nas lojas.',
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
          'Atuei na migração de uma solução de rastreamento de carros que originalmente tratava-se de um aplicativo nativo para uma aplicação cross-platform, utilizando a tecnologia React Native.',
        social: {
          facebook: 'https://www.facebook.com/nwsoft/',
          instagram: 'https://www.instagram.com/nwsoft/?hl=pt',
          linkedin: 'https://br.linkedin.com/company/nwsoft',
        },
        responsibilities: [
          'Desenvolver novas funcionalidades.',
          'Migração para novas tecnologias.',
          'Criação de testes automatizados.',
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
          'Por tratar-se de uma fabrica de softwares, atuei na criação de produtos variados passando por todas as etapas do desenvolvimento.',
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
