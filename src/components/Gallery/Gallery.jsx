import React, { useCallback } from "react";
import styled from "styled-components";
import GalleryItem from "./GalleryItem";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
    padding: 32px 0 20px;
`;

const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 -15px;
    height: 191.602px;
    position: relative;
    &:hover .gallery-arrow {
        opacity: 1;
    }
    .gallery-first {
        transform: translateX(-20%);
    }
    .gallery-previous {
        transform: translateX(-100%);
        opacity: 1;
        z-index: 1;
    }
    .gallery-selected {
        transform: translateX(0);
        opacity: 1;
        z-index: 10;
    }
    .gallery-next {
        transform: translateX(100%);
        opacity: 1;
        z-index: 1;
    }

    .gallery-last {
        transform: translateX(20%);
    }
`;

const Button = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    color: ${({ theme }) => theme.color};
    background-color: hsla(0, 0%, 100%, 0.15);
    box-shadow: 0 2px 4px 0 rgb(226 102 102 / 15%);
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`;

const Gallery = ({ galleryData }) => {
    const [clss, setClss] = useState([
        "gallery-selected",
        "gallery-next",
        "gallery-last",
        "gallery-add",
        "gallery-first",
        "gallery-previous",
    ]);

    const sort = useCallback(
        (num) => {
            if (num === -1) {
                const [fist, ...rest] = clss;
                setClss([...rest, fist]);
            } else if (num === 1) {
                const tmp = clss.pop();
                setClss([tmp, ...clss]);
            }
        },
        [clss]
    );

    useEffect(() => {
        const timer = setInterval(() => sort(1), 5000);
        return () => {
            clearInterval(timer);
        };
    }, [sort]);

    return (
        <Container>
            <GalleryContainer>
                <Button
                    style={{ left: "25px" }}
                    className="gallery-arrow"
                    onClick={() => sort(-1)}
                >
                    <BsChevronLeft size={28} />
                </Button>
                {galleryData.map((item, idx) => (
                    <GalleryItem
                        key={idx}
                        src={item.banner}
                        className={clss[idx]}
                    />
                ))}
                <Button
                    style={{ right: "25px" }}
                    className="gallery-arrow"
                    onClick={() => sort(1)}
                >
                    <BsChevronRight size={28} />
                </Button>
            </GalleryContainer>
        </Container>
    );
};

export default Gallery;
