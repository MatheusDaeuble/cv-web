import styled from 'styled-components';
import { colors } from '~/styles';

export const CollegeContainer = styled.div`
  display: flex;
  margin-top: 18px;
  
  .title {
    margin-top: -6px;
  }

  * {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;      
  }

  .college {
    font-size: 16px ;
    margin-top: -3px;

  }

  .course {
    font-size: 14px ;
    color: ${colors.dark};
    line-height: 28px;
    margin-top: -4px;
  }

  .status {
    font-size: 12px;
  }

  .content {
    display: flex;
  }

  .period {

  }

  .city {
    color: ${colors.secondary};
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 16px; */
  width: 100%;
  height: min-content;
  /* height: 100%; */
  /* width: ${2480 * 0.4}px; */
  background-color: ${colors.secondary};
  justify-content: space-between;

  .browser-frame__top {
    padding: 0px 20px 0px 20px;
  }

  .browser-frame {
    background: #e9e9ea;
    padding: 2px;
    padding-bottom: 0px;
    margin-top: -2px;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 4px 26px 0px 26px;
  max-width: 1750px;
  border-radius: 5px;
  flex-direction: column;
  background-color: ${colors.white};
  background: -webkit-linear-gradient(
    top,
    ${colors.secondary} 11%,
    white 10%,
    white 50%
  );

  justify-content: space-around;
  /* justify-content: flex-end; */
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 100%;
  /* margin-top: 50px; */
  margin-top: 18px;
  margin-bottom: 18px;
  height: 1px;
  background-color: ${colors.light};
`;

export const Title = styled.p`
  margin-right: 42px;
  font-weight: 600;
  color: ${colors.dark};
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ProfileContainer = styled.div`
  padding: 14px;
  position: relative;
  margin-top: 12px;
  margin-bottom: 22px;
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background-color: white;
    padding: 2px;
    border-style: solid;
    border-color: ${colors.secondary};
    border-width: 3px;
  }

  .line {
    height: 1px;
    margin: 8px 0px;
    background: ${colors.secondary};
    width: 100%;
  }

  * {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  .about-me {
    
    margin-left: 24px;
    .title {
      font-size: 22px;
      color: ${colors.darker};
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      b {
        font-weight: 600 !important;
        font-family: 'Poppins', sans-serif;
        color: ${colors.secondary};
      }
    }

    .social-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-right: 8px;
      }
    }

    .description {
      margin-top: 12px;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      color: ${colors.dark};
    }
  }

  .header {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 16px;
  }

  .name {
    margin-top: 12px;
    font-size: 20px;
    white-space: nowrap;
    color: ${colors.dark};
    font-weight: bold;
  }

  .role {
    color: ${colors.darker};
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    /* margin-top: 4px; */
  }
`;

export const Subtitle = styled.span`
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

export const Text = styled.span`
  font-size: 22px;
  color: ${colors.dark};
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  margin-right: 60px;
  /* font-family: 'Montserrat', sans-serif; */
  /* border-bottom-style: solid; */
`;


export const ProfileContainerOld = styled.div`
  padding: 16px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 32px;
  display: flex;
  background: white;
  border-radius: 10px;

  img {
    margin-top: -${180 * 0.3}px;
    height: 180px;
    border-radius: 10px;
  }

  * {
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  .about-me {
    .title {
      font-size: 22px;
      color: ${colors.darker};
      margin-bottom: 12px;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    .description {
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      color: ${colors.dark};
    }
  }

  .header {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 16px;
  }

  .name {
    margin-top: 12px;
    font-size: 20px;
    white-space: nowrap;
    color: ${colors.dark};
    font-weight: bold;
  }

  .role {
    color: ${colors.darker};
    font-size: 16px;
    /* margin-top: 4px; */
  }
`;