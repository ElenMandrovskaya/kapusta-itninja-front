import styled from '@emotion/styled';

export const CategoryItem = styled.li`
    border-bottom: 1px solid #e0e5eb;
    flex-basis: 80px;
    align-items: stretch;
    padding: 5px;
    text-align: center;

    @media screen and (min-width: 768px) {
        border-bottom: none;
        flex-basis: 93px;
        padding: 0;
        margin: 5px;
        margin-bottom: 15px;
    }
`;

export const Text = styled.p`
    padding-top: 10px;
    padding-bottom: 10px;

    color: var(--main-text-color);
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`;
