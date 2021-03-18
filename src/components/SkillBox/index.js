import React from 'react';
import { Box, Icon, Label } from './styles';

const SkillBox = ({ icon, label, margin = 0 }) => (
  <Box margin={margin}>
    <a href='http://google.com.br'>
      <Icon src={icon} />
    </a>
    <Label>{label}</Label>
  </Box>
);

export default SkillBox;
