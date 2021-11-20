import styled from '@emotion/styled';
import img from '../../images/bg-img.svg';
import imgHover from '../../images/bg-img-hover.svg';

export const Icon = styled.svg`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 59px 46px;
    transition: all linear 0.3s;
    &:hover {
        background-image: url(${imgHover});
        fill: var(--accent-color);
    }
`;
