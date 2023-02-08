import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container, ExpandContent } from "./styles";

const StartRide: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandContent = () => {
        setIsExpanded((prevState) => !prevState);
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
        </Container>
    );
};

export default StartRide;
