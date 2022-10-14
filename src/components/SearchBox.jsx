import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
`;

const SearchBox = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <button></button>
            <input type="text" />
        </Form>
    );
};

export default SearchBox;
