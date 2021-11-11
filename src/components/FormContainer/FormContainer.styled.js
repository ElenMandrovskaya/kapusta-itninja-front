import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  width: 435px;
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 1279px) {
    margin-top: 50px;
  }

  @media (min-width: 1280px) {
    margin-left: 128px;
  }

  /* height: 535px; */
  padding: 50px 85px;
  @media (max-width: 768px) {
    padding: 40px 18px 53px;
  }
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  background-color: #fff;

  /* border: 1px solid red; */
  border-radius: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 767px) {
    filter: drop-shadow(5px 10px 20px rgba(170, 178, 197, 0.4));
  }
`;
