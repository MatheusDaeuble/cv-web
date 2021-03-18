import React, { useState, useMemo } from 'react';
import HomeScreen from '~/screens/Home';
import ContactScreen from '~/screens/Contact';
import { colors } from '~/styles';

export const SCREENS = {
  HOME: 0,
  Contact: 1,
};

export const NavigationContext = React.createContext({
  screen: SCREENS.Contact,
  navigate: () => {},
  ScreenComponent: null,
  header: {
    backgroundColor: colors.white,
  },
  tabBar: {
    isVisible: true,
    setIsVisible: () => {},
  },
});

const useNavigation = () => {
  const [screen, navigate] = useState(SCREENS.HOME);
  const [tabBarIsVisible, setTabBarIsVisible] = useState(true);

  const ScreenComponent = useMemo(
    () =>
      ({
        [SCREENS.HOME]: HomeScreen,
        [SCREENS.Contact]: ContactScreen,
      }[screen] || HomeScreen),
    [screen]
  );

  const headerColor = useMemo(
    () =>
      ({
        [SCREENS.HOME]: colors.secondary,
        [SCREENS.Contact]: colors.white,
      }[screen] || colors.white),
    [screen]
  );

  return {
    screen,
    navigate,
    ScreenComponent,
    header: {
      backgroundColor: headerColor,
    },
    tabBar: { isVisible: tabBarIsVisible, setIsVisible: setTabBarIsVisible },
  };
};

const withNavigationContext = WrappedComponent => {
  const WrapperComponent = props => {
    const navigator = useNavigation();
    return (
      <NavigationContext.Provider value={navigator}>
        <WrappedComponent {...props} />
      </NavigationContext.Provider>
    );
  };
  return WrapperComponent;
};

export default withNavigationContext;
