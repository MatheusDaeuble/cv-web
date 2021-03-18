import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  height: ${({ isMobile }) => (isMobile ? '70px' : '80px')};
  width: 100%;
`;
