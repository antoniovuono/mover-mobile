import styled from "styled-components/native";

export const Input = styled.TextInput`
    width: 100%;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.input_blue};
    border-radius: 4px;
    padding: 0 15px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary_title_dark};
    margin-bottom: 6px;
    font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
`;
