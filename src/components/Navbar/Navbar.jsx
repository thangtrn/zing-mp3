import React from "react";
import styled from "styled-components";

const Container = styled.ul`
    width: 100%;
    margin-bottom: 15px;
`;

const Navbar = ({ className, children }) => {
    return <Container className={className}>{children}</Container>;
};

export default Navbar;
