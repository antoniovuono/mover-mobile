import React from "react";

import {
    Container,
    SubTitle,
    SubTitleContent,
    Title,
    SubTitleCircle,
} from "./styles";

const SplashScreen: React.FC = () => {
    return (
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
    );
};

export default SplashScreen;
