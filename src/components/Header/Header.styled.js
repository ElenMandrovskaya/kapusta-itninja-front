import styled from "@emotion/styled";
import img from '../../images/logout.svg';
import logo from '../../images/logo.svg';

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  background-color:   #FFFFFF;
  height: 56px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) { 
     width: 1280px;
     padding: 0 26px;
   } 
`;
export const UserInfo = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;

@media screen and  (min-width: 768px) {
    width: 212px;
}
`; 

export const UserName = styled.p`
display: none;

@media screen and  (min-width: 768px) {
  display: flex;
  color:  var(--main-text-color);
  cursor: pointer;
}
`;

export const UserLogout = styled.p`
  display: none;

  @media screen and  (min-width: 768px) {
   display: flex;
   text-decoration: underline;
   color:  var(--main-text-color);
   cursor: pointer;
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

export const AvatarUser = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  background-color: #F5F6FA;
  border-radius: 50%;
  margin-right: 12px;
`;

export const AvatarTxt = styled.div`
  margin: auto;
  `;

export const Logo = styled.svg`
    background-image: url(${logo});
    /* background-repeat: no-repeat; */  
`;

export const Icon = styled.svg`
background-image: url(${img});
width: 16px;
height: 16px;

@media screen and  (min-width: 768px) {
display: none;
}
`;