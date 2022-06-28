import styled from 'styled-components';
import { colors } from '~/styles';

const TAB_BAR_HEIGHT = 50;

export const Container = styled.div`
  display: flex;
  position: ${({ isMobile }) => (isMobile ? 'fixed' : 'absolute')};
  bottom: 0px;
  width: 100%;
  justify-content: space-around;
`;

export const Box = styled.div`
  display: flex;
  -webkit-filter: opacity(1);
  box-shadow: 0px 0px 3px 0px ${colors.gray};
  width: 100%;
  height: ${TAB_BAR_HEIGHT}px;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  background-color: ${colors.white};
  padding: 0px;
  margin: 0px;
`;

export const Margin = styled.div`
  height: 120px;
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 3px;
  touch-action: manipulation;
`;

export const Label = styled.div`
  font-size: 11px;
  color: ${colors.darker};
`;
