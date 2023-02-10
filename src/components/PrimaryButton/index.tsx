import React from "react";

import { Button, Title } from "./styles";

interface IButtonProps {
    title: string;
    onPress: () => void;
    primary?: boolean;
}

const PrimaryButton: React.FC<IButtonProps> = ({ title, onPress, primary }) => {
    return (
        <Button
            testID="primaryButton"
            onPress={onPress}
            activeOpacity={0.7}
            primary={primary}
        >
            <Title>{title}</Title>
        </Button>
    );
};

export default PrimaryButton;
