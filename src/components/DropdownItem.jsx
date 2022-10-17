import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.li``;

const MenuItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 17px;
    transition: all 0.2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.alphaBg};
        color: ${({ theme }) => theme.linkTextHover};
    }
`;

const Icon = styled.span`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const Text = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-arrow-right {
        position: relative;
        right: -15px;
    }
`;

const DropdownItem = ({ iconLeft = null, iconRight = null, children }) => {
    return (
        <Container>
            <MenuItem>
                <Icon>{iconLeft}</Icon>
                <Text>
                    {children}
                    {iconRight && (
                        <Icon className="icon-arrow-right">{iconRight}</Icon>
                    )}
                </Text>
            </MenuItem>
        </Container>
    );
};

export default memo(DropdownItem);
