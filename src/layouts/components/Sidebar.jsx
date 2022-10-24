import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
    IoDiscOutline,
    IoRadioOutline,
    IoNewspaperOutline,
} from "react-icons/io5";
import {
    BsMusicNoteBeamed,
    BsMusicNoteList,
    BsTabletLandscape,
} from "react-icons/bs";
import { VscPieChart } from "react-icons/vsc";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineStar } from "react-icons/hi";

import { CustomScrollBar } from "../../components";
import { Navbar, NavItem } from "../../components/Navbar";
import { Horizontal } from "../../styles";
import routesPath from "../../routes/routesPath";
import liveTag from "../../assets/images/live-tag.svg";

const Container = styled.div`
    height: ${({ theme }) => `calc(100% - ${theme.playingBarHeight})`};
    width: ${({ theme }) => theme.sidebarWidth};
    background-color: ${({ theme }) => theme.sibarBg};
    display: flex;
    flex-direction: column;
`;

const BrandContainer = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.headerHeight};
    display: flex;
    align-items: center;
    padding: 0 25px 0 28px;
    a {
        display: inline-block;
        line-height: 0;
    }
`;

const Brand = styled.div`
    display: inline-block;
    width: 120px;
    height: 40px;
    background-image: ${({ theme }) => theme.logo};
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    line-height: 0;

    &:hover {
        filter: brightness(0.9);
    }
`;

const Img = styled.img`
    display: inline-block;
    margin-left: 8px;
    width: fit-content;
`;
const SidebarScroll = styled.div`
    flex: 1;
    .scroll-sidebar-view {
        margin-top: 10px;
    }
    .nav-scroll {
        padding-top: 5px;
        margin-bottom: 0;
    }
`;

const Playlist = styled.div`
    height: 54px;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.borderPrimary};
`;

const VipBox = styled.div`
    margin: 10px 20px;
    padding: 15px 8px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.color};
    background-image: linear-gradient(117deg, #5a4be7, #c86dd7 102%);
`;
const Text = styled.p`
    line-height: 1.67;
    margin-bottom: 10px;
`;
const VipButton = styled(Link)`
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    line-height: normal;
    font-weight: 700;
    padding: 6px 35px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.borderPrimary};
    color: #32323d !important;
    background-color: #ffdb00;
    transition: all 0.2s ease;
    &:hover {
        filter: brightness(0.8);
    }
`;

function Sidebar() {
    const [isMark, setIsMark] = useState(false);

    const handleScrollMark = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop >= 50) {
            setIsMark(true);
        } else {
            setIsMark(false);
        }
    };

    return (
        <Container>
            <BrandContainer>
                <Link to="/" tabIndex={-1}>
                    <Brand />
                </Link>
            </BrandContainer>

            {/* Navbar section */}
            <Navbar>
                <NavItem
                    to={routesPath.myMusic}
                    icon={<BsMusicNoteList size={22} />}
                >
                    Cá Nhân
                </NavItem>
                <NavItem
                    to={routesPath.home}
                    icon={<IoDiscOutline size={24} />}
                >
                    Khám Phá
                </NavItem>
                <NavItem
                    to={routesPath.zingChart}
                    icon={<VscPieChart size={24} />}
                >
                    #zingchart
                </NavItem>
                <NavItem
                    to={routesPath.radio}
                    icon={<IoRadioOutline size={22} />}
                >
                    Radio <Img src={liveTag} alt="live-tag" />
                </NavItem>
                <NavItem
                    to={routesPath.follow}
                    icon={<IoNewspaperOutline size={22} />}
                >
                    Theo Dõi
                </NavItem>
            </Navbar>
            <Horizontal style={{ width: "80%", margin: "0 auto" }} />

            {/* Navbar scroll section */}
            <SidebarScroll>
                <CustomScrollBar
                    onScroll={handleScrollMark}
                    viewClass={`scroll-sidebar-view ${isMark ? "mark" : ""}`}
                >
                    <Navbar className="nav-scroll">
                        <NavItem
                            to={routesPath.newMusic}
                            icon={<BsMusicNoteBeamed size={22} />}
                        >
                            Nhạc Mới
                        </NavItem>
                        <NavItem
                            to={routesPath.category}
                            icon={<BiCategoryAlt size={24} />}
                        >
                            Thể Loại
                        </NavItem>
                        <NavItem
                            to={routesPath.top100}
                            icon={<HiOutlineStar size={24} />}
                        >
                            Top 100
                        </NavItem>
                        <NavItem
                            to={routesPath.mv}
                            icon={<BsTabletLandscape size={22} />}
                        >
                            MV
                        </NavItem>
                    </Navbar>
                    <VipBox>
                        <Text>Nghe nhạc không quảng cáo cùng kho nhạc VIP</Text>
                        <VipButton to="/">Nâng cấp VIP</VipButton>
                    </VipBox>
                </CustomScrollBar>
            </SidebarScroll>
            <Playlist></Playlist>
        </Container>
    );
}

export default Sidebar;
