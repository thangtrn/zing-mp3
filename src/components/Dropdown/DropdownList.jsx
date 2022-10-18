import React from "react";
import styled from "styled-components";
import DropdowmItem from "./DropdownItem";
import { footerData } from "../../constants";

const MenuContainer = styled.div`
    width: 240px;
    position: absolute;
    top: 50px;
    right: 0;
    font-size: 14px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.primaryBg};
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 20%);
    z-index: 101;
`;

const MenuList = styled.ul`
    width: 100%;
    padding: 10px 0;
`;

const Footer = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.borderPrimary};

    color: ${({ theme }) => theme.textSecondary};
`;

const DropdownList = ({ children, footer = false }) => {
    return (
        <MenuContainer>
            <MenuList>{children}</MenuList>
            {footer && (
                <Footer>
                    <MenuList>
                        {footerData.map((item, idx) => (
                            <DropdowmItem key={idx} iconLeft={item.icon}>
                                {item.text}
                            </DropdowmItem>
                        ))}
                    </MenuList>
                </Footer>
            )}
        </MenuContainer>
    );
};

export default DropdownList;
