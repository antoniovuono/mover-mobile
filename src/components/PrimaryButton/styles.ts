import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary_success_green};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ROBOTO_MEDIUM};
    color: ${({ theme }) => theme.colors.background_white};
    font-size: 16px;
`;
