import React from "react";
import { ModalWrapper, ModalContent, ModalLogoutP, Button, ModalLogoutButton } from  "../LogoutModal/LogoutModal.styled";

export const LogoutModal = () => {
    return (
            <ModalWrapper>
            <ModalContent>
                <ModalLogoutP>Вы действительно хотите выйти?</ModalLogoutP>
                <ModalLogoutButton>
                    <Button type="button">
                        Да
                    </Button>  
                    <Button  type="button">
                        Нет
                    </Button>
                </ModalLogoutButton>
            </ModalContent>
            </ModalWrapper>
    )
}