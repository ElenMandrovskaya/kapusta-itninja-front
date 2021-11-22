import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { authSelectors } from '../../redux/auth/auth-selectors';
import Modal from '../Modal/logoutModal';
import useModal from '../Modal/useModal';
import {
    ContainerHeader,
    UserInfo,
    UserName,
    Button,
    LogoutP,
    AvatarUser,
    Line,
    LogoutSvg,
    Logo,
} from './Header.styled';
import defaultAvatar from '../../images/avatar.jpeg';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUserName) || '';
    const { isShowingModal, toggle } = useModal();

    const logout = () => {
        dispatch(authOperations.signOut());
        toggle();
    };
    
    return (
        <ContainerHeader>
            <Logo href="/"/>
            {isLoggedIn && (
                <UserInfo>
                    <AvatarUser>
                        <img src={defaultAvatar} alt="Default Avatar" width="32"/>
                        {/* <AvatarTxt>U</AvatarTxt> */}
                    </AvatarUser>

                    {/* <UserName>User Name</UserName> */}
                    <UserName>{name}</UserName>
                    <Line> </Line>

                    <Button
                        type="button"
                        onClick={() => toggle()}
                    >
                        <LogoutP>Выйти</LogoutP>
                        <LogoutSvg />
                    </Button>
                    {isShowingModal && (
                        <Modal
                            text={'Вы уверены, что хотите выйти?'}
                            toAgree={logout}
                            onClose={toggle}
                        />
                    )}
                </UserInfo>
            )}
        </ContainerHeader>
    );
}
