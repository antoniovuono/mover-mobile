import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.black_opacity};
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const BackGroundImage = styled.ImageBackground`
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background_white};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.ROBOTO_BLACK};
    font-size: 45px;
    letter-spacing: 18px;
`;

export const SubTitleContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    margin-top: 20px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.background_white};
    font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
    font-size: 16px;
`;

export const SubTitleCircle = styled.View`
    height: 10px;
    width: 10px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.background_white};
`;
