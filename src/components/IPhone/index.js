import React, { useContext, useMemo } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { NavigationContext } from '~/context/NavigationContext';
import useDimensionsHook from '~/hooks/useDimensionsHook';
import Clock from '~/components/Clock';
import TabBar from '~/components/TabBar';
import { Phone, Notch, ScreenWrapper, Header } from './styles';

const Device = () => {
  const { ScreenComponent, header } = useContext(NavigationContext);
  const { height } = useDimensionsHook();

  const ratioH = useMemo(() => height / 1.1, [height]);

  return (
    <Phone height={ratioH}>
      <ScreenWrapper height={height / 4} headerColor={header.backgroundColor}>
        <Header />
        <Clock />
        <ScrollContainer className='screen' horizontal={false}>
          <ScreenComponent />
        </ScrollContainer>
        <TabBar />
      </ScreenWrapper>
      <Notch height={ratioH} />
    </Phone>
  );
};

export default Device;
