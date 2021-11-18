import styled from "@emotion/styled";

export const CategoryContainer = styled.div`
position: relative;
  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Input = styled.input`
  position: relative;
  border-top: 2px solid var(--table-color);
  border-right: none;
  border-bottom: 2px solid var(--table-color);
  border-left: none;
  outline: none;
  padding-left: 21px;
  &::placeholder {
    color: #C7CCDC;
  }

  &:focus + .arrow {
    transform: rotate(-180deg);
  }

  @media screen and (max-width: 767px) {
    width: 282px;
    height: 44px;
    border: 2px solid #fff;
    border-top: none;
    border-radius: 0px 0px 16px 16px;
    background-color: inherit;
  }

  @media screen and (min-width: 768px) {
    width: 171px;
    height: 44px;
  }

  @media screen and (min-width: 1280px) {
    width: 188px;
  }
`;

export const CategoryList = styled.ul`
  position: absolute;
  left: 0px;
  top: 100%;
  border: none;
  outline: none;
  z-index: 100;
  color: var(--placeholder-text-color);
  background-color: #fff;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  
@media screen and (min-width: 768px) {
   width: 171px;
  }
@media screen and (min-width: 1280px) {
    width: 188px;
  }
`;

export const CategoryItem = styled.li``;

export const CategoryLabel = styled.label`
  padding: 9px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: var(--placeholder-text-color);
  height: 32px;
  width: 188px;
  display: inline-block;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--table-color);
    color: var(--black-text-color);
  }
`;

export const RadioButton = styled.input`
`;

export const ArrowDown = styled.span`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 12px;
  height: 8px;
  /* color: var(--main-text-color); */
  `;

export const ArrowUp = styled.span`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 12px;
  height: 8px;
  /* color: var(--main-text-color); */
  `;