import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IoPlayCircleOutline } from "react-icons/io5";

const Li = styled.li`
    color: ${({ theme }) => theme.textPlaceholder};
    line-height: normal;
    &:hover {
        color: ${({ theme }) => theme.color};
    }
    &:hover .icon-play-hover {
        display: flex;
    }
    &.active > a > .icon-play-hover {
        display: none;
    }
`;

const LiLink = styled(Link)`
    width: 100%;
    padding: 8px 25px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    /* text-transform: capitalize; */
    border-left: 3px solid transparent;
    display: flex;
    align-items: center;
    position: relative;
`;

const IconWrapper = styled.span`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    flex-shrink: 0;
`;

const IconPlayWrapper = styled(IconWrapper)`
    display: none;
    position: absolute;
    margin: 0;
    top: 50%;
    right: 17px;
    transform: translateY(-50%);
`;
const Text = styled.span`
    display: flex;
    align-items: center;
    line-height: normal;
`;

const SubNavItem = ({ icon, children, to = "/" }) => {
    return (
        <Li>
            <LiLink to={to} tabIndex={-1}>
                <IconWrapper>{icon}</IconWrapper>
                <Text>{children}</Text>
                <IconPlayWrapper className="icon-play-hover">
                    <IoPlayCircleOutline size={24} />
                </IconPlayWrapper>
            </LiLink>
        </Li>
    );
};

export default SubNavItem;
