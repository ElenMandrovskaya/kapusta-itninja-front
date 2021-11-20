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
import defaultAvatar from '../../images/avatar.png';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUserName) || '';

    const logout = () => dispatch(authOperations.signOut());
    const { isShowingModal, toggle } = useModal();
    return (
        <ContainerHeader>
            <Logo />
            {isLoggedIn && (
                <UserInfo>
                    <AvatarUser>
                        <img src={defaultAvatar} alt="Default Avatar" width="32" />
                        {/* <AvatarTxt>U</AvatarTxt> */}
                    </AvatarUser>

                    {/* <UserName>User Name</UserName> */}
                    <UserName>{name}</UserName>
                    <Line> </Line>

                    <Button
                        type="button"
                        // onClick={() => dispatch(authOperations.signOut())}
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
