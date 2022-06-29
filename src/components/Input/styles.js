import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 0px 10px;
  margin: 6px 0;
  height: 55px;
  background-color: #fff;
  border-radius: 8px;
  border-width: 0.1px;
  border-color: ${({ hasError }) =>
    hasError ? colors.danger : colors.lighter};
  border-style: solid;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
`;

// box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
// rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

export const Combination = styled.div`
  display: flex;
  margin: auto;
  flex: 1;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: 13px;
  margin-bottom: 3px;
  color: ${({ hasError }) => (hasError ? colors.danger : colors.darker)};
  font-weight: 300;
`;

export const Error = styled.div`
  font-size: 11px;
  margin: 0 3px 3px;
  color: ${colors.danger};
  font-weight: 300;
`;

export const InputText = styled.input`
  display: flex;
  font-size: 13px;
  ::-webkit-input-placeholder {
    color: ${colors.light};
    font-weight: 400;
  }
  color: ${colors.darker};
  font-weight: 500;
  border-width: 0px;
`;

export const IconContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  height: 32px;
  width: 32px;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
