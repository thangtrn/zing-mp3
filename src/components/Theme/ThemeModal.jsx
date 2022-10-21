import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

import { CgClose } from "react-icons/cg";
import Topic from "./Topic";
import TopicItem from "./TopicItem";
import { themesData } from "../../constants";

const Box = styled.div`
    width: 70vw;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

const Header = styled.div`
    padding: 20px 30px;
    position: relative;
    color: ${({ theme }) => theme.color};
    line-height: 1.5;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
`;

const BtnClose = styled.button`
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: absolute;
    top: 15px;
    right: 15px;
    svg {
        color: ${({ theme }) => theme.color};
    }
`;

const Content = styled.div`
    max-height: 50vh;
    min-height: 500px;
    padding: 0 30px;
    overflow-y: scroll;
`;

const ThemeModal = ({ close }) => {
    return (
        <Box onClick={(e) => e.stopPropagation()}>
            <Header>
                <Title>Giao diện</Title>
                <Tippy
                    content={<span>Đóng</span>}
                    placement="top"
                    arrow={true}
                    duration={300}
                    delay={[75, 0]}
                >
                    <BtnClose onClick={close}>
                        <CgClose size={26} />
                    </BtnClose>
                </Tippy>
            </Header>
            <Content>
                {themesData.map((theme, idx) => (
                    <Topic key={idx} title={theme.name}>
                        {theme.topics.map((topic) => (
                            <TopicItem
                                title={topic.title}
                                src={topic.url}
                                active={topic.title === "Zing Music Awards"}
                            />
                        ))}
                    </Topic>
                ))}
            </Content>
        </Box>
    );
};

export default ThemeModal;
