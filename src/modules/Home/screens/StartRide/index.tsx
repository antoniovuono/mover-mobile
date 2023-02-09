import SearchLocationInput from "@components/SearchLocationInput";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import { Container, ExpandContent, SearchLocationContent } from "./styles";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const StartRide: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandContent = () => {
        setIsExpanded((prevState) => !prevState);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
        <Container expand={isExpanded}>
            <ExpandContent>
                <TouchableOpacity
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    onPress={handleExpandContent}
                >
                    {isExpanded ? (
                        <Entypo
                            name="chevron-thin-down"
                            size={17}
                            color="black"
                        />
                    ) : (
                        <Entypo
                            name="chevron-thin-up"
                            size={17}
                            color="black"
                        />
                    )}
                </TouchableOpacity>
            </ExpandContent>

            <KeyboardAvoidingView behavior="position" enabled>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SearchLocationContent>
                        <SearchLocationInput placeholder="Local de embarque" />
                        <SearchLocationInput placeholder="Destino" />
                    </SearchLocationContent>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    );
};

export default StartRide;
