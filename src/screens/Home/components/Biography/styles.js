import styled from 'styled-components';
import { colors } from '~/styles';

export const Avatar = styled.img`
  height: 80px;
  width: 80px;
  margin-top: -50px;
  border-radius: 40px;
  box-shadow: 1px 1px 3px 1px ${colors.gray};
  touch-action: manipulation;
`;

export const BioContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 8px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 10px;
  align-self: center;
  justify-content: space-around;
`;

export const BioTextContainer = styled.div`
  text-align: center;
  position: relative;
  margin-left: 10px;
  margin-top: 3px;
`;

export const Name = styled.div`
  font-weight: bold;
  color: ${colors.darker};
  font-size: 18px;
  margin-top: 5px;
`;

export const Role = styled.div`
  color: ${colors.darker};
  font-size: 13px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const Location = styled.div`
  position: relative;
  font-size: 12px;
  color: #34abfa;
`;

export const Description = styled.div`
  color: ${colors.darker};
  font-size: 13px;
`;

export const SectionBio = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 55px 0px 0px;
  padding: 15px 15px 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  background-color: ${colors.white};
  align-items: center;
`;
