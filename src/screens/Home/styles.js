import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  padding: 0 10px;
  background-color: ${colors.white};
  flex-direction: column;
  background: -webkit-linear-gradient(
    top,
    ${colors.secondary} 16.5%,
    white 10%,
    white 50%
  );
`;

export const SafeArea = styled.div`
  background-color: transparent;
  height: 30px;
  width: 100%;

  @media (orientation: portrait) {
    height: 30px;
  }

  @media (max-width: 450px) {
    height: 60px;
  }
`;
