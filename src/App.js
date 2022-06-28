import React from 'react';

import './App.css';
import ComputerContainer from './containers/Computer';
import DeviceContainer from './containers/Device';
import useWindowDimensions from './hooks/useDimensionsHook';
import withNavigationContext from './context/NavigationContext';
import withFeedbackContext from './context/FeedbackContext';
import withModalContext from './context/ModalContext';
import GlobalStyle from './styles/global';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <DeviceContainer />
      <ComputerContainer />
    </>
  );
};

export default withModalContext(
  withFeedbackContext(withNavigationContext(App))
);
