import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 85%;
    height: ${Platform.OS === "ios" ? 170 : 141}px;
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
