import React, { memo, useRef, useState } from "react";
import styled from "styled-components";

import { RiVipCrown2Line, RiVipLine, RiVipCrownLine } from "react-icons/ri";
import { FiUpload, FiSettings, FiLogOut } from "react-icons/fi";
import { BiBlock } from "react-icons/bi";
import { BsChevronRight, BsPlayCircle } from "react-icons/bs";
import { MdOutlineHighQuality } from "react-icons/md";

import { ThemeIcon } from "../assets/icons";
import ActionItem from "./ActionItem";
import DropdownList from "./DropdownList";
import DropdowmItem from "./DropdownItem";
import { useOutSide } from "../hooks";

const Container = styled.div`
    display: flex;
    margin-left: 10px;
    color: ${({ theme }) => theme.textPlaceholder};
    .action-item:not(:last-child) {
        margin-right: 12px;
    }
`;
const Horizontal = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.borderPrimary};
    margin: 10px 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Actions = () => {
    const settingRef = useRef();
    const profileRef = useRef();
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    // handle click outside close menu
    useOutSide(settingRef, (e) => {
        // if menu open && menu not containt e.target => close menu
        if (isOpenSetting && !settingRef?.current?.contains(e.target)) {
            setIsOpenSetting(false);
        }
    });
    // handle click outside close profile
    useOutSide(settingRef, (e) => {
        // if menu profile && profile not containt e.target => close profile
        if (profileRef && !profileRef?.current?.contains(e.target)) {
            setIsOpenProfile(false);
        }
    });

    return (
        <Container>
            <ActionItem tippyContent="Chủ đề" icon={<ThemeIcon size={20} />} />
            <ActionItem
                tippyContent="Nâng cấp VIP"
                href="https://www.facebook.com/"
                icon={<RiVipCrown2Line size={20} />}
            />
            <ActionItem tippyContent="Tải lên" icon={<FiUpload size={20} />} />
            {/* Setting section */}
            <ActionItem
                ref={settingRef}
                tippyContent="Cài đặt"
                onClick={() => setIsOpenSetting(!isOpenSetting)}
                icon={<FiSettings size={18} />}
            >
                {isOpenSetting && (
                    <DropdownList footer={true}>
                        <DropdowmItem iconLeft={<BiBlock size={20} />}>
                            Danh sách chặn
                        </DropdowmItem>
                        <DropdowmItem
                            iconLeft={<MdOutlineHighQuality size={20} />}
                            iconRight={<BsChevronRight size={18} />}
                        >
                            Chất lượng nhạc
                        </DropdowmItem>
                        <DropdowmItem
                            iconLeft={<BsPlayCircle size={18} />}
                            iconRight={<BsChevronRight size={18} />}
                        >
                            Giao diện
                        </DropdowmItem>
                    </DropdownList>
                )}
            </ActionItem>
            {/* Avatar section */}
            <ActionItem
                ref={profileRef}
                onClick={() => setIsOpenProfile(!isOpenProfile)}
                icon={
                    <Image src="https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg" />
                }
            >
                {isOpenProfile && (
                    <DropdownList>
                        <DropdowmItem iconLeft={<RiVipCrownLine size={18} />}>
                            Nâng cấp VIP
                        </DropdowmItem>
                        <DropdowmItem iconLeft={<RiVipLine size={18} />}>
                            Mua code VIP
                        </DropdowmItem>
                        <Horizontal />
                        <DropdowmItem iconLeft={<FiLogOut size={20} />}>
                            Đăng xuất
                        </DropdowmItem>
                    </DropdownList>
                )}
            </ActionItem>
        </Container>
    );
};

export default memo(Actions);