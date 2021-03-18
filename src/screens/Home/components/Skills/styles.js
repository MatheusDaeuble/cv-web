import styled from 'styled-components';
import { colors } from '~/styles';

export const TitleSkills = styled.div`
  color: ${colors.darker};
  font-weight: bold;
  margin: 10px 10px 5px;
  font-size: 14.5px;
`;

export const SectionSkills = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px -5px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  margin-left: -10px;
  margin-right: -15px;
`;
