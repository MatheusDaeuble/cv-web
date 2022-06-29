import styled, { keyframes } from 'styled-components';
import { colors } from '~/styles';
import { FEEDBACK_STATUS } from '~/context/FeedbackContext';

const getColor = status =>
  ({
    [FEEDBACK_STATUS.SUCCESS]: colors.success,
    [FEEDBACK_STATUS.ERROR]: colors.danger,
  }[status] || colors.darker);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  z-index: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 15px;
  bottom: 70px;
`;

export const BalloonContainer = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ status }) => getColor(status)};
  padding: 12px 0px;
  width: 100%;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 1s linear;
  transition: visibility 1s linear;
`;

export const IconContainer = styled.div`
  margin: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.white};
`;

export const Message = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.white};
`;
