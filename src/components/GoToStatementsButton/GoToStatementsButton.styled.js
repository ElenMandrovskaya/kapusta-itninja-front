import styled from '@emotion/styled';

export const Img = styled.img`
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }

    margin-left: 15px;
    width: 14px;
    height: 14px;
    margin-bottom: 40px;
`;
export const Para = styled.p`
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }

    transition: all linear 0.3s;
    &:hover {
        color: #555;
    }

    margin-bottom: 40px;
`;
