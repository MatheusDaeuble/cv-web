import styled from 'styled-components';
import { colors } from '~/styles';

export const Role = styled.div`
  position: relative;
  color: ${colors.darkest};
  font-size: 15px;
  margin-top: -4px;
  margin-right: 2px;
`;


export const Period = styled.div`
  color: ${colors.dark};
  font-size: 13px;
  font-weight: 500 !important;
  margin-bottom: 10px;
`;

export const ExperienceRow = styled.div`
  display: flex;
  flex: 1;
  margin-right: 32px;
  /* border-style: solid;
  border-width: 1px; */

  * {
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    line-height: 1.5 ;
  }

  p {
    margin-top: -2px;
    white-space: nowrap ;
    min-width: 75px;
    max-width: 75px;
    text-align: end;
    color: ${colors.darkest};
  }
`;

export const InfoContainer = styled.div`
  font-size: 12px;
  justify-content: space-around;
`;

export const IconContainer = styled.div`
  display: flex;
  color: ${colors.darker};
  font-size: 12px;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: 600;
  color: ${colors.dark};
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  margin-bottom: 24px;
`;

export const Icon = styled.div`
  min-height: 14px;
  min-width: 14px;
  max-height: 14px;
  max-width: 14px;
  margin: 0px 10px;
  border-radius: 15px;
  background-color: ${colors.secondary} ;
`;

export const Line = styled.div`
  display: flex;
  height: 100%;
  margin: 5px 10px;
  width: 5px;
  border-radius: 10px;
  background-color: ${colors.secondary};
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;
