import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px 10px 0px;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.text`
  font-size: 22px;
  color: ${colors.secondary};
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 12px;
  border-bottom-style: solid;
  padding: 0 5px;
  border-bottom-width: 2px;
`;

// export const Title = styled.text`
//   font-size: 22px;
//   color: ${colors.dark};
//   font-weight: 700;
//   margin-top: 30px;
//   margin-bottom: 10px;
// `;

export const SafeArea = styled.div`
  background-color: transparent;
  height: 0px;
  width: 100%;

  @media (max-width: 450px) {
    height: 40px;
  }

  @media (orientation: landscape) {
    height: 40px;
  }
`;

export const Description = styled.text`
  font-size: 14px;
  color: ${colors.dark};
  font-weight: 300;
  margin: 0px 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ContactBackground = styled.img`
  height: 180px;
  border-radius: 90px;
  -webkit-filter: opacity(1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  touch-action: manipulation;
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 20px 15px;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

// justify-content: center;
