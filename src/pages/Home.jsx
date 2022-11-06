import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { zingApi } from "../axios";
import { Gallery } from "../components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: ${({ theme }) => theme.headerHeight};
    padding-top: 300px;
    padding: 0 ${({ theme }) => theme.paddingSection};
`;

const Home = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchHome = async () => {
            try {
                const response = await zingApi.getHome();
                setData(response.data);
            } catch (error) {
                console.log(error.msg);
            }
        };
        fetchHome();
    }, []);
    if (!data) return <Container>Loading</Container>;
    return (
        <Container>
            <Gallery galleryData={data?.items[0].items} />
        </Container>
    );
};

export default Home;
