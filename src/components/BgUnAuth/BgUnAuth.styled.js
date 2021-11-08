import styled from '@emotion/styled';

import img from '../../images/kapustaMob.svg';
import imgTab from '../../images/kapustaTab.svg';
import imgBot from '../../images/kapustaNob-bottom.svg';
import imgTabBot from '../../images/kapustaTab-bottom.svg';


export const BgIcon = styled.svg`
position: fixed;
z-index: -1;
top: 104px;
right: 0;
background-image: url(${img});
background-repeat: no-repeat;
width: 49px;
height: 89px;
@media screen and (min-width: 768px) {
top: 84px;
right: 0;
background-image: url(${imgTab});
background-repeat: repeat;
width: 100%;
height: 232px;
}
@media screen and (min-width: 1280px) {
}
`;
export const BgIconBottom = styled.svg`
position: fixed;
z-index: -1;
bottom: -3px;
left: 10%;
background-image: url(${imgBot});
background-repeat: no-repeat;
width: 83px;
height: 89px;
@media screen and (min-width: 768px) {
background-image: url(${imgTabBot});
width: 183px;
height: 142px;
bottom: 56px;
left: 13%;
@media screen and (min-width: 1280px) {
bottom: 50px;
left: 17%;
}
}
`;


