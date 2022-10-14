import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import styled from "styled-components";

const TrackVertical = styled.div`
    position: absolute;
    width: 4px;
    transition: opacity 200ms ease 0s;
    right: 2px;
    top: 2px;
    bottom: 2px;
    z-index: 100;
`;

const ThumbVertical = styled.div`
    position: relative;
    display: block;
    width: 100%;
    transform: translateY(0px);
    border-radius: 2px;
    background-color: ${({ theme }) => theme.thumbColor};
    z-index: 100;
`;

const View = styled.main`
    position: absolute;
    inset: 0px;
    overflow: hidden scroll;
    margin-right: -6px;
    margin-bottom: 0px;
    padding: 0 ${({ theme }) => theme.paddingSection};
    margin: 0 auto;
`;

const CustomScrollBar = ({ onScroll, children }) => {
    return (
        <Scrollbars
            onScroll={onScroll}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                // minHeight: "calc(100vh - 90px)",
            }}
            renderTrackVertical={({ style, ...props }) => (
                <TrackVertical {...props} />
            )}
            renderThumbVertical={({ style, ...props }) => (
                <ThumbVertical {...props} />
            )}
            renderView={(...props) => <View {...props}></View>}
        >
            {children}
        </Scrollbars>
    );
};

export default CustomScrollBar;
