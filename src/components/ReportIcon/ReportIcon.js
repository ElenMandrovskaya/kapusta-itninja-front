import React from 'react';
import Icons from '../../images/sprite.svg';
import { Icon } from './ReportIcon.styled';

function ReportIcon({ name, color, size }) {
  return (
    <Icon fill={color} width={size} height={size}>
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </Icon>
  );
}

export default ReportIcon;
