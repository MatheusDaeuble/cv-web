import styled from 'styled-components';
import { colors } from '~/styles';

export const Text = styled.text`
  font-size: 45px;
  font-weight: 700;
  color: ${colors.dark};
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 1200px) {
    font-size: 40px;
  }
`;

export const Word = styled.text`
  font-size: 40px;
  color: ${colors.secondary};
  font-family: 'Montserrat', sans-serif;
`;

export const Margin = styled.div`
  margin: 10px 35px;
`;
