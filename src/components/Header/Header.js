import React from 'react';
import { ContainerHeader, UserInfo, UserName, UserLogout, AvatarUser, AvatarTxt, Line, Icon, Logo } from "./Header.styled";

export function Header () {
    return (
        <ContainerHeader>
            <Logo />
            <UserInfo>
                <AvatarUser>
                <AvatarTxt>U</AvatarTxt>
                </AvatarUser>
                <UserName>User Name</UserName>
                <Line> </Line>
                <UserLogout>Выйти</UserLogout>
                <Icon />
            </UserInfo>
        </ContainerHeader>      
    )
}