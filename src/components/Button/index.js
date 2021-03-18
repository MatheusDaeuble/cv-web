import React, { useMemo, useCallback } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from '~/styles';
import { Container, Label } from './styles';

const Button = ({
  label,
  loading = false,
  disable = false,
  onClick,
  ...props
}) => {
  const actionDisabled = useMemo(() => loading || disable);
  return (
    <Container
      loading={loading}
      disable={disable}
      {...props}
      onClick={() => !actionDisabled && onClick()}>
      {loading ? (
        <ClipLoader size={17} color={colors.white} />
      ) : (
        <Label>{label}</Label>
      )}
    </Container>
  );
};

export default Button;
