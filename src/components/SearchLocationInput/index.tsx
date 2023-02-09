import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Input, InputContent } from "./styles";

interface IInputProps extends TextInputProps {
    placeholder: string;
}

const SearchLocationInput: React.FC<IInputProps> = ({
    placeholder,
    ...rest
}) => {
    const theme = useTheme();

    return (
        <InputContent>
            <Entypo
                name="location"
                size={17}
                color={theme.colors.primary_gray}
            />
            <Input
                placeholder={placeholder}
                {...rest}
                placeholderTextColor={theme.colors.primary_gray}
            />
        </InputContent>
    );
};

export default SearchLocationInput;
