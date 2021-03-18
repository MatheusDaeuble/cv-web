import React, { useMemo, useContext } from 'react';
import {
  BsCheck as iconSuccess,
  BsExclamation as iconError,
} from 'react-icons/bs';
import { FeedbackContext, FEEDBACK_STATUS } from '~/context/FeedbackContext';
import { Container, BalloonContainer, IconContainer, Message } from './styles';
import { colors } from '~/styles';

const Balloon = () => {
  const { icon, message, status, isVisible, clear } = useContext(
    FeedbackContext
  );
  const Icon = useMemo(() => {
    if (icon) return icon;
    return (
      {
        [FEEDBACK_STATUS.SUCCESS]: iconSuccess,
        [FEEDBACK_STATUS.ERROR]: iconError,
      }[status] || icon
    );
  }, [icon, status]);

  if (!message) return null;

  return (
    <Container>
      <BalloonContainer
        status={status}
        isVisible={isVisible}
        onAnimationEnd={() => !isVisible && clear()}>
        {Icon && (
          <IconContainer>
            <Icon color={colors.white} size={17} />
          </IconContainer>
        )}
        <Message>{message}</Message>
      </BalloonContainer>
    </Container>
  );
};

export default Balloon;
