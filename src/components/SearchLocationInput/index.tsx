import { Entypo } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";

import { Input, InputContent } from "./styles";

const SearchLocationInput: React.FC = () => {
    const theme = useTheme();

    return (
        <InputContent>
            <Entypo
                name="location"
                size={18}
                color={theme.colors.primary_gray}
            />
            <Input placeholder="Ponto de embarque" />
        </InputContent>
    );
};

export default SearchLocationInput;
