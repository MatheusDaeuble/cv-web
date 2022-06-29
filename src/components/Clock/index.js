import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Time } from './styles';

const getTime = () => moment().format('LT');

const Clock = () => {
  // const [clock, setClock] = useState(getTime());

  // useEffect(() => {
  //   const interval = setInterval(() => setClock(getTime()), 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return <Time>9:00 AM</Time>;
};

export default Clock;
