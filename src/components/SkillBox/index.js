import React from 'react';
import { Box, Icon, Label } from './styles';

const SkillBox = ({ icon, label, margin = 0, labelSize=12 }) => (
  <Box margin={margin} >
    <a href='http://google.com.br'>
      <Icon src={icon} />
    </a>
    <Label labelSize={labelSize}>{label}</Label>
  </Box>
);

export default SkillBox;
