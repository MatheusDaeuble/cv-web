import React, { useState } from 'react';

export const FEEDBACK_STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const FeedbackContext = React.createContext({
  icon: undefined,
  message: '',
  status: undefined,
  showFeedback: () => {},
  isVisible: false,
  // setIcon: () => {},
  // setMessage: () => {},
  // setStatus: () => {},
});

const useFeedback = () => {
  const [icon, setIcon] = useState(undefined);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false);

  const clear = () => {
    setStatus(undefined);
    setIcon(undefined);
    setMessage('');
    setIsVisible(false);
  };

  const showFeedback = ({
    icon: iconParam = undefined,
    message: messageParam = '',
    status: statusParam = undefined,
  }) => {
    setStatus(statusParam);
    setIcon(iconParam);
    setMessage(messageParam);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2500);
  };

  return {
    icon,
    message,
    status,
    showFeedback,
    isVisible,
    setIsVisible,
    clear,
  };
};

const withFeedbackContext = WrappedComponent => {
  const WrapperComponent = props => {
    const navigator = useFeedback();
    return (
      <FeedbackContext.Provider value={navigator}>
        <WrappedComponent {...props} />
      </FeedbackContext.Provider>
    );
  };
  return WrapperComponent;
};

export default withFeedbackContext;
