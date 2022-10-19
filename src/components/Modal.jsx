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

const Modal = ({ children, isOpen, close }) => {
    if (!isOpen) return null;

    return (
        <Portal>
            <Overlay onClick={close}>{children}</Overlay>
        </Portal>
    );
};

export default Modal;
