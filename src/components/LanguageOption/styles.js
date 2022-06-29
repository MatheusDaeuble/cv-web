import styled from 'styled-components';
import { colors } from '~/styles';

const shadow = `
  -webkit-filter: opacity(1);
  box-shadow: rgba(14, 30, 37, 0.18) 0px 2px 4px 0px,
  rgba(14, 30, 37, 0.08) 0px 2px 16px 0px
  `;

export const Container = styled.div`
  top: 5px;
  left: 15px;
  position: absolute;
`;

export const Flag = styled.img`
  width: 22px;
  margin: 0;
  touch-action: manipulation;
`;

export const ContainerList = styled.div`
  padding: 2px 7px;
  margin: 5px 0;
  border-radius: 5px;
  background-color: ${colors.white};
  &:first-child {
    padding-top: 10px;
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  width: 30px;
  align-items: center;
  padding: 4px;
  border-radius: 5px;
  background: ${({ isOpen }) => (isOpen ? colors.white : colors.white)};
  touch-action: manipulation;
  ${shadow}
`;

export const ListItem = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

export const Label = styled.text`
  font-weight: 400;
  margin-left: 5px;
  font-size: 14px;
  color: ${colors.darker};
`;
