import React, { useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '~/components/Modal/hooks/useCompany';
import { ModalContext } from '~/context/ModalContext';
import {
  Role,
  Title,
  Period,
  ExperienceRow,
  InfoContainer,
  IconContainer,
  Icon,
  Line,
} from './styles';

import logos from '~/assets/logos';

const NodeJsIcon =
  'https://cdn-icons-png.flaticon.com/512/5968/5968322.png';
const FlaskLogo =
  'https://flask-training-courses.uk/images/flask-logo.png';

const GraphqlIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png';

const JavascriptIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png';
const ReactIcon =
  'https://sap.github.io/ui5-webcomponents/assets/images/react.svg';
const PythonIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png';

const HtmlIcon =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB4twv74Kv-OlgnOCa8NuMOP2DvpeK3kQcw&usqp=CAU';

const CssIcon =
  'https://www.pngitem.com/pimgs/m/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png';

const TsIcon = 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png';

const JestIcon = 'https://iconape.com/wp-content/png_logo_vector/jest-logo.png'

const Timeline = () => {
  const { t } = useTranslation();

  const { openModal } = useContext(ModalContext);

  const experiences = useMemo(
    () => [
      {
        role: 'Tech Leader',
        company: 'Itegra',
        period: `2021-2022`,
        description: "Responsável por atribuir/revisar tarefas, repassar conhecimento, adotar boas práticas e novas tecnologias para melhoria contínua no processo de desenvolvimento e rendimento da equipe.",
        icon: logos.skilopay,
        skills: [TsIcon, ReactIcon, NodeJsIcon, JestIcon],
      },
      {
        role: 'Mobile Development',
        company: 'Skilopay',
        period: `2020-2021`,
        description: "Skilopay trata-se de uma fintech onde atuei tanto no desenvolvimento de interfaces como na construção do Design System, utilizando a metodologia de Atomic Design e tecnologias como React Native e GraphQL.",
        icon: logos.skilopay,
        skills: [TsIcon, ReactIcon, GraphqlIcon],
      },
      {
        role: 'Mobile Development',
        company: 'NwSoft',
        period: `2019-2020`,
        description: "Atuei na migração de uma solução de rastreamento de carros que originalmente tratava-se de um aplicativo nativo para uma aplicação cross-platform, utilizando a tecnologia React Native.",
        icon: logos.nwSoft,
        skills: [JavascriptIcon,  ReactIcon, JestIcon],
      },
      {
        role: 'Full-stack Development',
        company: 'Itegra',
        period: `2017-2019`,
        description: "Por tratar-se de uma fábrica de softwares, atuei na criação de produtos variados passando por todas as etapas do desenvolvimento, utilizando tecnologias como: React, Python, NodeJS e Google Cloud.",
        icon: logos.itegra,
        skills: [ReactIcon,PythonIcon ,FlaskLogo],
      },
    ],
    [t]
  );
  return (
    <div>
      <Title>Experiências</Title>
      {experiences.map(({ role, company, period, icon, description, skills }, index) => {
        return (
          <ExperienceRow key={index.toString()}>
            <p>{period}</p>
            <IconContainer>
              <Icon src={icon} />
              <Line isVisible={index < experiences.length - 1} />
            </IconContainer>
            <InfoContainer>
            <p style={{display: 'flex', whiteSpace: 'nowarp', marginTop: 0}}>
              <Role style={{whiteSpace: 'nowarp'}}>{role} - {company}</Role>
              {skills.map((url)=>  <img src={url} style={{height: 20, width: 20, borderRadius: 3 , marginTop: -4, marginLeft: 4}} />)}
              </p>
              <Period>{description}</Period>
            </InfoContainer>
          </ExperienceRow>
        );
      })}
      <Line />
    </div>
  );
};

export default Timeline;
