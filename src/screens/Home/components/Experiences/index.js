import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '~/components/Timeline';
import { SectionExperiences, TitleExperiences } from './styles';

const Experiences = () => {
  const { t } = useTranslation();
  return (
    <SectionExperiences>
      <TitleExperiences>{t('experience')}</TitleExperiences>
      <Timeline />
    </SectionExperiences>
  );
};

export default Experiences;
