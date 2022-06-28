import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: ${colors.white};

  @media (min-width: 900px) {
    display: none;
  }

`;

export const SafeArea = styled.div`
  background-color: transparent;
  height: 0px;

  @media (max-width: 450px) {
    height: 30px;
  }
`;
