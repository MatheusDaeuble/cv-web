import React, { useRef } from 'react';
import { Container, TextAreaContainer, TextAreaInput, Label } from './styles';

const TextArea = ({ label, ...props }) => {
  const inputRef = useRef(null);

  return (
    <Container>
      <Label>{label}</Label>
      <TextAreaContainer>
        <TextAreaInput
          ref={inputRef}
          onClick={() => inputRef.current.focus()}
          {...props}
        />
      </TextAreaContainer>
    </Container>
  );
};

export default TextArea;
