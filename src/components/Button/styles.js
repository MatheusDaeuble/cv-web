import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 0;
  width: 100%;
  height: 43px;
  background-color: ${({ disable }) =>
    disable ? colors.light : colors.secondary};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
`;

export const Label = styled.div`
  font-size: 13px;
  margin-bottom: 3px;
  font-weight: bold;
  color: ${colors.white};
`;
