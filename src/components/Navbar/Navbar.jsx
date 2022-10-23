import React from "react";
import styled from "styled-components";

import { BsMusicNoteList } from "react-icons/bs";
import {
    IoDiscOutline,
    IoRadioOutline,
    IoNewspaperOutline,
} from "react-icons/io5";
import { GiChart } from "react-icons/gi";

import NavItem from "./NavItem";
import routesPath from "../../routes/routesPath";
import liveTag from "../../assets/images/live-tag.svg";

const Container = styled.ul`
    width: 100%;
    margin-bottom: 15px;
`;

const Img = styled.img`
    display: inline-block;
    margin-left: 8px;
    width: fit-content;
`;

const Navbar = () => {
    return (
        <Container>
            <NavItem
                to={routesPath.myMusic}
                icon={<BsMusicNoteList size={20} />}
            >
                Cá Nhân
            </NavItem>
            <NavItem to={routesPath.home} icon={<IoDiscOutline size={22} />}>
                Khám Phá
            </NavItem>
            <NavItem to={routesPath.zingChart} icon={<GiChart size={20} />}>
                #zingchart
            </NavItem>
            <NavItem to={routesPath.radio} icon={<IoRadioOutline size={22} />}>
                Radio <Img src={liveTag} alt="live-tag" />
            </NavItem>
            <NavItem
                to={routesPath.follow}
                icon={<IoNewspaperOutline size={22} />}
            >
                Theo Dõi
            </NavItem>
        </Container>
    );
};

export default Navbar;
