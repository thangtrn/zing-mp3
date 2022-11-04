import React from "react";
import styled from "styled-components";

const Card = styled.div`
    position: absolute;
    width: 33.33%;
    padding: 0 15px;
    user-select: none;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out,
        z-index 0s linear 0.25s;
    z-index: 0;
    opacity: 0;
`;

const Img = styled.img`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const GalleryItem = ({ className, src }) => {
    return (
        <Card className={className}>
            <Img src={src} alt="banner"></Img>
        </Card>
    );
};

export default GalleryItem;
