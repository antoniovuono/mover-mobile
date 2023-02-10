import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Input } from "./styles";

interface IInputProps extends TextInputProps {
    placeholder: string;
}

const SearchLocationInput: React.FC<IInputProps> = ({
    placeholder,
    ...rest
}) => {
    const theme = useTheme();

    return (
        <Input
            placeholder={placeholder}
            {...rest}
            placeholderTextColor={theme.colors.primary_gray}
        />
    );
};

export default SearchLocationInput;
