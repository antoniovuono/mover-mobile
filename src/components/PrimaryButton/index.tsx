import React from "react";

import { Button, Title } from "./styles";

interface IButtonProps {
    title: string;
    onPress: () => void;
}

const PrimaryButton: React.FC<IButtonProps> = ({ title, onPress, ...rest }) => {
    return (
        <Button onPress={onPress} activeOpacity={0.7}>
            <Title>{title}</Title>
        </Button>
    );
};

export default PrimaryButton;
