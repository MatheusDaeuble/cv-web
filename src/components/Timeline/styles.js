import styled from 'styled-components';
import { colors } from '~/styles';

export const Role = styled.div`
  color: ${colors.darker};
  font-size: 15px;
`;

export const Company = styled.div`
  color: ${colors.darker};
  font-size: 15px;
  margin: 3px 0;
`;

export const Period = styled.div`
  color: ${colors.regular};
  font-size: 13px;
`;

export const ExperienceRow = styled.div`
  display: flex;
  flex: 1;
`;

export const InfoContainer = styled.div`
  font-size: 12px;
  margin-left: 30px;
  justify-content: space-around;
`;

export const Icon = styled.img`
  height: 31px;
  width: 31px;
  border-radius: 16px;
  touch-action: manipulation;
`;

export const IconContainer = styled.div`
  display: flex;
  color: ${colors.darker};
  font-size: 12px;
  align-items: center;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  height: 30px;
  margin: 5px 0px;
  width: 0.5px;
  background-color: ${colors.gray};
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;
