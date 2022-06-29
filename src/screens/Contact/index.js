import React, { useState, useMemo, useContext } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { BsPerson, BsEnvelope as EmailIcon } from 'react-icons/bs';
import { FeedbackContext, FEEDBACK_STATUS } from '~/context/FeedbackContext';
import ContactBg from '~/assets/bg.png';
import { isValidEmail, isValidName } from '~/util/validate';
// import useLocalStorage from '~/hooks/useLocalStorage';
import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';
import SafeArea from '~/components/SafeArea';

import { Container, ContactBackground, Title, Description } from './styles';

const USER_ID = 'user_ZVi8gqq93gsTEaetLVMWW';
const TEMPLATE_ID = 'template_fw35uww';
const SERVICE_ID = 'service_1kmrtc2';

const emptyInput = { value: '', error: '' };

const ContactScreen = () => {
  const { showFeedback } = useContext(FeedbackContext);

  const { t } = useTranslation();

  const [name, setName] = useState(emptyInput);
  const [email, setEmail] = useState(emptyInput);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validateName = () => {
    const isValid = isValidName(name.value);
    if (!isValid) setName({ ...name, error: t('invalidName') });
    return isValid;
  };

  const validateEmail = () => {
    const isValid = isValidEmail(email.value);
    if (!isValid) setEmail({ ...email, error: t('invalidEmail') });
    return isValid;
  };

  // eslint-disable-next-line no-bitwise
  const validateForm = () => validateEmail();

  const disableButton = useMemo(
    () => name.error || email.error || !name.value || !email.value || !message,
    [name, email, message]
  );

  const clearForm = () => {
    setName(emptyInput);
    setEmail(emptyInput);
    setMessage('');
  };

  const sendEmail = () => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, { from: email.value, message }, USER_ID)
      .then(
        () => {
          showFeedback({
            message: t('feedback-email-positive'),
            status: FEEDBACK_STATUS.SUCCESS,
          });
          clearForm();
        },
        () =>
          showFeedback({
            message: t('feedback-email-negative'),
            status: FEEDBACK_STATUS.ERROR,
          })
      )
      .finally(() => setLoading(false));
  };

  const onButtonsPress = () => {
    setLoading(true);
    if (validateForm()) sendEmail();
    else setLoading(false);
  };

  return (
    <>
      <Container>
        <ContactBackground src={ContactBg} />
        <Title>{t('contact')}</Title>
        <Description>{t('contact-description')}</Description>
        <Input
          label={t('name')}
          value={name.value}
          errorMessage={name.error}
          placeholder='Matheus Daeuble'
          // onBlur={validateName}
          onChange={({ target: { value } }) => setName({ value, error: '' })}
          icon={BsPerson}
        />
        <Input
          label='Email'
          value={email.value}
          errorMessage={email.error}
          placeholder='matheusdaeuble@gmail.com'
          // onBlur={validateEmail}
          onChange={({ target: { value } }) => setEmail({ value, error: '' })}
          icon={EmailIcon}
        />
        <TextArea
          label={`${t('message')}:`}
          value={message}
          placeholder={`${t('message')}...`}
          onChange={e => setMessage(e.target.value)}
        />
        <Button
          label={t('send')}
          onClick={onButtonsPress}
          loading={loading}
          disable={loading || !name.value || !email.value || !message}
        />
        <SafeArea />
      </Container>
    </>
  );
};

export default ContactScreen;
