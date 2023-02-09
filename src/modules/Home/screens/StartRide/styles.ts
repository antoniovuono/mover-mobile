import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View<{ expand: boolean }>`
    background-color: ${({ theme }) => theme.colors.background_white};
    width: 85%;
    height: ${({ expand }) =>
        expand
            ? Platform.OS === "ios"
                ? 85
                : 75
            : Platform.OS === "ios"
            ? 19
            : 22}%;
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

export const SearchLocationContent = styled.View`
    padding: 10px 14px;
`;
