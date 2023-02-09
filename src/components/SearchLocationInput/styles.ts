import styled from "styled-components/native";

export const InputContent = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 11px;
    align-items: center;
`;

export const Input = styled.TextInput`
    background-color: red;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.input_blue};
    border-radius: 4px;
    padding: 0 15px;
    margin-left: 10px;
    flex: 1;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary_title_dark};
`;
