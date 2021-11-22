import styled from '@emotion/styled';

export const ReportsPageHeader = styled.div`
    @media screen and (min-width: 768px) {
        grid-template-columns: 18% 77%;
        display: grid;
        margin-top: 40px;
    }
    @media screen and (min-width: 1280px) {
        grid-template-columns: 18% 82%;
        display: grid;
        margin-top: 40px;
    }

    display: block;
    margin-top: 15px;
`;
export const ReportsPageForMobile = styled.div`
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    display: flex;
    align-items: center;
    margin-top: 10px;
    flex-direction: column-reverse;
`;
