import React from "react";
import styled from "styled-components";

import Portal from "./Portal";

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: ${({ theme }) => theme.darkAlpha50};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;
const Container = styled.div`
    max-height: 100%;
    border-radius: 8px;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.primaryBg};
`;

const Modal = ({ children, isOpen, close }) => {
    if (!isOpen) return null;

    return (
        <Portal isOpen={isOpen}>
            <Overlay onClick={close}>
                <Container>{children}</Container>
            </Overlay>
        </Portal>
    );
};

export default Modal;
