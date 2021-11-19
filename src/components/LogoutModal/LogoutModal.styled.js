import styled from '@emotion/styled';

export const ModalWrapper = styled.div`
  width: 310px;
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
`;

export const ModalLogoutP = styled.p`
  width: 281px;
  font-weight: 500;
  padding-bottom: 20px;
  color: var(--main-text-color);
`;

export const ModalLogoutButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
`;

export const Button = styled.button`
  width: 125px;
  height: 44px;
  font-weight: 700;
  color: var(--main-text-color);
  justify-content: center;
  text-transform: uppercase;
  border-radius: 16px;
  background-color: transparent;
  border: 2px solid #f5f6fb;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #fd812d;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
`;
