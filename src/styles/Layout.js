import styled from "styled-components";

export const Layout = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    position: relative;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
    background-size: 1920px auto;
    background-repeat: no-repeat;
    transition: background-color 0.2s ease;
`;

export const Container = styled.div`
    width: ${({ theme }) => `calc(100% - ${theme.sidebarWidth})`};
    height: calc(100% - 90px); // scroll
`;
