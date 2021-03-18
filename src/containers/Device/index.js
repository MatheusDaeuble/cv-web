import React, { useContext, useEffect, useRef } from 'react';
import { BsCheck as iconSuccess } from 'react-icons/bs';
import Balloon from '~/components/Balloon';
import { NavigationContext } from '~/context/NavigationContext';
import TabBar from '~/components/TabBar';
import { Container } from './styles';

const DeviceContainer = () => {
  const {
    ScreenComponent,
    tabBar: { isVisible },
  } = useContext(NavigationContext);

  const scrollInto = useRef(null);

  useEffect(() => {
    if (scrollInto && scrollInto.current) scrollInto.current.scrollIntoView();
  }, []);

  return (
    <Container>
      <ScreenComponent ref={scrollInto} />
      <TabBar isVisible={isVisible} />
      {/* <Balloon message='E-mail enviado com sucesso!' icon={iconSuccess} /> */}
    </Container>
  );
};

export default DeviceContainer;
