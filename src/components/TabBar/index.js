import React, { useContext, useState } from 'react';
import {
  BsPerson,
  BsChat,
  BsFillChatFill,
  BsPersonFill,
  BsCheck as iconSuccess,
} from 'react-icons/bs';
import Balloon from '~/components/Balloon';
import Modal from '~/components/Modal';
import useWindowDimensions from '~/hooks/useDimensionsHook';
import { NavigationContext } from '~/context/NavigationContext';
import { Box, Margin, Container } from './styles';

const TabBar = ({ margin = 0, isVisible = true }) => {
  const { screen, navigate } = useContext(NavigationContext);
  const { width } = useWindowDimensions();
  const isMobile = width < 880;

  const [isModalVisible, setModalIsVisible] = useState(true);

  const options = [
    {
      [true]: <BsPersonFill />,
      [false]: <BsPerson />,
    },
    {
      [true]: <BsFillChatFill />,
      [false]: <BsChat />,
    },
  ];

  const renderIcons = () => {
    return options.map((item, index) => (
      <div
      onClick={()=>navigate(index)}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {React.cloneElement(item[index === screen], {
          key: index.toString(),
          style: { cursor: 'pointer'}
        })}
      </div>
    ));
  };

  if (!isVisible) return null;

  return (
    <>
      <Modal isVisible={isModalVisible} setIsVisible={setModalIsVisible} />
      <Balloon message='E-mail enviado com sucesso!' icon={iconSuccess} />
      <Container isMobile={isMobile}>
        <Box margin={margin}>{renderIcons()}</Box>
      </Container>
    </>
  );
};

export default TabBar;
