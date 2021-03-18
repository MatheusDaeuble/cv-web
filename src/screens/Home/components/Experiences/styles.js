import styled from 'styled-components';
import { colors } from '~/styles';

export const TitleExperiences = styled.div`
  color: ${colors.darker};
  font-weight: bold;
  margin: 20px 0px;
  font-size: 14.5px;
`;

export const SectionExperiences = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 0px 15px;
`;
