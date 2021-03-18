import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import useLocalStorage from '~/hooks/useLocalStorage';
import BrFlag from '~/assets/br-flag.png';
import UsFlag from '~/assets/us-flag.png';
import {
  Container,
  Flag,
  ContainerList,
  Label,
  ListItem,
  FlagContainer,
} from './styles';
import './style.css';

const flags = {
  pt: {
    icon: BrFlag,
    label: 'pt-BR',
  },
  en: {
    icon: UsFlag,
    label: 'en-US',
  },
};

const LanguageOption = () => {
  const { i18n } = useTranslation(['translation', 'welcome']);
  const [, setValue] = useLocalStorage('language', i18n.language);

  const [isOpen, setIsOpen] = useState(false);

  const changeCode = code => {
    i18n.changeLanguage(code);
    setValue(code);
    setIsOpen(false);
  };

  return (
    <Container>
      <FlagContainer isOpen={isOpen}>
        <Flag
          src={flags[i18n.language].icon}
          onClick={() => setIsOpen(!isOpen)}
        />
      </FlagContainer>
      {isOpen && (
        <ContainerList>
          {Object.keys(flags).map(code => (
            <ListItem onClick={() => changeCode(code)} key={Math.random()}>
              <Flag src={flags[code].icon} />
              <Label>{flags[code].label}</Label>
            </ListItem>
          ))}
        </ContainerList>
      )}
    </Container>
  );
};

export default LanguageOption;
