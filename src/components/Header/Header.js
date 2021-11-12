import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as authOperations from '../../redux/auth/auth-operaions';
// import { authSelectors } from '../../redux/auth/auth-selectors'
import { ContainerHeader, UserInfo, UserName, Button, LogoutP, AvatarUser, AvatarTxt, Line, LogoutSvg , Logo } from "./Header.styled";
import defaultAvatar from '../../images/avatar.png';


export function Header () {
    // const dispatch = useDispatch();
    // const name = useSelector(authSelectors.getUserName);
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <ContainerHeader>         
            <Logo />
            {/* {isLoggedIn  && (  */}
            <UserInfo>                    
                <AvatarUser>   
                    <img
                    src={defaultAvatar}
                    alt="Default Avatar"
                    width="32"
                />              
                {/* <AvatarTxt>U</AvatarTxt> */}
                </AvatarUser>

                <UserName>User Name</UserName>
                {/* <UserName>{name}</UserName> */}
                <Line> </Line>

               <Button>
               {/* onClick={() => dispatch(authOperations.logOut())} */}
                    <LogoutP>Выйти</LogoutP>
                    <LogoutSvg />
               </Button>

            </UserInfo>
       {/* )} */}
        </ContainerHeader>      
    )
}