import styled from 'styled-components';
import { colors } from '~/styles';

export const Box = styled.div`
  -webkit-filter: opacity(1);
  box-shadow: rgba(14, 30, 37, 0.18) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.08) 0px 2px 16px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 67px;
  min-height: 67px;
  border-radius: 10px;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 6px;
  margin: ${props => `${props.margin}px`};
`;

export const Icon = styled.img`
  touch-action: manipulation;
  height: 32px;
  width: 32px;
  border-radius: 4px;
`;

export const Label = styled.div`
  font-size: 12px;
  color: ${colors.darker};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`;
