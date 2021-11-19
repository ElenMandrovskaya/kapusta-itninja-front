import styled from '@emotion/styled';

export const ReportsPageHeader = styled.div`
    display: flex;
    margin-top: 40px;
    @media screen and (max-width: 320px) {
        display: block;
        margin-top: 15px;
    }
    @media screen and (min-width: 1280px) {
        justify-content: space-between;
    }
`;
export const ReportsPageForMobile = styled.div`
    @media screen and (max-width: 320px) {
        margin-top: 10px;
        display: flex;
        flex-direction: column-reverse;
    }
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`;
