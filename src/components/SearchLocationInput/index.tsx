import React from "react";
import { TextInputProps } from "react-native";

import { Input } from "./styles";

interface IInputProps extends TextInputProps {
    placeholder: string;
}

const SearchLocationInput: React.FC<IInputProps> = ({
    placeholder,
    ...rest
}) => {
    return (
        <Input
            {...rest}
            placeholder={placeholder}
            maxLength={35}
            keyboardType="default"
        />
    );
};

export default SearchLocationInput;
