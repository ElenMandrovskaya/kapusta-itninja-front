import styled from '@emotion/styled';

import img from '../../images/kapustaMob.svg';
import imgTab from '../../images/kapustaTab.svg';

export const Icon = styled.svg`
background-image: url(${img});
background-repeat: no-repeat;

@media screen and (min-width: 768px) {
background-image: url(${imgTab});
background-position: center;
width: 100%
}
`;