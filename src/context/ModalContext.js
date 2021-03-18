import React, { useState } from 'react';
import { COMPANY } from '~/components/Modal/hooks/useCompany';

export const ModalContext = React.createContext({
  setIsVisible: () => {},
  isVisible: false,
  data: COMPANY.SKILOPAY,
  openModal: () => {},
});

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(COMPANY.SKILOPAY);

  const openModal = content => {
    setData(content);
    setIsVisible(true);
  };

  return {
    isVisible,
    setIsVisible,
    data,
    openModal,
  };
};

const withModalContext = WrappedComponent => {
  const WrapperComponent = props => {
    const navigator = useModal();
    return (
      <ModalContext.Provider value={navigator}>
        <WrappedComponent {...props} />
      </ModalContext.Provider>
    );
  };
  return WrapperComponent;
};

export default withModalContext;
