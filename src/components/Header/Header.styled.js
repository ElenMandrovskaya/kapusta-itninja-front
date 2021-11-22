import styled from "@emotion/styled";
import img from "../../images/logout.svg";
import logo from "../../images/logo.svg";

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  background-color: #FFFFFF;
  height: 56px;
  /* margin: 0 auto; */
  padding: 0 19px;
  @media screen and (min-width: 768px) { 
     padding: 0 26px;
   }

  @media screen and (max-width: 767px){
  position: absolute;
  top: 0;
  }
`;

export const Logo = styled.a`
    background-image: url(${logo});
    width: 90px;
    height: 31px;
    background-repeat: no-repeat;  
`;

export const UserInfo = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

@media screen and  (min-width: 768px) {
    width: 212px;
}
`; 

// Avatar
export const AvatarUser = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  background-color: #F5F6FA;
  border-radius: 50%;
  margin-right: 12px;
  overflow: hidden;
`;

export const AvatarTxt = styled.div`
  margin: auto;
  `;

// имя 
export const UserName = styled.p`
display: none;

@media screen and  (min-width: 768px) {
  display: flex;
  color:  var(--main-text-color);
  cursor: pointer;
}
`;

// кнопка Выйти
export const Button = styled.button`
  display: flex;
  background: transparent;
  border: none;
`;
export const LogoutP = styled.p`
  display: none;

  @media screen and  (min-width: 768px) {
   display: flex;
     /* justify-content: space-between; */
   color:  var(--main-text-color);
 
   &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  }
`; 
// кнопка Выйти для мобилки
export const  LogoutSvg = styled.svg`
background-image: url(${img});
width: 16px;
height: 16px;

@media screen and  (min-width: 768px) {
display: none;
}
`;

export const Line = styled.div`
@media screen and (max-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 0px; 
    height: 36px; 
    float: left;   
    border: 1px solid #E0E5EB;
    }
`;



