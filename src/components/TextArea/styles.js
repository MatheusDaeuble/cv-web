import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextAreaContainer = styled.div`
  font-size: 16px;
  display: flex;
  width: 100%;
  margin: 6px 0;
  height: 110px;
  padding: 3px;
  border-style: none;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${colors.lighter};
  border-style: solid;
  background-color: ${colors.white};
  -webkit-filter: opacity(1);
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
`;

export const TextAreaInput = styled.textarea`
  font-size: 13px;
  display: flex;
  width: 100%;
  padding: 10px;
  border-style: none;
  ::-webkit-input-placeholder {
    color: ${colors.light};
    font-weight: 400;
  }
  color: ${colors.darker};
  font-family: 'Roboto';
  font-weight: 350;
`;

export const Label = styled.div`
  font-size: 13px;
  font-weight: 300;
  margin: 3px;
  color: ${colors.darker};
`;
