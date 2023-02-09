import styled from "styled-components/native";

export const Input = styled.TextInput`
    background-color: red;
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.input_blue};
    margin-bottom: 11px;
    border-radius: 4px;
    padding: 0 15px;
`;
