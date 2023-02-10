import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{ primary?: boolean }>`
    width: 100%;
    height: 40px;
    background-color: ${({ theme, primary }) =>
        primary
            ? theme.colors.primary_success_green
            : theme.colors.primary_warning_red};
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ROBOTO_MEDIUM};
    color: ${({ theme }) => theme.colors.background_white};
    font-size: 16px;
`;
