import styled from 'styled-components';
import { colors } from '~/styles';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: ${colors.secondary};
  justify-content: space-between;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 50px;
  max-width: 1750px;
  border-radius: 5px;
  background-color: ${colors.background};
  justify-content: space-around;
  /* justify-content: flex-end; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 1200px) {
    padding: 30px;
  }

  @media (min-width: 1630px) {
    padding: 80px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Line = styled.div`
  width: 95%;
  margin-top: 50px;
  margin-bottom: 30px;
  height: 1px;
  background-color: ${colors.light};
`;

export const Title = styled.text`
  font-size: 45px;
  color: ${colors.secondary};
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  /* border-bottom-style: solid; */
`;

export const Subtitle = styled.text`
  font-size: 25px;
  color: ${colors.dark};
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin-right: 60px;
  font-style: italic;
  margin-bottom: 20px;
  /* font-family: 'Montserrat', sans-serif; */
  /* border-bottom-style: solid; */
`;

export const Text = styled.text`
  font-size: 22px;
  color: ${colors.dark};
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  margin-right: 60px;
  /* font-family: 'Montserrat', sans-serif; */
  /* border-bottom-style: solid; */
`;
