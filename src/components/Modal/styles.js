import styled, { keyframes } from 'styled-components';
import { colors } from '~/styles';
import { FEEDBACK_STATUS } from '~/context/FeedbackContext';

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

export const Background = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkTransparent};
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const Container = styled.div`
  display: flex;
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.white};
  width: 100%;
  margin: 0px 10px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s linear;
  transition: visibility 1s linear;
  padding: 20px 15px;
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Logo = styled.img`
  height: 70px;
  margin-top: -55px;
  width: 70px;
  border-radius: 40px;
  background-color: ${colors.white};
  touch-action: manipulation;
`;

export const Title = styled.div`
  font-size: 19px;
  padding-top: 10px;
  color: ${colors.darker};
`;

export const Content = styled.div`
  padding-bottom: 5px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0px 5px;
  color: ${colors.darker};
`;

export const Text = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: ${colors.dark};
`;

export const TagsContainer = styled.div`
  padding-top: 6px;
  font-size: 14px;
`;

export const Line = styled.div`
  height: 1px;
  margin: auto;
  margin-top: 10px;

  background-color: ${colors.lighter};
`;

export const Tag = styled.text`
  flex: 1;
  white-space: nowrap;
  border-radius: 10px;
  font-size: 12px;
  line-height: 28px;
  font-weight: 500;
  color: ${colors.lighter};
  padding: 4px 5px;
  background-color: ${({ color }) => color};
`;

export const Website = styled.a`
  margin-top: 20px;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  color: ${colors.primary};
`;

export const IconsContainer = styled.div`
  display: flex;
  flex: 1;
  width: 35%;
  margin-top: 15px;
  margin-bottom: 5px;
  align-self: center;
  justify-content: space-around;
`;
