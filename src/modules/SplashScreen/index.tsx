import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";

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
    // const navigation = useNavigation();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("Home");
    //     }, 4000);
    // });

    return (
        <BackGroundImage source={Img}>
            <Container>
                <StatusBar translucent barStyle="light-content" />
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
