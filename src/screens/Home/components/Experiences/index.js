import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '~/components/Timeline';
import { SectionExperiences, TitleExperiences } from './styles';

const Experiences = () => {
  const { t } = useTranslation();
  return (
    <SectionExperiences>
      <TitleExperiences>Experiências</TitleExperiences>
      <Timeline />
    </SectionExperiences>
  );
};

export default Experiences;
