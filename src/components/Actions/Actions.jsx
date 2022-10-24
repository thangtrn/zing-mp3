import React, { memo, useRef, useState } from "react";
import styled from "styled-components";

// icon start
import { RiVipCrown2Line, RiVipLine, RiVipCrownLine } from "react-icons/ri";
import { FiUpload, FiSettings, FiLogOut } from "react-icons/fi";
import { BiBlock } from "react-icons/bi";
import { BsChevronRight, BsPlayCircle } from "react-icons/bs";
import { MdOutlineHighQuality } from "react-icons/md";
// icon end

import { ThemeIcon } from "../../assets/icons";
import ActionItem from "./ActionItem";
import { DropdownList, DropdownItem } from "../Dropdown";
import { useOutSide } from "../../hooks";
import Modal from "../Modal";
import { ThemeModal } from "../Theme";
import defaultAvatar from "../../assets/images/default-avatar.png";
import { Horizontal } from "../../styles";

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    color: ${({ theme }) => theme.textPlaceholder};
    .action-item:not(:last-child) {
        margin-right: 12px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
`;

const Actions = () => {
    const settingRef = useRef(null);
    const profileRef = useRef(null);
    const [user] = useState(true);
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

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
            {/* Setting choose theme */}
            <ActionItem
                tippyContent="Chủ đề"
                onClick={() => setIsOpenModal(!isOpenModal)}
                icon={<ThemeIcon size={20} />}
            >
                <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                    <ThemeModal close={() => setIsOpenModal(false)} />
                </Modal>
            </ActionItem>
            {/* Setting Nap dau */}
            <ActionItem
                tippyContent="Nâng cấp VIP"
                href="https://www.facebook.com/"
                icon={<RiVipCrown2Line size={20} />}
            />
            {/* Setting Upload */}
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
                        <DropdownItem iconLeft={<BiBlock size={20} />}>
                            Danh sách chặn
                        </DropdownItem>
                        <DropdownItem
                            iconLeft={<MdOutlineHighQuality size={20} />}
                            iconRight={<BsChevronRight size={18} />}
                        >
                            Chất lượng nhạc
                        </DropdownItem>
                        <DropdownItem
                            iconLeft={<BsPlayCircle size={18} />}
                            iconRight={<BsChevronRight size={18} />}
                        >
                            Giao diện
                        </DropdownItem>
                    </DropdownList>
                )}
            </ActionItem>
            {/* Avatar section */}

            {user ? (
                <ActionItem
                    style={{ width: "38px", height: "38px" }} // avatar width height 38px
                    ref={profileRef}
                    onClick={() => setIsOpenProfile(!isOpenProfile)}
                    icon={
                        <Image src="https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg" />
                    }
                >
                    {isOpenProfile && (
                        <DropdownList>
                            <DropdownItem
                                iconLeft={<RiVipCrownLine size={18} />}
                            >
                                Nâng cấp VIP
                            </DropdownItem>
                            <DropdownItem iconLeft={<RiVipLine size={18} />}>
                                Mua code VIP
                            </DropdownItem>
                            <Horizontal />
                            <DropdownItem iconLeft={<FiLogOut size={20} />}>
                                Đăng xuất
                            </DropdownItem>
                        </DropdownList>
                    )}
                </ActionItem>
            ) : (
                <ActionItem icon={<Image src={defaultAvatar} />}></ActionItem>
            )}
        </Container>
    );
};

export default memo(Actions);
