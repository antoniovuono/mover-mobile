import styled from "styled-components/native";

export const Container = styled.View<{ expand: boolean }>`
    background-color: ${({ theme }) => theme.colors.background_white};
    width: 85%;
    height: ${({ expand }) => (expand ? 65 : 20)}%;
    background-color: white;
    position: absolute;
    bottom: 30px;
    border-radius: 4px;
`;

export const ExpandContent = styled.View`
    padding: 8px;
    justify-content: center;
    align-items: center;
`;
