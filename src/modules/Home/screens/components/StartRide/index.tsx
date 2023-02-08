import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, ExpandContent } from "./styles";

const StartRide: React.FC = () => {
    return (
        <Container>
            <ExpandContent>
                <TouchableOpacity
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                    <Entypo name="chevron-thin-up" size={17} color="black" />
                </TouchableOpacity>
            </ExpandContent>
        </Container>
    );
};

export default StartRide;
