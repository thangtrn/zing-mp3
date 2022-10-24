import React, { forwardRef, memo } from "react";

import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styled from "styled-components";

const ActionItemStyled = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    /* flex: 1; */
    cursor: pointer;
    background-color: ${({ theme }) => theme.alphaBg};
    border-radius: 50%;
`;

const ButtonStyled = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 50%;
    background-color: transparent;
    overflow: hidden;
    &:hover {
        filter: brightness(0.8);
    }
    svg {
        color: ${({ theme }) => theme.settingColor};
    }
`;

const LinkStyled = styled(ButtonStyled).attrs({
    as: Link,
})``;

const ATagStyled = styled(ButtonStyled).attrs({
    as: "a",
})``;

const ActionItem = (
    {
        onClick = () => {},
        to = null,
        href = null,
        tippyContent = null,
        icon,
        style,
        children = null,
    },
    ref
) => {
    let Comp = ButtonStyled;
    const props = {
        onClick,
    };
    if (to) {
        Comp = LinkStyled;
        props.to = to;
    } else if (href) {
        Comp = ATagStyled;
        props.href = href;
        props.target = "_blank";
        props.rel = "noopener noreferrer";
    }
    let TippyComp = React.Fragment;
    const tippyOpts = {};
    if (tippyContent) {
        TippyComp = Tippy;
        tippyOpts.content = <span>{tippyContent}</span>;
        tippyOpts.placement = "bottom";
        tippyOpts.arrow = true;
        tippyOpts.duration = 300;
        tippyOpts.delay = [75, 0];
    }

    return (
        <ActionItemStyled className="action-item" style={style} ref={ref}>
            <TippyComp {...tippyOpts}>
                <Comp {...props}>{icon}</Comp>
            </TippyComp>
            {children}
        </ActionItemStyled>
    );
};

export default memo(forwardRef(ActionItem));
