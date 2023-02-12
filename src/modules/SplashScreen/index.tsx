import React from "react";

import {
    Container,
    SubTitle,
    SubTitleContent,
    Title,
    SubTitleCircle,
    BackGroundImage,
} from "./styles";
import Img from "../../assets/images/background.jpg";

const SplashScreen: React.FC = () => {
    return (
        <BackGroundImage source={Img}>
            <Container>
                <Title>mover</Title>

                <SubTitleContent>
                    <SubTitle>mobilidade</SubTitle>
                    <SubTitleCircle />
                    <SubTitle>agilidade</SubTitle>
                    <SubTitleCircle />
                    <SubTitle>segurança</SubTitle>
                </SubTitleContent>
            </Container>
        </BackGroundImage>
    );
};

export default SplashScreen;
