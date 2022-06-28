import styled from 'styled-components';
import { colors } from '~/styles';

const ratioPhone = 347 / 696;
const ratioNotch = 156.75 / 696;

export const Phone = styled.div`
  margin-top: 24px;
  position: relative;
  display: flex;
  width: 162.5316091954023px;
  height: 550px;
  max-height: 696px;
  max-width: 347px;
  min-height: 550px;
  min-width: 296px;
  padding-top: 1px;
  background-color: #120d30;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const ScreenWrapper = styled.div`
  position: absolute;
  top: 13px;
  bottom: 13px;
  left: 13px;
  right: 13px;
  overflow: hidden;
  border-radius: 30px;
  background-color: ${({ headerColor }) => headerColor};
`;

export const Time = styled.div`
  position: absolute;
  z-index: 1;
  top: 7px;
  font-size: 10px;
  font-weight: bold;
  color: ${colors.black};
  right: 22px;
`;

export const Notch = styled.div`
  position: absolute;
  top: 12px;
  height: 22px;
  width: ${({ height }) => height * ratioNotch}px;
  max-width: 156.75px;
  min-width: 130px;
  background-color: #120d30;
  border-radius: 0 0 15px 15px;
`;

export const Header = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
`;

// OLD:

// 1 = 305.25
// x = 350
// x = 350/305.25

// export const Phone = styled.div`
//   position: relative;
//   width: 347px;
//   height: 696px;
//   padding-top: 1px;
//   background-color: #120d30;
//   border-radius: 40px;
// `;

// export const ScreenWrapper = styled.div`
//   position: relative;
//   height: 670px;
//   width: 322.5px;
//   margin-top: 11px;
//   margin-left: 12px;
//   overflow: hidden;
//   border-radius: 30px;
//   background-color: ${({ headerColor }) => headerColor};
// `;

// export const Time = styled.div`
//   position: absolute;
//   z-index: 1;
//   top: 7px;
//   font-size: 10px;
//   font-weight: bold;
//   color: ${colors.black};
//   right: 22px;
// `;

// export const Notch = styled.div`
//   position: absolute;
//   top: 12px;
//   left: 95px;
//   height: 22px;
//   width: 156.75px;
//   background-color: #120d30;
//   border-radius: 0 0 15px 15px;
// `;

// export const Header = styled.div`
//   position: absolute;
//   top: 0px;
//   width: 100%;
// `;
