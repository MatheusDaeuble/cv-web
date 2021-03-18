import React, { useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { COMPANY } from '~/components/Modal/hooks/useCompany';
import { ModalContext } from '~/context/ModalContext';
import {
  Role,
  Company,
  Period,
  ExperienceRow,
  InfoContainer,
  IconContainer,
  Icon,
  Line,
} from './styles';

import logos from '~/assets/logos';

const Timeline = () => {
  const { t } = useTranslation();

  const { openModal } = useContext(ModalContext);

  const experiences = useMemo(
    () => [
      {
        id: COMPANY.SKILOPAY,
        role: 'Mobile Development',
        company: 'Skilopay',
        period: `Jan 2020 - ${t('present')}`,
        icon: logos.skilopay,
      },
      {
        id: COMPANY.NW_SOFT,
        role: 'Mobile Development',
        company: 'NwSoft',
        period: `${t('oct')} 2019 - Jan 2020`,
        icon: logos.nwSoft,
      },
      {
        id: COMPANY.ITEGRA,
        role: 'Full-stack Development',
        company: 'Itegra',
        period: `Jul 2017 - ${t('feb')} 2019`,
        icon: logos.itegra,
      },
      {
        id: COMPANY.ACENS,
        role: t('projectManager'),
        company: 'Acens',
        period: 'Jun 2016 - Jul 2017',
        icon: logos.acens,
      },
    ],
    [t]
  );
  return (
    <>
      {experiences.map(({ role, company, period, icon, id }, index) => {
        return (
          <ExperienceRow onClick={() => openModal(id)} key={index.toString()}>
            <IconContainer>
              <Icon src={icon} />
              <Line isVisible={index < experiences.length - 1} />
            </IconContainer>
            <InfoContainer>
              <Role>{role}</Role>
              <Company>{company}</Company>
              <Period>{period}</Period>
            </InfoContainer>
          </ExperienceRow>
        );
      })}
    </>
  );
};

export default Timeline;
