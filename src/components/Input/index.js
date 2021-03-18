import React, { useRef } from 'react';
import { colors } from '~/styles';
import {
  InputContainer,
  InputText,
  Combination,
  IconContainer,
  Label,
  Error,
  Container,
} from './styles';

const Input = ({ label, icon: Icon, errorMessage = '', ...props }) => {
  const inputRef = useRef(null);

  return (
    <Container>
      <InputContainer
        onClick={() => inputRef.current.focus()}
        hasError={errorMessage}>
        <Combination>
          <Label hasError={errorMessage}>{label}</Label>
          <InputText ref={inputRef} {...props} />
        </Combination>
        {Icon && (
          <IconContainer>
            <Icon
              size={16}
              color={errorMessage ? colors.danger : colors.light}
            />
          </IconContainer>
        )}
      </InputContainer>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export default Input;
